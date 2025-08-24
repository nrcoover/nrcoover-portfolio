import { useContext } from "react";
import { ProjectPreviewContext } from "../../../store/project-preview-context/ProjectPreviewContext";
import PreviewButton from "../../common/ui/preview-button/PreviewButton";

import classes from "./ProjectCard.module.css";

// TODO: Move to isolated Types file.
export type Image = {
	src: string;
	alt: string;
};

export type CoverArt = {
	coverArtPath: string;
	isAiGeneratedImage: boolean;
};

export type ImageData = {
	coverArt: CoverArt;
	imagesPaths: Image[];
};

export type TagData = {
	primaryTag: string;
	otherTags: string[];
};

export type CodeLinks = {
	type: string;
	url: string;
};

export type Project = {
	id: number;
	title: string;
	description: string;
	dateAdded: Date;
	isFavorite: boolean;
	imageData: ImageData;
	tagData: TagData;
	links: CodeLinks[];
};

interface ProjectCardProps {
	project: Project;
	index: number;
	selected?: boolean;
	scrollToIndex: (index: number) => void;
	category: string;
}

const TAB_FOCUSABLE = 0;
const TAB_SKIP = -1;

const ProjectCard = ({
	project,
	index,
	selected = false,
	scrollToIndex,
	category,
}: ProjectCardProps) => {
	const { isModalOpen, setSelectedProject, openPreviewModal } = useContext(
		ProjectPreviewContext
	);

	const isPrimaryCategory = project.tagData.primaryTag === category;
	const isAiGeneratedImage = project.imageData.coverArt.isAiGeneratedImage;

	const handleSelect = () => {
		scrollToIndex(index);
	};

	const handlePreviewClick = () => {
		setSelectedProject(project);
		openPreviewModal();
	};

	return (
		<div
			className={
				selected ? classes.selectedProjectSpacer : classes.projectSpacer
			}
		>
			<article
				role="group"
				aria-label={project.title}
				className={`${classes.projectCard} ${selected ? classes.selected : ""} ${isPrimaryCategory ? classes.primaryTagGlow : ""}`}
				aria-selected={selected}
				tabIndex={selected ? TAB_FOCUSABLE : TAB_SKIP}
				onClick={handleSelect}
			>
				<div className={classes.coverArtContainer}>
					<img
						src={project.imageData.coverArt.coverArtPath}
						alt={`Cover art for ${project.title}`}
					/>
					{isAiGeneratedImage && (
						<div className={classes.aiNotice}>
							<p>A.I. Generated Image</p>
						</div>
					)}

					<div className={classes.titleBox}>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
					</div>
					<div
						className={`${classes.previewBox} ${
							selected ? "" : classes.hiddenPreviewBox
						}`}
					>
						<PreviewButton
							selected={selected}
							handlePreviewClick={handlePreviewClick}
							isModalOpen={isModalOpen}
						/>
					</div>
				</div>
			</article>
		</div>
	);
};

export default ProjectCard;

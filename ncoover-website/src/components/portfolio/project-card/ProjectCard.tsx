import { useContext } from "react";
import { ProjectPreviewContext } from "../../../store/project-preview-context/ProjectPreviewContext";
import PreviewButton from "../../common/ui/preview-button/PreviewButton";

import { PATHS } from "../../../constants/paths";
import { absoluteLocationTypes } from "../../../constants/styles";
import { LocationContext } from "../../../store/location-context/LocationContext";
import type { Project } from "../../../typings";
import FavoriteButton from "../../common/ui/favorite-button/FavoriteButton";
import PrimaryTagIcon from "../../common/ui/primary-tag-icon/PrimaryTagIcon";

import classes from "./ProjectCard.module.css";

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
	const { locationPath } = useContext(LocationContext);

	const isPrimaryCategory = project.tagData.primaryTag === category;
	const isAiGeneratedImage = project.imageData.coverArt.isAiGeneratedImage;

	const handleSelect = () => {
		setSelectedProject(project);
		scrollToIndex(index);
	};

	const handlePreviewClick = () => {
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

					<FavoriteButton
						project={project}
						maxWidth={"2rem"}
						padding={".5rem"}
					/>

					<PrimaryTagIcon
						primaryTag={project.tagData.primaryTag}
						maxWidth={"1.5rem"}
						absoluteLocations={[
							absoluteLocationTypes.Right,
							absoluteLocationTypes.Bottom,
						]}
						margin={"0.75rem"}
					/>

					<div className={classes.titleBox}>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
					</div>
					<div
						className={`${classes.previewBox} ${
							selected ? "" : classes.hiddenPreviewBox
						}`}
					>
						{locationPath != PATHS.Portfolio.Favorites && (
							<PreviewButton
								selected={selected}
								handlePreviewClick={handlePreviewClick}
								isModalOpen={isModalOpen}
							/>
						)}
					</div>
				</div>
			</article>
		</div>
	);
};

export default ProjectCard;

import type { CSSProperties } from "react";
import { useContext } from "react";
import { ProjectPreviewContext } from "../../../store/project-preview-context/ProjectPreviewContext";
import PreviewButton from "../../common/ui/preview-button/PreviewButton";

import { PATHS } from "../../../constants/paths";
import { absoluteLocationTypes } from "../../../constants/styles";
import { LocationContext } from "../../../store/location-context/LocationContext";
import type { Project } from "../../../typings";
import FavoriteButton from "../../common/ui/favorite-button/FavoriteButton";
import PrimaryTagIcon from "../../common/ui/primary-tag-icon/PrimaryTagIcon";

import { TAG_TO_GLOW_VAR } from "../../../constants/glowColors";
import { getCategoryForTag } from "../../../helpers/tagMappingHelpers";
import { SettingsContext } from "../../../store/settings-context/SettingsContext";
import classes from "./ProjectCard.module.css";

interface ProjectCardProps {
	project: Project;
	index: number;
	selected?: boolean;
	scrollToIndex: (index: number) => void;
	category: string;
}

type GlowStyle = CSSProperties & { ["--glow-rgb"]?: string };

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
	const { userSettings } = useContext(SettingsContext);
	const { locationPath } = useContext(LocationContext);

	const {
		displayFavoritesIcon,
		displayImageAiLabel,
		displayPrimaryTagIcon,
		displayPrimaryTagGlow,
	} = userSettings;

	const primaryTag = project.tagData.primaryTag;
	const isPrimaryCategory = getCategoryForTag(primaryTag) === category;

	const cssVarName = TAG_TO_GLOW_VAR[primaryTag.toLowerCase()] ?? "--react-rgb";
	const style: GlowStyle = { ["--glow-rgb"]: `var(${cssVarName})` };

	// console.log(
	// 	"Primary Tag: ",
	// 	primaryTag,
	// 	"; Category for tag:",
	// 	getCategoryForTag(primaryTag)
	// );
	// console.log("Category: ", category);
	// console.log("Is Primary Category: ", isPrimaryCategory);

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
				className={`
					${classes.projectCard} 
					${selected ? classes.selected : ""} 
					${
						isPrimaryCategory && displayPrimaryTagGlow && selected
							? classes.primaryTagGlowSelected
							: ""
					} 
					${isPrimaryCategory && displayPrimaryTagGlow ? classes.primaryTagGlow : ""}
					`}
				aria-selected={selected}
				style={style}
				tabIndex={selected ? TAB_FOCUSABLE : TAB_SKIP}
				onClick={handleSelect}
			>
				<div className={classes.coverArtContainer}>
					<img
						src={
							project.imageData.coverArt.coverArtPath
								? project.imageData.coverArt.coverArtPath
								: "/images/projects/cover-art/typescript-project_ai-generated.png" //TODO: Update default image
						}
						alt={`Cover art for ${project.title}`}
					/>
					{isAiGeneratedImage && displayImageAiLabel && (
						<div className={classes.aiNotice}>
							<p>A.I. Generated Image</p>
						</div>
					)}

					{displayFavoritesIcon && (
						<FavoriteButton
							project={project}
							maxWidth={"2rem"}
							padding={".5rem"}
						/>
					)}

					{displayPrimaryTagIcon && (
						<PrimaryTagIcon
							primaryTag={primaryTag}
							maxWidth={"1.5rem"}
							absoluteLocations={[
								absoluteLocationTypes.Right,
								absoluteLocationTypes.Bottom,
							]}
							margin={"0.75rem"}
						/>
					)}

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

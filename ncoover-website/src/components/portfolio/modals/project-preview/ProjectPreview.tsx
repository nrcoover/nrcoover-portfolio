import { useContext, useEffect, useState, type Ref } from "react";
import { NavLink } from "react-router-dom";
import { iconSocial } from "../../../../constants/iconTypes";
import { getIconName } from "../../../../helpers/iconHelper.ts";
import { ProjectPreviewContext } from "../../../../store/project-preview-context/ProjectPreviewContext";
import type { Image, Project } from "../../../../typings/index.d.ts";
import Icon from "../../../common/icon/Icon";
import Modal from "../../../common/modal/Modal";
import ImageCarousel from "../../image-carousel/ImageCarousel";

import { absoluteLocationTypes } from "../../../../constants/styles";
import globalClasses from "../../../../global.module.css";
import Separator from "../../../common/separator/Separator";
import FavoriteButton from "../../../common/ui/favorite-button/FavoriteButton";
import PrimaryTagIcon from "../../../common/ui/primary-tag-icon/PrimaryTagIcon";
import Containerizer from "../../../common/wrappers/containerizer/Containerizer";

import { DEFAULT_PROJECT } from "../../../../data/projects.ts";
import classes from "./ProjectPreview.module.css";

interface ProjectPreviewProps {
	ref: Ref<HTMLDialogElement> | undefined;
	project: Project | undefined;
}

const defaultData: Project = DEFAULT_PROJECT;

function projectIncludesImages(project: Project): boolean {
	const images = project?.imageData.imagesPaths;
	const filteredImages = images?.filter((imagePath) => imagePath.src !== "");
	const includesImages: boolean =
		filteredImages != undefined && filteredImages?.length >= 1;
	return includesImages;
}

// TODO: Change to using Projects native IsFavorite property once data is retrieved from database and not hardcoded.
const ProjectPreview = ({ project, ref }: ProjectPreviewProps) => {
	const { closePreviewModal } = useContext(ProjectPreviewContext);

	const [hasImages, setHasImages] = useState<boolean>();
	const [selectedImage, setSelectedImage] = useState<Image | undefined>(
		project?.imageData?.imagesPaths[0]
	);

	useEffect(() => {
		const includesImages =
			project !== undefined && projectIncludesImages(project);

		setHasImages(includesImages);
	}, [project]);

	useEffect(() => {
		const includesImages =
			project !== undefined && projectIncludesImages(project);

		const selectedImage = includesImages
			? project?.imageData?.imagesPaths[0]
			: defaultData.imageData.imagesPaths[0];

		setSelectedImage(selectedImage);
	}, [project, project?.imageData?.imagesPaths]);

	const handleCloseModal = () => {
		closePreviewModal();
	};

	const closeButton = (
		<button type="button" onClick={handleCloseModal}>
			Close
		</button>
	);

	const defaultImageCaption = "This image has no description.";

	// use for debugging
	// project = undefined;

	if (!project) {
		return (
			<div className={classes.preview}>
				<Modal
					ref={ref}
					onClose={handleCloseModal}
					title={"Project Not Found!"}
				>
					<p>
						Either the project could not be found or there was an issue loading
						the data.
						<br></br>
						Please try again later!
					</p>
					{closeButton}
				</Modal>
			</div>
		);
	}

	const { title, description, imageData, tagData } = project;
	const { imagesPaths } = imageData;
	const { primaryTag, otherTags } = tagData;

	const gitHubUrl = (project.links ?? defaultData.links).find(
		(link) => link.type === iconSocial.GitHub
	)?.url;
	const codePenUrl = (project.links ?? defaultData.links).find(
		(link) => link.type === iconSocial.CodePen
	)?.url;
	const websiteUrl = (project.links ?? defaultData.links).find(
		(link) => link.type === iconSocial.Website
	)?.url;

	const previewContent = (
		<>
			<div className={classes.previewTitle}>
				{/* TODO: Reavaluate absolute positioning of Primary Tag and Favorite Button (may not need to be absolute now that it is within a flex container) */}
				<PrimaryTagIcon
					primaryTag={
						project.tagData.primaryTag ?? defaultData.tagData.primaryTag
					}
					maxWidth={"3rem"}
					absoluteLocations={[
						absoluteLocationTypes.Left,
						absoluteLocationTypes.Bottom,
					]}
					margin={".75rem 0"}
				/>
				<div className={classes.titleWrapper}>
					<h3>{title}</h3>
				</div>
				<FavoriteButton project={project} padding={".5rem 0"} />
				<Separator width={"100%"} margin={"0"}></Separator>
			</div>
			<div className={classes.previewContent}>
				<div className={classes.previewItem}>
					<h4>Title</h4>
					<p>{title ?? defaultData.title}</p>
					<h4>Project Description</h4>
					<p>
						{description && description !== ""
							? description
							: defaultData.description}
					</p>
					<h4>Image Description</h4>
					<p>{selectedImage?.caption ?? defaultImageCaption}</p>
				</div>
				<div className={classes.previewItem}>
					<ImageCarousel
						images={
							imagesPaths && hasImages
								? imagesPaths
								: defaultData.imageData.imagesPaths
						}
						onImageSelection={setSelectedImage}
					></ImageCarousel>
				</div>
			</div>
			<Separator width={"auto"} />

			<h4>Project Links</h4>
			<div className={classes.previewIconsWrapper}>
				<ul className={classes.previewIcons}>
					{gitHubUrl && (
						<li className={globalClasses.iconContainer}>
							<>
								<NavLink
									to={gitHubUrl}
									className={({ isActive }) =>
										isActive
											? (classes.active, globalClasses.iconContainer)
											: globalClasses.iconContainer
									}
									end
								>
									<Icon
										source={iconSocial.GitHub}
										className={classes.previewLink}
									/>
								</NavLink>
								<p>{getIconName(iconSocial.GitHub)}</p>
							</>
						</li>
					)}
					{codePenUrl && (
						<li className={globalClasses.iconContainer}>
							<NavLink
								to={codePenUrl}
								className={({ isActive }) =>
									isActive
										? (classes.active, globalClasses.iconContainer)
										: globalClasses.iconContainer
								}
								end
							>
								<Icon
									source={iconSocial.CodePen}
									className={classes.previewLink}
								/>
							</NavLink>
							<p>{getIconName(iconSocial.CodePen)}</p>
						</li>
					)}
					{websiteUrl && (
						<li className={globalClasses.iconContainer}>
							<NavLink
								to={websiteUrl}
								className={`${({ isActive }: { isActive: boolean }) =>
									isActive
										? (classes.active, globalClasses.iconContainer)
										: globalClasses.iconContainer}`}
								end
							>
								<Icon
									source={iconSocial.Website}
									className={classes.previewLink}
								/>
							</NavLink>
							<p>{getIconName(iconSocial.Website)}</p>
						</li>
					)}
				</ul>
			</div>
			<div>
				<p id={classes.Tags}>
					Tags: {primaryTag ?? defaultData.tagData.primaryTag} (
					<i>Primary Tag</i>)
					{(otherTags ?? defaultData.tagData.otherTags).map((tag) => (
						<span key={tag}>, {tag}</span>
					))}
				</p>
			</div>

			{ref && <div className={classes.closeButton}>{closeButton}</div>}
		</>
	);

	return (
		<div className={`${classes.preview}`}>
			{ref ? (
				<Modal ref={ref} onClose={handleCloseModal}>
					{previewContent}
				</Modal>
			) : (
				<Containerizer>{previewContent}</Containerizer>
			)}
		</div>
	);
};

export default ProjectPreview;

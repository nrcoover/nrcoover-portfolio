import { useContext, type Ref } from "react";
import { NavLink } from "react-router-dom";
import { iconSocial } from "../../../../constants/iconTypes";
import { PATHS } from "../../../../constants/paths";
import { getIconName } from "../../../../helpers/iconHelper.ts";
import { ProjectPreviewContext } from "../../../../store/project-preview-context/ProjectPreviewContext";
import type { Project } from "../../../../typings/index.d.ts";
import Icon from "../../../common/icon/Icon";
import Modal from "../../../common/modal/Modal";
import ImageCarousel from "../../image-carousel/ImageCarousel";

import { absoluteLocationTypes } from "../../../../constants/styles";
import globalClasses from "../../../../global.module.css";
import Separator from "../../../common/separator/Separator";
import FavoriteButton from "../../../common/ui/favorite-button/FavoriteButton";
import PrimaryTagIcon from "../../../common/ui/primary-tag-icon/PrimaryTagIcon";
import Containerizer from "../../../common/wrappers/containerizer/Containerizer";

import classes from "./ProjectPreview.module.css";

interface ProjectPreviewProps {
	ref: Ref<HTMLDialogElement> | undefined;
	project: Project | undefined;
}

// TODO: Change to useing Projects native IsFavorite property once data is retrieved from database and not hardcoded.
const ProjectPreview = ({ project, ref }: ProjectPreviewProps) => {
	const { closePreviewModal } = useContext(ProjectPreviewContext);

	const handleCloseModal = () => {
		closePreviewModal();
	};

	const closeButton = (
		<button type="button" onClick={handleCloseModal}>
			Close
		</button>
	);

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

	const previewContent = (
		<>
			<div className={classes.previewTitle}>
				<PrimaryTagIcon
					primaryTag={project.tagData.primaryTag}
					maxWidth={"3rem"}
					absoluteLocations={[
						absoluteLocationTypes.Left,
						absoluteLocationTypes.Bottom,
					]}
					margin={".75rem 0"}
				/>
				<h3>{title}</h3>
				<FavoriteButton project={project} padding={".5rem 0"} />
			</div>
			<div className={classes.previewContent}>
				<div className={classes.previewItem}>
					<h4>Project Description</h4>
					<p>{description}</p>
					<h4>Image Description</h4>
					<p>
						This is a bunch of placeholder text until I can get the real
						descriptions dynamically implemented. Thank you for your continued
						patience and understanding.
					</p>
				</div>
				<div className={classes.previewItem}>
					<ImageCarousel images={imagesPaths}></ImageCarousel>
				</div>
			</div>
			<Separator width={"auto"} />

			<h4>Project Links</h4>
			<div className={classes.previewIconsWrapper}>
				<ul className={classes.previewIcons}>
					<li className={globalClasses.iconContainer}>
						<NavLink
							to={PATHS.Home}
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
					</li>
					<li className={globalClasses.iconContainer}>
						<NavLink
							to={PATHS.Home}
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
					<li className={globalClasses.iconContainer}>
						<NavLink
							to={PATHS.Home}
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
				</ul>
			</div>
			<div>
				<p id={classes.Tags}>
					Tags: {primaryTag} (<i>Primary Tag</i>)
					{otherTags.map((tag) => (
						<>, {tag}</>
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

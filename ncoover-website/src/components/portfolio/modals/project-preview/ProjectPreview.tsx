import { useContext, type Ref } from "react";
import { NavLink } from "react-router-dom";
import { iconSocial, iconUi } from "../../../../constants/iconTypes";
import { PATHS } from "../../../../constants/paths";
import { getIconName } from "../../../../helpers/icon-helper";
import { FavoritesContext } from "../../../../store/favorites-context/FavoritesContext";
import { ProjectPreviewContext } from "../../../../store/project-preview-context/ProjectPreviewContext";
import Icon from "../../../common/icon/Icon";
import Modal from "../../../common/modal/Modal";
import ImageCarousel from "../../image-carousel/ImageCarousel";
import type { Project } from "../../project-card/ProjectCard";

import globalClasses from "../../../../global.module.css";
import classes from "./ProjectPreview.module.css";

interface ProjectPreviewProps {
	ref: Ref<HTMLDialogElement> | undefined;
	project: Project | undefined;
}

// TODO: Change to useing Projects native IsFavorite property once data is retrieved from database and not hardcoded.
const ProjectPreview = ({ ref, project }: ProjectPreviewProps) => {
	const { closePreviewModal } = useContext(ProjectPreviewContext);
	const { favoriteProjectsIds, addFavorite, removeFavorite } =
		useContext(FavoritesContext);

	const isFavoriteProject =
		!!project && favoriteProjectsIds.includes(project.id);

	const handleCloseModal = () => {
		closePreviewModal();
	};

	const handleAddFavorite = () => {
		if (!project) {
			return;
		}
		console.log(project.id);
		addFavorite(project);
	};

	const handleRemoveFavorite = () => {
		if (!project) {
			return;
		}
		console.log("Item removed");
		removeFavorite(project.id);
	};

	const closeButton = (
		<button type="button" onClick={handleCloseModal}>
			Close
		</button>
	);

	const favoriteButton = (
		<button
			type="button"
			onClick={isFavoriteProject ? handleRemoveFavorite : handleAddFavorite}
			disabled={!project}
		>
			<Icon
				source={isFavoriteProject ? iconUi.Favorite : iconUi.FavoriteOutline}
				className={classes.previewLink}
			/>
		</button>
	);

	// use for debugging
	// project = undefined;

	if (!project) {
		return (
			<div className={classes.preview}>
				<Modal ref={ref} onClose={handleCloseModal}>
					<div className={classes.previewTitle}>
						<h3>Project Not Found!</h3>
					</div>
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

	return (
		<div className={`${classes.preview}`}>
			<Modal ref={ref} onClose={handleCloseModal}>
				<div className={classes.previewTitle}>
					<div className={classes.favoriteButton}>{favoriteButton}</div>
					<h3>{title}</h3>
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
				<div>
					<p>
						Tags: {primaryTag} (<i>Primary Tag</i>)
						{otherTags.map((tag) => (
							<>, {tag}</>
						))}
					</p>
				</div>
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

				<div className={classes.closeButton}>{closeButton}</div>
			</Modal>
		</div>
	);
};

export default ProjectPreview;

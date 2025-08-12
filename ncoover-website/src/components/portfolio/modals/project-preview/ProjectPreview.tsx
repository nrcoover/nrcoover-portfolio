import { useContext, type Ref } from "react";
import { NavLink } from "react-router-dom";
import { iconSocial } from "../../../../constants/iconTypes";
import { PATHS } from "../../../../constants/paths";
import { getIconName } from "../../../../helpers/icon-helper";
import { ProjectPreviewContext } from "../../../../store/project-preview-context/ProjectPreviewContext";
import Icon from "../../../common/icon/Icon";
import ImageCarousel from "../../image-carousel/ImageCarousel";
import type { Project } from "../../project-card/ProjectCard";

import globalClasses from "../../../../global.module.css";
import classes from "./ProjectPreview.module.css";

interface ProjectPreviewProps {
	ref: Ref<HTMLDialogElement> | undefined;
	project: Project | undefined;
}

const ProjectPreview = ({ ref, project }: ProjectPreviewProps) => {
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
			<section className={classes.PreviewWrapper}>
				<dialog
					ref={ref}
					className={classes.previewModal}
					onClose={handleCloseModal}
				>
					<h3>Project Not Found!</h3>
					<p>
						Either the project could not be found or there was an issue loading
						the data. Please try again later!
					</p>
					{closeButton}
				</dialog>
			</section>
		);
	}

	const { title, description, imageData, tagData } = project;
	const { imagesPaths } = imageData;
	const { primaryTag, otherTags } = tagData;

	return (
		<>
			<section className={classes.PreviewWrapper}>
				<dialog
					ref={ref}
					className={classes.previewModal}
					onClose={handleCloseModal}
				>
					<div className={classes.previewTitle}>
						<h3>{title}</h3>
					</div>
					<div className={classes.previewContent}>
						<div className={classes.previewItem}>
							<h4>Project Description</h4>
							<p>{description}</p>
							<h4>Image Description</h4>
							<p>
								This is a bunch of placeholder text until I can get the real
								descriptions dynamically implemented. Thank you for your
								continued patience and understanding.
							</p>
						</div>
						<div className={classes.previewItem}>
							<ImageCarousel images={imagesPaths}></ImageCarousel>
						</div>
					</div>
					<h4>Image Description</h4>
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
						<p>
							Tags: {primaryTag} (<i>Primary Tag</i>)
							{otherTags.map((tag) => (
								<>, {tag}</>
							))}
						</p>
						{/* <ul>
							{links.map(
								(link) =>
									link.url && (
										<li key={link.url}>
											<a href={link.url}>
												{link.type}: {link.url}
											</a>
										</li>
									)
							)}
						</ul> */}
					</div>
					<div className={classes.closeButton}>{closeButton}</div>
				</dialog>
			</section>
		</>
	);
};

export default ProjectPreview;

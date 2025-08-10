import { useContext, type Ref } from "react";
import { ProjectPreviewContext } from "../../../../store/project-preview-context/ProjectPreviewContext";
import type { Project } from "../../project-card/ProjectCard";
import classes from "./ProjectPreview.module.css";
import ImageWrapper from "../../../common/wrappers/image-wrapper/ImageWrapper";

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

	const { title, description, imageData, tagData, links } = project;
	const { coverArt, imagesPaths } = imageData;
	const { primaryTag, otherTags } = tagData;

	return (
		<>
			<section className={classes.PreviewWrapper}>
				<dialog
					ref={ref}
					className={classes.previewModal}
					onClose={handleCloseModal}
				>
					<h3>{title}</h3>
					<p>{description}</p>
					<ImageWrapper
						height={"50vh"}
						width={"50vw"}
						maxHeight={"500px"}
						maxWidth={"500px"}
					>
						<img
							src={coverArt.coverArtPath}
							alt={`Cover art for the ${primaryTag} project, titled: ${title}`}
						/>
					</ImageWrapper>
					<div>
						{imagesPaths.map((path) => (
							<p key={path}>{path}</p>
						))}
					</div>
					<div>
						<p>
							Tags: {primaryTag}
							{otherTags.map((tag) => (
								<>, {tag}</>
							))}
						</p>
						<ul>
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
						</ul>
					</div>
					{closeButton}
				</dialog>
			</section>
		</>
	);
};

export default ProjectPreview;

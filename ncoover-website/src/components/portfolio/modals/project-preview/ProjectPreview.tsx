import { useContext, type Ref } from "react";
import { ProjectPreviewContext } from "../../../../store/project-preview-context/ProjectPreviewContext";
import classes from "./ProjectPreview.module.css";

const DUMMY_TAG_PRIMARY = "React";
const DUMMY_TAGS = ["Vanilla", "JavaScript", "Teatum"];

interface ProjectPreviewProps {
	ref: Ref<HTMLDialogElement> | undefined;
}

const ProjectPreview = ({ ref }: ProjectPreviewProps) => {
	const { closePreviewModal } = useContext(ProjectPreviewContext);

	const handleCloseModal = () => {
		closePreviewModal();
	};

	return (
		<>
			<section className={classes.PreviewWrapper}>
				<dialog
					ref={ref}
					className={classes.previewModal}
					onClose={handleCloseModal}
				>
					<h3>Title</h3>
					<p>
						This is where the description is going to go, you know, dynamically,
						that is, once I have the description coming in dynamically and not
						just hard-coded willy nilly like nilly's hard coded willy.
					</p>
					<div>
						<img src="" alt="" />
					</div>
					<div>
						<p>
							Tags: {DUMMY_TAG_PRIMARY}
							{DUMMY_TAGS.map((tag) => (
								<>
									<p>, {tag}</p>
								</>
							))}
						</p>
					</div>
					<button type="button" onClick={handleCloseModal}>
						Close
					</button>
				</dialog>
			</section>
		</>
	);
};

export default ProjectPreview;

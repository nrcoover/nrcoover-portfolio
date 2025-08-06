import classes from "./ProjectPreview.module.css";

const DUMMY_TAG_PRIMARY = "React";
const DUMMY_TAGS = ["Vanilla", "JavaScript", "Teatum"];

const ProjectPreview = () => {
	return (
		<>
			<p>TESTING</p>
			<dialog className={classes.previewModal}>
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
			</dialog>
		</>
	);
};

export default ProjectPreview;

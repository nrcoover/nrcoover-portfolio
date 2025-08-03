import classes from "./ProjectCard.module.css";

export type Project = {
	title: string;
	coverArtPath: string;
	description: string;
	categories: string[];
};

interface ProjectCardProps {
	project: Project;
	index: number;
	selected?: boolean;
	setScrollIndex: React.Dispatch<React.SetStateAction<number>>;
}

const TAB_FOCUSABLE = 0;
const TAB_SKIP = -1;

const ProjectCard = ({
	project,
	index,
	selected = false,
	setScrollIndex,
}: ProjectCardProps) => {
	const handleSelect = () => {
		setScrollIndex(index);
	};

	return (
		<article
			role="group"
			aria-label={project.title}
			className={`${classes.projectCard} ${selected ? classes.selected : ""}`}
			aria-selected={selected}
			tabIndex={selected ? TAB_FOCUSABLE : TAB_SKIP}
			onClick={handleSelect}
		>
			<div className={classes.coverArtContainer}>
				<img
					src={project.coverArtPath}
					alt={`Cover art for ${project.title}`}
				/>
				<div className={classes.titleBox}>
					<h3>{project.title}</h3>
					<p>{project.description}</p>
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;

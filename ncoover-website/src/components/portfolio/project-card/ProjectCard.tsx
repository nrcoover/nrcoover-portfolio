import classes from "./Project.module.css";

export type Project = {
	title: string;
	coverArtPath: string;
	description: string;
	categories: string[];
};

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<article role="group" aria-label={project.title}>
			<div className={classes.coverArtContainer}>
				<img
					src={project.coverArtPath}
					alt={`Cover art for ${project.title}`}
				></img>
				<div className={classes.titleBox}>
					<h3>{project.title}</h3>
					<p>{project.description}</p>
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;

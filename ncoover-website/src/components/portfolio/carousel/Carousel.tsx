import ProjectCard, { type Project } from "../project-card/ProjectCard";

import classes from "./Carousel.module.css";

interface CarouselProps {
	title: string;
	items: Project[];
}

const Carousel = ({ title, items }: CarouselProps) => {
	return (
		<div
			className={classes.carousel}
			role="region"
			aria-label="Project carousel"
		>
			<h2>{title}</h2>
			<div className={classes.projectContainer}>
				{items.map((item) => (
					<ProjectCard key={item.title} project={item} />
				))}
			</div>
		</div>
	);
};

export default Carousel;

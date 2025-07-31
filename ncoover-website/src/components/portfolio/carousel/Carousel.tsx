import { useEffect, useRef } from "react";
import ProjectCard, { type Project } from "../project-card/ProjectCard";

import classes from "./Carousel.module.css";

interface CarouselProps {
	title: string;
	items: Project[];
}

const Carousel = ({ title, items }: CarouselProps) => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (!scrollRef.current) return;
		const scrollAmount = direction === "left" ? -300 : 300;
		scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
	};

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (!scrollRef.current) return;
			if (e.key === "ArrowRight") scroll("right");
			if (e.key === "ArrowLeft") scroll("left");
		};
		scrollRef.current?.addEventListener("keydown", handleKey);
		return () => scrollRef.current?.removeEventListener("keydown", handleKey);
	}, []);

	return (
		<section aria-label={title} className={classes.carousel}>
			<h2>{title}</h2>
			<div className={classes.controls}>
				<button onClick={() => scroll("left")} aria-label="Scroll left">
					◀
				</button>
				<div
					className={classes.projectContainer}
					ref={scrollRef}
					role="list"
					tabIndex={0}
					aria-label={`${title} carousel`}
				>
					{items.map((item) => (
						<ProjectCard key={item.title} project={item} />
					))}
				</div>
				<button onClick={() => scroll("right")} aria-label="Scroll right">
					▶
				</button>
			</div>
		</section>
	);

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

import { useCallback, useEffect, useRef, useState } from "react";
import ProjectCard, { type Project } from "../project-card/ProjectCard";

import classes from "./Carousel.module.css";

interface CarouselProps {
	title: string;
	projects: Project[];
}

const Carousel = ({ title, projects }: CarouselProps) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const cardRef = useRef<HTMLDivElement | null>(null);
	const [cardWidth, setCardWidth] = useState(0);

	useEffect(() => {
		if (!cardRef.current) return;

		const updateCardWidth = () => {
			if (!cardRef.current) return;
			const style = getComputedStyle(cardRef.current);
			const marginRight = parseFloat(style.marginRight);
			setCardWidth(cardRef.current.offsetWidth + marginRight);
		};

		const observer = new ResizeObserver(updateCardWidth);
		observer.observe(cardRef.current);
		updateCardWidth(); // also trigger once immediately

		return () => observer.disconnect();
	}, []);

	const [scrollIndex, setScrollIndex] = useState(0);

	const scroll = useCallback(
		(direction: "left" | "right") => {
			if (!scrollRef.current || !cardRef.current) return;

			const newIndex = Math.max(
				0,
				Math.min(
					scrollIndex + (direction === "right" ? 1 : -1),
					projects.length - 1
				)
			);

			setScrollIndex(newIndex);
			scrollRef.current.scrollTo({
				left: cardWidth * newIndex,
				behavior: "smooth",
			});
		},
		[cardWidth, projects.length, scrollIndex]
	);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (!scrollRef.current) return;
			if (e.key === "ArrowRight") scroll("right");
			if (e.key === "ArrowLeft") scroll("left");
		};
		scrollRef.current?.addEventListener("keydown", handleKey);
		return () => scrollRef.current?.removeEventListener("keydown", handleKey);
	}, [scroll]);

	return (
		<section aria-label={title} className={classes.carousel}>
			<h2>{title}</h2>
			<div className={classes.controls}>
				<button
					className={classes.arrowControl}
					onClick={() => scroll("left")}
					aria-label="Scroll left"
				>
					◀
				</button>
				<div
					className={classes.projectContainer}
					ref={scrollRef}
					role="list"
					tabIndex={0}
					aria-label={`${title} carousel`}
				>
					{projects.map((project, index) => (
						<div
							key={project.title}
							className={classes.card}
							role="listitem"
							ref={index === 0 ? cardRef : null}
						>
							<ProjectCard project={project} />
						</div>
					))}
					<div className={classes.cardSpacer} aria-hidden="true" />
				</div>
				<button
					className={classes.arrowControl}
					onClick={() => scroll("right")}
					aria-label="Scroll right"
				>
					▶
				</button>
			</div>
		</section>
	);
};

export default Carousel;

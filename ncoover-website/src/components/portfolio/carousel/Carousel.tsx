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

	const scroll = useCallback(
		(direction: "left" | "right") => {
			if (!scrollRef.current || !cardRef.current) return;

			const container = scrollRef.current;
			// const cardWidth = cardRef.current.offsetWidth;
			const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

			const maxScrollLeft = container.scrollWidth - container.clientWidth;
			const targetScroll = container.scrollLeft + scrollAmount;

			// If scrolling right, prevent overshooting
			if (direction === "right" && targetScroll > maxScrollLeft) {
				container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
			}
			// If scrolling left, prevent negative scroll
			else if (direction === "left" && targetScroll < 0) {
				container.scrollTo({ left: 0, behavior: "smooth" });
			}
			// Normal scroll
			else {
				container.scrollBy({ left: scrollAmount, behavior: "smooth" });
			}
		},
		[cardWidth]
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
				<button onClick={() => scroll("right")} aria-label="Scroll right">
					▶
				</button>
			</div>
		</section>
	);
};

export default Carousel;

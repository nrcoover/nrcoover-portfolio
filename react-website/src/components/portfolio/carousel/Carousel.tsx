import { useCallback, useEffect, useRef, useState } from "react";

import type { Project } from "../../../typings";
import Containerizer from "../../common/wrappers/containerizer/Containerizer";
import ProjectCard from "../project-card/ProjectCard";
import classes from "./Carousel.module.css";

interface CarouselProps {
	title: string;
	projects: Project[];
}

const Carousel = ({ title, projects }: CarouselProps) => {
	const [scrollIndex, setScrollIndex] = useState(0);
	const [cardWidth, setCardWidth] = useState(0);

	const scrollRef = useRef<HTMLDivElement>(null);
	const cardRef = useRef<HTMLDivElement | null>(null);

	const scrollToIndex = useCallback(
		(index: number) => {
			if (!scrollRef.current || !cardRef.current) return;

			const clampedIndex = Math.max(0, Math.min(index, projects.length - 1));
			setScrollIndex(clampedIndex);

			scrollRef.current.scrollTo({
				left: cardWidth * clampedIndex,
				behavior: "smooth",
			});
		},
		[cardWidth, projects.length]
	);

	const scroll = useCallback(
		(direction: "left" | "right") => {
			const newIndex = scrollIndex + (direction === "right" ? 1 : -1);
			scrollToIndex(newIndex);
		},
		[scrollIndex, scrollToIndex]
	);

	useEffect(() => {
		if (!cardRef.current) return;

		const updateCardWidth = () => {
			if (!cardRef.current) return;
			const style = getComputedStyle(cardRef.current);
			const marginLeft = parseFloat(style.marginLeft);
			const marginRight = parseFloat(style.marginRight);
			setCardWidth(cardRef.current.offsetWidth + marginLeft + marginRight);
		};

		const observer = new ResizeObserver(updateCardWidth);
		observer.observe(cardRef.current);
		updateCardWidth(); // also trigger once immediately

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (!scrollRef.current) return;
			if (e.key === "ArrowRight") scroll("right");
			if (e.key === "ArrowLeft") scroll("left");
		};
		scrollRef.current?.addEventListener("keydown", handleKey);
		return () => scrollRef.current?.removeEventListener("keydown", handleKey);
	}, [scroll]);

	const leftControl = (
		<>
			<button
				className={classes.arrowControl}
				onClick={() => scroll("left")}
				aria-label="Scroll left"
			>
				◀
			</button>
		</>
	);

	const rightControl = (
		<>
			<button
				className={classes.arrowControl}
				onClick={() => scroll("right")}
				aria-label="Scroll right"
			>
				▶
			</button>
		</>
	);

	const controls = (
		<>
			{leftControl}
			{rightControl}
		</>
	);

	return (
		<Containerizer aria-label={title}>
			<h2 className={classes.title}>{title}</h2>
			<div className={classes.controls}>
				<div className={classes.largeScreenControls}>{leftControl}</div>
				<div
					className={classes.projectContainer}
					ref={scrollRef}
					role="list"
					tabIndex={0}
					aria-label={`${title} carousel`}
				>
					{projects.map((project, index) => (
						<div
							key={project.id}
							className={classes.card}
							role="listitem"
							ref={index === 0 ? cardRef : null}
						>
							<ProjectCard
								project={project}
								index={index}
								selected={scrollIndex === index}
								scrollToIndex={scrollToIndex}
								category={title}
							/>
						</div>
					))}
					<div className={classes.cardSpacer} aria-hidden="true" />
				</div>
				<div className={classes.largeScreenControls}>{rightControl}</div>
			</div>
			<div className={classes.smallScreenControls}>{controls}</div>
		</Containerizer>
	);
};

export default Carousel;

import { useState } from "react";
import ImageWrapper from "../../common/wrappers/image-wrapper/ImageWrapper";
import type { Image } from "../../portfolio/project-card/ProjectCard";

import classes from "./ImageCarousel.module.css";

interface ImageCarouselProps {
	images: Image[];
}

const ImageCarousel = ({ images = [] }: ImageCarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [nextIndex, setNextIndex] = useState<number | null>(null);
	const [isFading, setIsFading] = useState(false);

	const startTransition = (newIndex: number) => {
		if (isFading) return; // prevent spam clicks
		setNextIndex(newIndex);
		setIsFading(true);
		setTimeout(() => {
			setCurrentIndex(newIndex);
			setNextIndex(null);
			setIsFading(false);
		}, 500); // match CSS transition time
	};

	const lastImage = images.length - 1;

	const goToNext = () => {
		startTransition((currentIndex + 1) % images.length);
	};

	const goToPrevious = () => {
		startTransition(currentIndex === 0 ? lastImage : currentIndex - 1);
	};

	return (
		<div className={classes.carousel}>
			<button onClick={goToPrevious} className={classes.navButton}>
				&#8592;
			</button>

			<ImageWrapper
				height={"50vh"}
				width={"50vw"}
				maxHeight={"500px"}
				maxWidth={"500px"}
			>
				{/* Current Image */}
				<img
					src={images[currentIndex].src}
					alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
					className={classes.image}
				/>

				{/* Next Image (fading in) */}
				{nextIndex !== null && (
					<img
						src={images[nextIndex].src}
						alt={images[nextIndex].alt || `Slide ${nextIndex + 1}`}
						className={`${classes.image} ${classes.fadeIn}`}
					/>
				)}
			</ImageWrapper>

			<button onClick={goToNext} className={classes.navButton}>
				&#8594;
			</button>
		</div>
	);
};

export default ImageCarousel;

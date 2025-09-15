import { useState } from "react";
import type { Image } from "../../../typings/index.d.ts";
import ImageWrapper from "../../common/wrappers/image-wrapper/ImageWrapper";

import { providePathRoot } from "../../../helpers/assetHelper.ts";
import classes from "./ImageCarousel.module.css";

interface ImageCarouselProps {
	images: Image[];
	onImageSelection: React.Dispatch<React.SetStateAction<Image | undefined>>;
}

const countNormalizer = 1;

const ImageCarousel = ({
	images = [],
	onImageSelection,
}: ImageCarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [nextIndex, setNextIndex] = useState<number | null>(null);
	const [isFading, setIsFading] = useState(false);

	const handleImageSelection = (image: Image) => {
		onImageSelection(image);
	};

	const startTransition = (newIndex: number) => {
		if (isFading) return; // prevent spam clicks
		setNextIndex(newIndex);
		setIsFading(true);
		handleImageSelection(images[newIndex]); // update caption/state
		// keep timeout in sync with CSS animation duration (500ms)
		setTimeout(() => {
			setCurrentIndex(newIndex);
			setNextIndex(null);
			setIsFading(false);
		}, 500); // match CSS transition time
	};

	const lastImage = images.length - 1;
	const goToNext = () => startTransition((currentIndex + 1) % images.length);
	const goToPrevious = () =>
		startTransition(currentIndex === 0 ? lastImage : currentIndex - 1);

	// prevent width jumps when number of digits changes (9 -> 10)
	const digitWidthCh = String(images.length).length;

	return (
		<>
			<div className={classes.carousel}>
				<button onClick={goToPrevious} className={classes.navButton}>
					&#8592;
				</button>

				<ImageWrapper maxWidth={"500px"}>
					{/* Current Image */}
					<img
						src={providePathRoot(images[currentIndex].src)}
						alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
						className={classes.image}
					/>

					{/* Next Image (fading in) */}
					{nextIndex !== null && (
						<img
							src={providePathRoot(images[nextIndex].src)}
							alt={images[nextIndex].alt || `Slide ${nextIndex + 1}`}
							className={`${classes.image} ${classes.fadeIn}`}
						/>
					)}
				</ImageWrapper>

				<button onClick={goToNext} className={classes.navButton}>
					&#8594;
				</button>
			</div>

			<div className={classes.imageCountWrapper}>
				<p className={classes.imageCount}>
					Image{" "}
					<span
						className={classes.counter}
						style={{ minWidth: `${digitWidthCh}ch` }}
						aria-hidden={false}
					>
						{/* current number: give it a class that will animate out when isFading */}
						<span
							key={`current-${currentIndex}`}
							className={`${classes.fadeNumber} ${isFading ? classes.fadeOut : classes.fadeInInitial}`}
						>
							{currentIndex + countNormalizer}
						</span>

						{/* next number: inserted when nextIndex !== null and animates in */}
						{nextIndex !== null && (
							<span
								key={`next-${nextIndex}`}
								className={`${classes.fadeNumber} ${classes.fadeIn}`}
							>
								{nextIndex + countNormalizer}
							</span>
						)}
					</span>{" "}
					of {images.length}
				</p>
			</div>
		</>
	);
};

export default ImageCarousel;

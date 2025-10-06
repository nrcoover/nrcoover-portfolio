import classes from "./ImageWrapper.module.css";

type ImageWrapperProps = {
	children: React.ReactNode;
	aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
	maxWidth?: string; // e.g., "600px", "90%", "clamp(300px, 80vw, 1200px)"
};

const ImageWrapper = ({
	children,
	aspectRatio = "4/4",
	maxWidth = "100%",
}: ImageWrapperProps) => {
	return (
		<div className={classes.imageWrapper} style={{ aspectRatio, maxWidth }}>
			{children}
		</div>
	);
};

export default ImageWrapper;

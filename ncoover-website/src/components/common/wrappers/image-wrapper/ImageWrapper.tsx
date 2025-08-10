import classes from "./ImageWrapper.module.css";

type ImageWrapperProps = {
	children: React.ReactNode;
	height: string;
	width: string;
	maxHeight?: string;
	maxWidth?: string;
};

const ImageWrapper = ({
	children,
	height,
	width,
	maxHeight,
	maxWidth,
}: ImageWrapperProps) => {
	const sizingStyles = {
		height,
		width,
		maxHeight: maxHeight ?? "",
		maxWidth: maxWidth ?? "",
	};

	return (
		<>
			<div style={sizingStyles} className={classes.imageWrapper}>
				{children}
			</div>
		</>
	);
};

export default ImageWrapper;

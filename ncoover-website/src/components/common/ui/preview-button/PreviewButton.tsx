import { useEffect, useState } from "react";
import classes from "./PreviewButton.module.css";

interface PreviewButtonProps {
	selected: boolean;
	handlePreviewClick: () => void;
	isModalOpen: boolean;
}

function PreviewButton({
	selected,
	handlePreviewClick,
	isModalOpen,
}: PreviewButtonProps) {
	const [isVisible, setIsVisible] = useState(true);
	const [isFading, setIsFading] = useState(false);

	useEffect(() => {
		if (!selected) {
			setIsFading(true);
			const timer = setTimeout(() => {
				setIsVisible(false);
			}, 2000);
			return () => clearTimeout(timer);
		} else {
			setIsVisible(true);
			setIsFading(false);
		}
	}, [selected]);

	if (!isVisible) return null; //unmount after fade

	return (
		<button
			className={isFading ? classes.fadeOut : classes.fadeIn}
			onClick={handlePreviewClick}
			disabled={isModalOpen}
		>
			Preview
		</button>
	);
}

export default PreviewButton;

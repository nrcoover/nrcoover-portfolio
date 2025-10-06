import type { Ref } from "react";

import classes from "./Modal.module.css";

interface ModalProps {
	children: React.ReactNode;
	ref: Ref<HTMLDialogElement> | undefined;
	onClose: () => void;
	title?: string;
	maxWidth?: string;
	maxHeight?: string;
}

const Modal = ({
	children,
	title,
	ref,
	onClose,
	maxWidth = "75vw",
	maxHeight = "75vh",
}: ModalProps) => {
	const sizingStyles = {
		maxHeight,
		maxWidth,
	};
	return (
		<section className={classes.wrapper}>
			<dialog
				ref={ref}
				style={sizingStyles}
				className={classes.modal}
				onClose={onClose}
			>
				{title && (
					<div className={classes.modalTitle}>
						<h3>{title}</h3>
					</div>
				)}
				{children}
			</dialog>
		</section>
	);
};

export default Modal;

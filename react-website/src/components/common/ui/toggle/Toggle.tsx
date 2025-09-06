import React from "react";
import classes from "./Toggle.module.css";

type ToggleProps = {
	title: string;
	/** Whether the toggle is active (controlled) */
	isOn: boolean;
	onToggle: (newState: boolean) => void;
	leftLabel?: string;
	rightLabel?: string;
};

const Toggle: React.FC<ToggleProps> = ({
	title,
	isOn,
	onToggle,
	leftLabel = "Off",
	rightLabel = "On",
}) => {
	const handleToggle = () => {
		onToggle(!isOn);
	};

	return (
		<section className={classes.panelElement}>
			<h3>{title}</h3>
			<div className={classes.toggleContentsWrapper}>
				<p>{leftLabel}</p>
				<div
					className={`${classes.toggleWrapper} ${
						isOn ? classes.toggleIsActive : ""
					}`}
					onClick={handleToggle}
				>
					<div className={classes.toggleDot}></div>
				</div>
				<p>{rightLabel}</p>
			</div>
		</section>
	);
};

export default Toggle;

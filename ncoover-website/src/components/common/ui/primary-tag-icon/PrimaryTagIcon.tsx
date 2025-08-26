import type { CSSProperties } from "react";
import { iconDev } from "../../../../constants/iconTypes";
import {
	absoluteLocation,
	type AbsoluteLocationKey,
} from "../../../../constants/styles";
import Icon from "../../icon/Icon";

import classes from "./PrimaryTagIcon.module.css";

interface PrimaryTagIconProps {
	maxWidth?: string;
	maxHeight?: string;
	absoluteLocations?: AbsoluteLocationKey[];
	margin?: string;
}

const PrimaryTagIcon = ({
	maxWidth = "3rem",
	maxHeight = maxWidth,
	absoluteLocations = [],
	margin = "0",
}: PrimaryTagIconProps) => {
	// Merge sizing + positioning into a single CSSProperties object
	const sizingStyles: CSSProperties = {
		maxHeight,
		maxWidth,
		margin: margin,
	};

	const absoluteStyles = {
		...absoluteLocations.reduce((acc, key) => {
			return { ...acc, ...absoluteLocation[key] };
		}, {}),
	};

	console.log(sizingStyles);

	return (
		<div className={classes.primaryTagIcon} style={absoluteStyles}>
			<Icon
				source={iconDev.React}
				className={classes.iconSizing}
				style={sizingStyles}
			/>
		</div>
	);
};

export default PrimaryTagIcon;

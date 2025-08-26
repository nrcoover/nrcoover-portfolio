import type { CSSProperties } from "react";
import { iconUi, type IconSource } from "../../../../constants/iconTypes";
import {
	absoluteLocation,
	type AbsoluteLocationKey,
} from "../../../../constants/styles";
import Icon from "../../icon/Icon";

import classes from "./PrimaryTagIcon.module.css";
import { tagToIconMap } from "../../../../helpers/tagToIconMapHellper";

interface PrimaryTagIconProps {
	primaryTag: string;
	maxWidth?: string;
	maxHeight?: string;
	absoluteLocations?: AbsoluteLocationKey[];
	margin?: string;
}

const PrimaryTagIcon = ({
	primaryTag,
	maxWidth = "3rem",
	maxHeight = maxWidth,
	absoluteLocations = [],
	margin = "0",
}: PrimaryTagIconProps) => {
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

	const iconSource: IconSource =
		tagToIconMap[primaryTag] ?? iconUi.QuestionMark;

	return (
		<div className={classes.primaryTagIcon} style={absoluteStyles}>
			<Icon
				source={iconSource}
				className={classes.iconSizing}
				style={sizingStyles}
			/>
		</div>
	);
};

export default PrimaryTagIcon;

import type { CSSProperties } from "react";
import { iconUi, type IconSource } from "../../../../constants/iconTypes";
import { type AbsoluteLocationKey } from "../../../../constants/styles";
import Icon from "../../icon/Icon";

import { getAbsoluteStyles } from "../../../../helpers/stylesHelpers";
import { tagToIconMap } from "../../../../helpers/tagMappingHelpers";
import classes from "./PrimaryTagIcon.module.css";

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

	const absoluteStyles = getAbsoluteStyles(absoluteLocations);

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

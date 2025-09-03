import { useContext } from "react";
import {
	absoluteLocationTypes,
	type AbsoluteLocationKey,
} from "../../../constants/styles";
import { getAbsoluteStyles } from "../../../helpers/stylesHelpers";
import { SettingsContext } from "../../../store/settings-context/SettingsContext";
import classes from "./AiNotice.module.css";

interface AiNoticeProps {
	showNotice: boolean;
	absoluteLocations?: AbsoluteLocationKey[];
}

const AiNotice = ({
	showNotice,
	absoluteLocations = [absoluteLocationTypes.Bottom],
}: AiNoticeProps) => {
	const { userSettings } = useContext(SettingsContext);

	if (showNotice && userSettings.displayImageAiLabel) {
		const absoluteStyles = getAbsoluteStyles(absoluteLocations);

		return (
			<>
				<div className={classes.aiNotice} style={absoluteStyles}>
					<p>A.I. Generated Image</p>
				</div>
			</>
		);
	}

	return;
};

export default AiNotice;

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
	useFadedEdges?: boolean;
}

// TODO: Consider using dynamic structuring for mask style:
// const getMaskStyle = (
//   direction: "left" | "right" | "top" | "bottom" = "right",
//   fadeStart: number = 20,
//   fadeEnd: number = 80
// ): React.CSSProperties => {
//   const gradient = `linear-gradient(to ${direction}, rgba(0,0,0,0) 0%, rgba(0,0,0,1) ${fadeStart}%, rgba(0,0,0,1) ${fadeEnd}%, rgba(0,0,0,0) 100%)`;

//   return {
//     WebkitMaskImage: gradient,
//     WebkitMaskRepeat: "no-repeat",
//     WebkitMaskSize: "100% 100%",
//     maskImage: gradient,
//     maskRepeat: "no-repeat",
//     maskSize: "100% 100%",
//   };
// };

const maskStyle: React.CSSProperties = {
	WebkitMaskImage:
		"linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
	WebkitMaskRepeat: "no-repeat",
	WebkitMaskSize: "100% 100%",
	maskImage:
		"linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
	maskRepeat: "no-repeat",
	maskSize: "100% 100%",
};

const AiNotice = ({
	showNotice,
	absoluteLocations = [absoluteLocationTypes.Bottom],
	useFadedEdges = true, // Had to set to true because wouldn't work in hero banner otherwise... not sure why that is yet... but this way works so...
}: AiNoticeProps) => {
	const { userSettings } = useContext(SettingsContext);

	if (showNotice && userSettings.displayImageAiLabel) {
		const absoluteStyles = getAbsoluteStyles(absoluteLocations);
		const styles = useFadedEdges
			? { ...absoluteStyles, ...maskStyle }
			: absoluteStyles;
		return (
			<>
				<div className={classes.aiNotice} style={styles}>
					<p>A.I. Generated Image</p>
				</div>
			</>
		);
	}

	return;
};

export default AiNotice;

import {
	iconMusic,
	iconSocial,
	iconTypes,
	iconUi,
	type IconData,
} from "../../../constants/iconTypes";
import { svgMusic, svgSocial, svgUi } from "../../../utility/iconSvg";
import "./Icon.css";

interface IconProps {
	source: IconData;
}

const Icon = ({ source }: IconProps) => {
	let icon = <></>;

	switch (source.type) {
		case iconTypes.Music:
			switch (source.label) {
				case iconMusic.AppleMusic:
					icon = svgMusic.AppleMusic;
					break;

				default:
					icon = <></>;
					break;
			}
			break;

		case iconTypes.Social:
			switch (source.label) {
				case iconSocial.BlueSky:
					icon = svgSocial.BlueSky;
					break;

				default:
					icon = <></>;
					break;
			}
			break;

		case iconTypes.Ui:
			switch (source.label) {
				case iconUi.DarkMode:
					icon = svgUi.DarkMode;
					break;

				default:
					icon = <></>;
					break;
			}
			break;

		default:
			icon = <></>;
			break;
	}

	return (
		<>
			<div className="icon-wrapper">
				<div className="svg-container">{icon}</div>
			</div>
		</>
	);
};

export default Icon;

import { type IconData } from "../../../constants/iconTypes";
import { iconMap } from "../../../utility/icon/iconMap";
import "./Icon.css";

interface IconProps {
	source: IconData;
}

const Icon = ({ source }: IconProps) => {
	const { type, label } = source;

	const icon = iconMap[type]?.[
		label as keyof (typeof iconMap)[typeof type]
	] ?? <></>;

	return (
		<div className="icon-wrapper">
			<div className="svg-container">{icon}</div>
		</div>
	);
};

export default Icon;

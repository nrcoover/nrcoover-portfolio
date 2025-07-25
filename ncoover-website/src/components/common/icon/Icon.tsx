import type { IconSource } from "../../../constants/iconTypes";
import { iconMap } from "../../../utility/icon/iconMap";
import classes from "./Icon.module.css";

interface IconProps {
	source: IconSource;
}

const Icon = ({ source }: IconProps) => {
	const [typeCategory, label] = source.split(".") as [
		keyof typeof iconMap,
		string,
	];

	const icon = iconMap[typeCategory]?.[
		label as keyof (typeof iconMap)[typeof typeCategory]
	] ?? <></>;

	return (
		<div className={classes.iconWrapper}>
			<div className={classes.svgContainer}>{icon}</div>
		</div>
	);
};

export default Icon;

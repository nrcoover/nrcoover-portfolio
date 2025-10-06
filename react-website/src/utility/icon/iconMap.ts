import { svgMusic, svgSocial, svgUi, svgDev } from "./iconSvg";

export const iconMap = {
	music: svgMusic,
	social: svgSocial,
	ui: svgUi,
	dev: svgDev,
} as const;

type InnerKeys<T> = T extends Record<string, unknown> ? keyof T : never;

export type IconSource = {
	[K in keyof typeof iconMap]: `${K & string}.${InnerKeys<(typeof iconMap)[K]> & string}`;
}[keyof typeof iconMap];

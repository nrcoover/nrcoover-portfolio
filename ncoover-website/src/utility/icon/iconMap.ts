import { svgMusic, svgSocial, svgUi } from "./iconSvg";

export const iconMap = {
	music: svgMusic,
	social: svgSocial,
	ui: svgUi,
} as const;

type InnerKeys<T> = T extends Record<string, unknown> ? keyof T : never;

export type IconSource = {
	[K in keyof typeof iconMap]: `${K & string}.${InnerKeys<(typeof iconMap)[K]> & string}`;
}[keyof typeof iconMap];

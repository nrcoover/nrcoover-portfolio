export const absoluteLocation = {
	Top: { top: "0%" },
	Right: { right: "0%" },
	Bottom: { bottom: "0%" },
	Left: { left: "0%" },
} as const;

export const absoluteLocationTypes = {
	Top: "Top",
	Right: "Right",
	Bottom: "Bottom",
	Left: "Left",
} as const;

export type AbsoluteLocationKey = keyof typeof absoluteLocation;

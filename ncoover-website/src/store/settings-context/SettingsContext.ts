import { createContext } from "react";
import type { Settings } from "../../typings";

export const DISPLAY_MODE = {
	light: "Light",
	dark: "Dark",
};

export const defaultSettings: Settings = {
	displayMode: DISPLAY_MODE.dark,
	displayAllDecorators: false,
	displayImageAiLabel: false,
	displayFavoritesIcon: false,
	displayPrimaryTagIcon: false,
};

export const SETTINGS_LABELS = {
	displayMode: "Display Mode",
	allDecorators: "All Decorators",
	imageAiLabel: "Image I.A. Label",
	favoritesIcon: "Favorites Icon",
	primaryTagIcon: "PrimaryTagIcon",
};

export type DisplayMode = (typeof DISPLAY_MODE)[keyof typeof DISPLAY_MODE];

interface SettingsContextProps {
	toggleSetting: (label: string) => void;
}

export const SettingsContext = createContext<SettingsContextProps>({
	toggleSetting: () => {},
});

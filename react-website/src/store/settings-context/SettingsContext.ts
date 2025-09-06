import { createContext } from "react";
import type { Settings } from "../../typings";

export const DISPLAY_MODE = {
	light: "Light",
	dark: "Dark",
};

export const defaultSettings: Settings = {
	displayMode: DISPLAY_MODE.dark,
	displayAllDecorators: true,
	displayImageAiLabel: true,
	displayFavoritesIcon: true,
	displayPrimaryTagIcon: true,
	displayPrimaryTagGlow: true,
};

export const SETTINGS_LABELS = {
	displayMode: "Display Mode",
	allDecorators: "All Decorators",
	imageAiLabel: "Image I.A. Label",
	favoritesIcon: "Favorites Icon",
	primaryTagIcon: "Primary Tag Icon",
	primaryTagGlow: "Primary Tag Glow",
};

export type DisplayMode = (typeof DISPLAY_MODE)[keyof typeof DISPLAY_MODE];

interface SettingsContextProps {
	isModalOpen: boolean;
	settingsModal: React.RefObject<HTMLDialogElement | null>;
	openSettingsModal: () => void;
	closeSettingsModal: () => void;
	userSettings: Settings;
	toggleSetting: (label: string) => void;
}

export const SettingsContext = createContext<SettingsContextProps>({
	isModalOpen: false,
	settingsModal: { current: null },
	openSettingsModal: () => {},
	closeSettingsModal: () => {},
	userSettings: defaultSettings,
	toggleSetting: () => {},
});

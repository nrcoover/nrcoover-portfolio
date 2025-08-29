import { useContext, useEffect, useState } from "react";
import type { Settings } from "../../typings";
import { AuthUserContext } from "../auth-user-context/AuthUserContext";
import {
	defaultSettings,
	DISPLAY_MODE,
	SETTINGS_LABELS,
	SettingsContext,
} from "./SettingsContext";

interface SettingsContextProviderProps {
	children: React.ReactNode;
}

const SettingsContextProvider = ({
	children,
}: SettingsContextProviderProps) => {
	const { isLoggedIn, getUserSettings, updateUserSettings, user } =
		useContext(AuthUserContext);

	const [userSettings, setUserSettings] = useState(defaultSettings);

	// Sync settings when user logs in/out
	useEffect(() => {
		if (isLoggedIn) {
			setUserSettings(getUserSettings() ?? defaultSettings);
		} else {
			setUserSettings(defaultSettings);
		}
	}, [getUserSettings, isLoggedIn, user]);

	const toggleSetting = (label: string): void => {
		setUserSettings((settings) => {
			let updatedSettings: Settings = { ...settings };

			switch (label) {
				case SETTINGS_LABELS.displayMode:
					updatedSettings.displayMode =
						settings.displayMode === DISPLAY_MODE.dark
							? DISPLAY_MODE.light
							: DISPLAY_MODE.dark;
					break;

				case SETTINGS_LABELS.allDecorators:
					updatedSettings = {
						...settings,
						displayAllDecorators: !settings.displayAllDecorators,
						displayImageAiLabel: !settings.displayAllDecorators,
						displayFavoritesIcon: !settings.displayAllDecorators,
						displayPrimaryTagIcon: !settings.displayAllDecorators,
					};
					break;

				case SETTINGS_LABELS.imageAiLabel:
					updatedSettings = {
						...settings,
						displayImageAiLabel: !settings.displayImageAiLabel,
					};
					break;

				case SETTINGS_LABELS.favoritesIcon:
					updatedSettings = {
						...settings,
						displayFavoritesIcon: !settings.displayFavoritesIcon,
					};
					break;

				case SETTINGS_LABELS.primaryTagIcon:
					updatedSettings = {
						...settings,
						displayPrimaryTagIcon: !settings.displayPrimaryTagIcon,
					};
					break;
			}

			if (isLoggedIn) {
				updateUserSettings(updatedSettings);
			}

			return updatedSettings;
		});
	};

	const contextsetting = {
		userSettings,
		toggleSetting,
	};

	return (
		<>
			<SettingsContext.Provider value={contextsetting}>
				{children}
			</SettingsContext.Provider>
		</>
	);
};

export default SettingsContextProvider;

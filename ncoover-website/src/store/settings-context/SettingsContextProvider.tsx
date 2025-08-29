import { useContext, useEffect, useState } from "react";
import type { Settings } from "../../typings";
import { AuthUserContext } from "../auth-user-context/AuthUserContext";
import {
	defaultSettings,
	SETTINGS_LABELS,
	SettingsContext,
	type DisplayMode,
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
			setUserSettings(getUserSettings() ?? userSettings);
		} else {
			setUserSettings(defaultSettings);
		}
	}, [getUserSettings, isLoggedIn, user, userSettings]);

	const toggleSetting = (
		label: string,
		setting: DisplayMode | boolean
	): void => {
		setUserSettings((settings) => {
			let updatedSettings: Settings = settings;

			switch (label) {
				case SETTINGS_LABELS.displayMode:
					if (typeof setting === "string") {
						updatedSettings.displayMode = setting;
					}
					break;

				case SETTINGS_LABELS.allDecorators:
					if (typeof setting === "boolean") {
						updatedSettings = {
							...settings,
							displayAllDecorators: setting,
							displayImageAiLabel: setting,
							displayFavoritesIcon: setting,
							displayPrimaryTagIcon: setting,
						};
					}
					break;

				case SETTINGS_LABELS.imageAiLabel:
					if (typeof setting === "boolean") {
						updatedSettings.displayImageAiLabel = setting;
					}
					break;

				case SETTINGS_LABELS.favoritesIcon:
					if (typeof setting === "boolean") {
						updatedSettings.displayFavoritesIcon = setting;
					}
					break;

				case SETTINGS_LABELS.primaryTagIcon:
					if (typeof setting === "boolean") {
						updatedSettings.displayPrimaryTagIcon = setting;
					}
					break;

				default:
					break;
			}

			if (isLoggedIn) {
				updateUserSettings(updatedSettings);
			}

			return updatedSettings;
		});
	};

	const contextsetting = {
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

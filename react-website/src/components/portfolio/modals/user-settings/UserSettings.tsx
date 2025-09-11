import { useContext } from "react";
import { AuthUserContext } from "../../../../store/auth-user-context/AuthUserContext";
import {
	DISPLAY_MODE,
	SETTINGS_LABELS,
	SettingsContext,
} from "../../../../store/settings-context/SettingsContext";
import Toggle from "../../../common/ui/toggle/Toggle";
import classes from "./UserSettings.module.css";
import Modal from "../../../common/modal/Modal";

const UserSettings = () => {
	const { user } = useContext(AuthUserContext);
	const { userSettings, toggleSetting, settingsModal, closeSettingsModal } =
		useContext(SettingsContext);

	const handleCloseModal = () => {
		closeSettingsModal();
	};

	const handleDisplayModeSetting = () => {
		toggleSetting(SETTINGS_LABELS.displayMode);
	};

	const handleAllDecoratorsSetting = () => {
		toggleSetting(SETTINGS_LABELS.allDecorators);
	};

	const handleImageAiLabelSetting = () => {
		toggleSetting(SETTINGS_LABELS.imageAiLabel);
	};

	const handleFavoritesIconSetting = () => {
		toggleSetting(SETTINGS_LABELS.favoritesIcon);
	};

	const handlePrimaryTagIconSetting = () => {
		toggleSetting(SETTINGS_LABELS.primaryTagIcon);
	};

	const handlePrimaryTagGlowSetting = () => {
		toggleSetting(SETTINGS_LABELS.primaryTagGlow);
	};

	const sharedContent = (
		<>
			<Modal
				ref={settingsModal}
				title={user ? "User Settings" : "Settings"}
				maxHeight={"100%"}
				onClose={() => {}}
			>
				<section className={classes.settingsWrapper}>
					<div className={classes.groupedSettings}>
						<h2>Theme Settings</h2>
						<Toggle
							title={"Light / Dark Mode"}
							isOn={userSettings.displayMode === DISPLAY_MODE.dark}
							onToggle={handleDisplayModeSetting}
							leftLabel={"Light"}
							rightLabel={"Dark"}
						/>
					</div>
					<div className={classes.groupedSettings}>
						<h2>Decorator Settings</h2>
						<Toggle
							title={"All Decorators"}
							isOn={userSettings.displayAllDecorators}
							onToggle={handleAllDecoratorsSetting}
						/>
						<Toggle
							title={"Image A.I. Label"}
							isOn={userSettings.displayImageAiLabel}
							onToggle={handleImageAiLabelSetting}
						/>
						<Toggle
							title={"Favorites Icon"}
							isOn={userSettings.displayFavoritesIcon}
							onToggle={handleFavoritesIconSetting}
						/>
						<Toggle
							title={"Primary Tag Icon"}
							isOn={userSettings.displayPrimaryTagIcon}
							onToggle={handlePrimaryTagIconSetting}
						/>
						<Toggle
							title={"Primary Tag Glow"}
							isOn={userSettings.displayPrimaryTagGlow}
							onToggle={handlePrimaryTagGlowSetting}
						/>
					</div>
					<button
						className={classes.loginButton}
						type="button"
						onClick={handleCloseModal}
					>
						Close
					</button>
				</section>
			</Modal>
		</>
	);

	if (user) {
		return <>{sharedContent}</>;
	}

	return <>{sharedContent}</>;
};

export default UserSettings;

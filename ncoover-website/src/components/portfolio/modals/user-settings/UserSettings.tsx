import { useContext } from "react";
import { AuthUserContext } from "../../../../store/auth-user-context/AuthUserContext";
import {
	DISPLAY_MODE,
	SETTINGS_LABELS,
	SettingsContext,
} from "../../../../store/settings-context/SettingsContext";
import Toggle from "../../../common/ui/toggle/Toggle";
import classes from "./UserSettings.module.css";
// import Modal from "../../../common/modal/Modal";

const UserSettings = () => {
	const { user, closeLoginModal } = useContext(AuthUserContext);
	const { userSettings, toggleSetting } = useContext(SettingsContext);

	const handleCloseModal = () => {
		closeLoginModal();
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

	const sharedContent = (
		<>
			Theme
			<Toggle
				title={"Light / Dark Mode"}
				isOn={userSettings.displayMode === DISPLAY_MODE.dark}
				onToggle={handleDisplayModeSetting}
				leftLabel={"Light"}
				rightLabel={"Dark"}
			/>
			Project Decorators
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
			<button
				className={classes.loginButton}
				type="button"
				onClick={handleCloseModal}
			>
				Close
			</button>
		</>
	);

	if (user) {
		return (
			<>
				{sharedContent}
				{/* <Modal ref={undefined} onClose={() => {}}>
					{sharedContent}
				</Modal> */}
			</>
		);
	}

	return <>{sharedContent}</>;
};

export default UserSettings;

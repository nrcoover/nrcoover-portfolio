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
	const { toggleSetting } = useContext(SettingsContext);

	const handleCloseModal = () => {
		closeLoginModal();
	};

	const handleDisplayModeSetting = () => {
		toggleSetting(SETTINGS_LABELS.displayMode, DISPLAY_MODE.light);
	};

	const sharedContent = (
		<>
			{user?.settings}
			Theme
			<Toggle
				title={"Light / Dark Mode"}
				isOn={false}
				onToggle={() => {}}
				leftLabel={"Light"}
				rightLabel={"Dark"}
			/>
			Project Decorators
			<Toggle
				title={"All Decorators"}
				isOn={false}
				onToggle={handleDisplayModeSetting}
			/>
			<Toggle title={"Image A.I. Label"} isOn={false} onToggle={() => {}} />
			<Toggle title={"Favorites Icon"} isOn={false} onToggle={() => {}} />
			<Toggle title={"Primary Tag Icon"} isOn={false} onToggle={() => {}} />
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

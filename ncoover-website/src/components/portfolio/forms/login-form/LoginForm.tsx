import { useContext, type Ref } from "react";
import { AuthUserContext } from "../../../../store/auth-user-context/AuthUserContext";
import Modal from "../../../common/modal/Modal";

import CredentialsForm from "../credentials-form/CredentialsForm";

interface LoginFormProps {
	ref: Ref<HTMLDialogElement> | undefined;
}

const LoginForm = ({ ref }: LoginFormProps) => {
	// const { createUser, login, user, logout } = useContext(AuthUserContext);
	const { user } = useContext(AuthUserContext);

	// const handleCreate = async () => {
	// 	await createUser(username, password);
	// 	setMessage("User created and logged in!");
	// };

	// const handleLogin = async () => {
	// 	const success = await login(username, password);
	// 	setMessage(success ? "Login successful!" : "Invalid credentials.");
	// };

	return (
		<Modal
			ref={ref}
			onClose={() => {}}
			title={user ? `Welcome, ${user.username}` : "Login or Create User"}
		>
			<CredentialsForm></CredentialsForm>
		</Modal>
	);
};

export default LoginForm;

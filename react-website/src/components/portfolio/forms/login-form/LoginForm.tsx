import { useContext, type Ref } from "react";
import { AuthUserContext } from "../../../../store/auth-user-context/AuthUserContext";
import Modal from "../../../common/modal/Modal";

import CredentialsForm from "../credentials-form/CredentialsForm";

interface LoginFormProps {
	ref: Ref<HTMLDialogElement> | undefined;
}

const LoginForm = ({ ref }: LoginFormProps) => {
	const { user } = useContext(AuthUserContext);

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

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
	// const [username, setUsername] = useState("");
	// const [password, setPassword] = useState("");
	// const [message, setMessage] = useState("");
	// const [showPassword, setShowPassword] = useState(false);

	// // Disable login unless valid username & password
	// const loginDisabled =
	// 	username.trim().length === 0 || password.trim().length <= 4;

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
			title={user ? "You are already logged in!" : "Login or Create User"}
		>
			<CredentialsForm></CredentialsForm>
			{/* <div id={classes.Login} className={classes.login}>
				{user ? (
					<>
						<h3>Welcome, {user.username}</h3>
						<button onClick={logout}>Logout</button>
					</>
				) : (
					<>
						<form className={classes.inputContainer} action="">
							<div className={classes.formGroup}>
								<input
									id={classes.Username}
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									placeholder="Username"
								/>
								<label className={classes.floatingLabel} htmlFor="Username">
									Username
								</label>
							</div>

							<div className={classes.formGroup}>
								<input
									id={classes.Password}
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Password"
								/>
								<label className={classes.floatingLabel} htmlFor="Password">
									Password
								</label>
								<div className={classes.showHideContainer}>
									{!showPassword ? (
										<button className={classes.ShowButton} type="button" onClick={() => setShowPassword(true)}>
											Show
										</button>
									) : (
										<button
											type="button"
											onClick={() => setShowPassword(false)}
										>
											Hide
										</button>
									)}
								</div>
							</div>

							<div className={classes.buttonContainer}>
								<button type="button" onClick={handleCreate}>
									Create Account
								</button>
								<button
									type="button"
									onClick={handleLogin}
									disabled={loginDisabled}
								>
									Login
								</button>
							</div>
						</form>
					</>
				)}
				<p>{message}</p>
			</div> */}
		</Modal>
	);
};

export default LoginForm;

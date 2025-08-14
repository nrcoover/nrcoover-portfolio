import { useContext, useState, type Ref } from "react";
import { AuthUserContext } from "../../../../store/auth-user-context/AuthUserContext";
import Modal from "../../../common/modal/Modal";

interface LoginFormProps {
	ref: Ref<HTMLDialogElement> | undefined;
}

const LoginForm = ({ ref }: LoginFormProps) => {
	const { createUser, login, user, logout } = useContext(AuthUserContext);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const handleCreate = async () => {
		await createUser(username, password);
		setMessage("User created and logged in!");
	};

	const handleLogin = async () => {
		const success = await login(username, password);
		setMessage(success ? "Login successful!" : "Invalid credentials.");
	};

	return (
		<Modal ref={ref} onClose={() => {}}>
			<div>
				{user ? (
					<>
						<h3>Welcome, {user.username}</h3>
						<button onClick={logout}>Logout</button>
					</>
				) : (
					<>
						<input
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Username"
						/>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
						<button onClick={handleCreate}>Create Account</button>
						<button onClick={handleLogin}>Login</button>
					</>
				)}
				<p>{message}</p>
			</div>
		</Modal>
	);
};

export default LoginForm;

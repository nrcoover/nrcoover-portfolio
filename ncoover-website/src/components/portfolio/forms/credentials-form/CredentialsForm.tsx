import React, { useState } from "react";
import classes from "./CredentialsForm.module.css";

const CredentialsForm: React.FC = () => {
	// Login state
	const [loginUsername, setLoginUsername] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [showLoginPassword, setShowLoginPassword] = useState(false);

	// Signup state
	const [signupUsername, setSignupUsername] = useState("");
	const [signupPassword, setSignupPassword] = useState("");
	const [showSignupPassword, setShowSignupPassword] = useState(false);

	const isLoginValid = loginUsername.length > 0 && loginPassword.length > 4;
	const isSignupValid = signupUsername.length > 0 && signupPassword.length > 4;

	const toggleLoginPasswordVisibility = () => {
		setShowLoginPassword((prev) => !prev);
	};

	const toggleSignupPasswordVisibility = () => {
		setShowSignupPassword((prev) => !prev);
	};

	return (
		<section className={classes.credentials}>
			<div className={classes.login}>
				<p>
					Must contain at least one number, one uppercase and lowercase letter,
					and at least 8 or more characters.
				</p>
				<form
					id="loginForm"
					className={classes.loginForm}
					onSubmit={(e) => e.preventDefault()}
				>
					{/* LOGIN FORM */}
					<div className={classes.formGroup}>
						<input
							id="loginUsername"
							className={classes.formInput}
							name="loginUsername"
							placeholder="Username"
							title="Must be a valid username."
							value={loginUsername}
							onChange={(e) => setLoginUsername(e.target.value)}
							required
							type="text"
						/>
						<label className={classes.floatingLabel} htmlFor="loginUsername">
							Username
						</label>
					</div>

					<div className={classes.formGroup}>
						<input
							id="loginPassword"
							className={classes.formInput}
							placeholder="Password"
							title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters."
							value={loginPassword}
							onChange={(e) => setLoginPassword(e.target.value)}
							required
							type={showLoginPassword ? "text" : "password"}
						/>
						<label className={classes.floatingLabel} htmlFor="loginPassword">
							Password
						</label>

						{!showLoginPassword && loginPassword && (
							<button
								id="showLoginButton"
								className={classes.showButton}
								type="button"
								onClick={toggleLoginPasswordVisibility}
							>
								Show
							</button>
						)}
						{showLoginPassword && (
							<button
								id="hideLoginButton"
								className={classes.hideButton}
								type="button"
								onClick={toggleLoginPasswordVisibility}
							>
								Hide
							</button>
						)}
					</div>

					<button
						id="loginButton"
						className={classes.loginButton}
						name="submit"
						type="button"
						disabled={!isLoginValid}
					>
						Log In
					</button>

					<div className={classes.orSeparator}>
						<div className={classes.orSeparatorLine}></div>
						<p className={classes.orSeparatorText}>or</p>
						<div className={classes.orSeparatorLine}></div>
					</div>

					{/* SIGNUP FORM */}
					<div className={classes.formGroup}>
						<input
							id="signupUsername"
							className={classes.formInput}
							name="signupUsername"
							placeholder="Create Username"
							title="Must be a valid username."
							value={signupUsername}
							onChange={(e) => setSignupUsername(e.target.value)}
							required
							type="text"
						/>
						<label className={classes.floatingLabel} htmlFor="signupUsername">
							Create Username
						</label>
					</div>

					<div className={classes.formGroup}>
						<input
							id="signupPassword"
							className={classes.formInput}
							placeholder="Create Password"
							title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters."
							value={signupPassword}
							onChange={(e) => setSignupPassword(e.target.value)}
							required
							type={showSignupPassword ? "text" : "password"}
						/>
						<label className={classes.floatingLabel} htmlFor="signupPassword">
							Create Password
						</label>

						{!showSignupPassword && signupPassword && (
							<button
								id="showSignupButton"
								className={classes.showButton}
								type="button"
								onClick={toggleSignupPasswordVisibility}
							>
								Show
							</button>
						)}
						{showSignupPassword && (
							<button
								id="hideSignupButton"
								className={classes.hideButton}
								type="button"
								onClick={toggleSignupPasswordVisibility}
							>
								Hide
							</button>
						)}
					</div>

					<button
						id="signupButton"
						className={classes.loginButton}
						name="submit"
						type="button"
						disabled={!isSignupValid}
					>
						Create Account
					</button>
				</form>
			</div>

			<div className={classes.verticalSeparator}></div>

			{/* INFO / GUEST LOGIN */}
			<div className={classes.login}>
				<h4>!!! Attention !!!</h4>
				<p>
					This website is designed to simulate a login, but does not communicate
					with a backend server. Creating an account will only save your
					credentials to your browser's local storage (called "cache"), and will
					be overridden by any new account added to this device. If you wish not
					to create an account, you may proceed as "Guest".
				</p>
				<button className={classes.loginButton} type="button">
					Proceed As Guest
				</button>
			</div>
		</section>
	);
};

export default CredentialsForm;

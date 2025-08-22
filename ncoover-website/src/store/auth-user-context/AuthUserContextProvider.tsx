import { useEffect, useRef, useState } from "react";
import { hashPassword } from "../../utility/hashing/cryptoUtils";
import { AuthUserContext, type User } from "./AuthUserContext";

interface AuthUserContextProviderProps {
	children: React.ReactNode;
}

const AuthUserContextProvider = ({
	children,
}: AuthUserContextProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const loginModal = useRef<HTMLDialogElement | null>(null);

	const openLoginModal = () => {
		setIsModalOpen(true);
		loginModal.current?.showModal();
	};

	const closeLoginModal = () => {
		setIsModalOpen(false);
		loginModal.current?.close();
	};

	useEffect(() => {
		const storedUser = localStorage.getItem("mockUser");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	async function createUser(username: string, password: string) {
		const passwordHash = await hashPassword(password);
		const newUser: User = { username, passwordHash, favorites: [] };
		localStorage.setItem("mockUser", JSON.stringify(newUser));
		setUser(newUser);
	}

	async function login(username: string, password: string) {
		console.log(`Passed User: ${username} / Passed Password: ${password}`);
		const storedUser = localStorage.getItem("mockUser");
		if (!storedUser) return false;

		const parsedUser: User = JSON.parse(storedUser);
		const passwordHash = await hashPassword(password);

		console.log(passwordHash);

		if (
			parsedUser.username === username &&
			parsedUser.passwordHash === passwordHash
		) {
			setUser(parsedUser);
			console.log("Logged in!");
			return true;
		}
		console.log("Loggin failed!");
		return false;
	}

	const updateUserFavorites = (favorites: number[]) => {
		if (!user) return;
		const updatedUser = { ...user, favorites };
		setUser(updatedUser);
		localStorage.setItem("mockUser", JSON.stringify(updatedUser));
	};

	const logout = () => {
		setUser(null);
	};

	async function deleteAccount() {
		localStorage.removeItem("mockUser");
		setUser(null);
	}

	const isLoggedIn = !!user;

	const contextValue = {
		isModalOpen,
		loginModal,
		openLoginModal,
		closeLoginModal,
		user,
		createUser,
		login,
		updateUserFavorites,
		logout,
		deleteAccount,
		isLoggedIn,
	};

	return (
		<AuthUserContext.Provider value={contextValue}>
			{children}
		</AuthUserContext.Provider>
	);
};

export default AuthUserContextProvider;

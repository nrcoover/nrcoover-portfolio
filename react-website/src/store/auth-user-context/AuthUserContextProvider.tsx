import { useEffect, useRef, useState } from "react";
import type { Project, Settings } from "../../typings/index.d.ts";
import { hashPassword } from "../../utility/hashing/cryptoUtils";
import { AuthUserContext, type User } from "./AuthUserContext";
import { defaultSettings } from "../settings-context/SettingsContext.ts";

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
		const newUser: User = {
			username,
			passwordHash,
			favorites: [],
			settings: defaultSettings,
		};
		localStorage.setItem("mockUser", JSON.stringify(newUser));
		setUser(newUser);
	}

	async function login(username: string, password: string) {
		const storedUser = localStorage.getItem("mockUser");
		if (!storedUser) return false;

		const parsedUser: User = JSON.parse(storedUser);
		const passwordHash = await hashPassword(password);

		if (
			parsedUser.username === username &&
			parsedUser.passwordHash === passwordHash
		) {
			setUser(parsedUser);
			return true;
		}
		return false;
	}

	const getUserFavoritesById = (): Project[] => {
		if (!user) return [];
		const localUser = localStorage.getItem("mockUser");
		const favorites: Project[] = localUser
			? JSON.parse(localUser).favorites
			: [];
		return favorites;
	};

	const updateUserFavorites = (favorites: Project[]) => {
		if (!user) return;
		const updatedUser = { ...user, favorites };
		setUser(updatedUser);
		localStorage.setItem("mockUser", JSON.stringify(updatedUser));
	};

	const getUserSettings = (): Settings => {
		if (!user) return defaultSettings;
		const localUser = localStorage.getItem("mockUser");
		const settings: Settings = localUser ? JSON.parse(localUser).settings : {};
		return settings;
	};

	const updateUserSettings = (settings: Settings) => {
		if (!user) return;
		const updatedUser = { ...user, settings };
		setUser(updatedUser);
		localStorage.setItem("mockUser", JSON.stringify(updatedUser));
	};

	const logout = () => {
		// TODO: rather than set user to null, create new property for user "isLoggedIn" and set to false
		// might want to make IsLoggedIn a separate state, rather than saving as a property of user. (not sure if this would cause issues with the login process)
		setUser(null);
	};

	async function deleteAccount() {
		localStorage.removeItem("mockUser");
		setUser(null);
	}

	const isLoggedIn = !!user; //extract to user variable?

	const contextValue = {
		isModalOpen,
		loginModal,
		openLoginModal,
		closeLoginModal,
		user,
		createUser,
		login,
		getUserFavoritesById,
		updateUserFavorites,
		getUserSettings,
		updateUserSettings,
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

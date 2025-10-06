import { createContext } from "react";
import type { Project, Settings } from "../../typings/index.d";
import { defaultSettings } from "../settings-context/SettingsContext";

export type User = {
	username: string;
	passwordHash: string;
	favorites: Project[];
	settings: Settings;
};

interface AuthUserContextProps {
	isModalOpen: boolean;
	loginModal: React.RefObject<HTMLDialogElement | null>;
	openLoginModal: () => void;
	closeLoginModal: () => void;
	user: User | null;
	createUser: (username: string, password: string) => Promise<void>;
	login: (username: string, password: string) => Promise<boolean>;
	getUserFavoritesById: () => Project[];
	updateUserFavorites: (favorites: Project[]) => void;
	getUserSettings: () => Settings;
	updateUserSettings: (settings: Settings) => void;
	logout: () => void;
	deleteAccount: () => Promise<void>;
	isLoggedIn: boolean;
}

export const AuthUserContext = createContext<AuthUserContextProps>({
	isModalOpen: false,
	loginModal: { current: null },
	openLoginModal: () => {},
	closeLoginModal: () => {},
	user: null,
	createUser: async () => {},
	login: async () => false,
	getUserFavoritesById: () => [],
	updateUserFavorites: () => {},
	getUserSettings: () => defaultSettings,
	updateUserSettings: () => {},
	logout: () => {},
	deleteAccount: async () => {},
	isLoggedIn: false,
});

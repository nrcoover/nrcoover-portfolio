import { createContext } from "react";

export type User = {
	username: string;
	passwordHash: string;
	favorites: number[];
};

interface AuthUserContextProps {
	isModalOpen: boolean;
	loginModal: React.RefObject<HTMLDialogElement | null>;
	openLoginModal: () => void;
	user: User | null;
	createUser: (username: string, password: string) => Promise<void>;
	login: (username: string, password: string) => Promise<boolean>;
	updateUserFavorites: (favorites: number[]) => void;
	logout: () => void;
	deleteAccount: () => Promise<void>;
	isGuest: boolean;
}

export const AuthUserContext = createContext<AuthUserContextProps>({
	isModalOpen: false,
	loginModal: { current: null },
	openLoginModal: () => {},
	user: null,
	createUser: async () => {},
	login: async () => false,
	updateUserFavorites: () => {},
	logout: () => {},
	deleteAccount: async () => {},
	isGuest: true,
});

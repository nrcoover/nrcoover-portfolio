import { createContext } from "react";
import type { Project } from "../../components/portfolio/project-card/ProjectCard";

export type User = {
	username: string;
	passwordHash: string;
	favorites: Project[];
};

interface AuthUserContextProps {
	isModalOpen: boolean;
	loginModal: React.RefObject<HTMLDialogElement | null>;
	openLoginModal: () => void;
	closeLoginModal: () => void;
	user: User | null;
	createUser: (username: string, password: string) => Promise<void>;
	login: (username: string, password: string) => Promise<boolean>;
	updateUserFavorites: (favorites: Project[]) => void;
	logout: () => void;
	deleteAccount: () => Promise<void>;
	isLoggedIn: boolean;
	getUserFavoritesById: () => Project[];
}

export const AuthUserContext = createContext<AuthUserContextProps>({
	isModalOpen: false,
	loginModal: { current: null },
	openLoginModal: () => {},
	closeLoginModal: () => {},
	user: null,
	createUser: async () => {},
	login: async () => false,
	updateUserFavorites: () => {},
	logout: () => {},
	deleteAccount: async () => {},
	isLoggedIn: false,
	getUserFavoritesById: () => [],
});

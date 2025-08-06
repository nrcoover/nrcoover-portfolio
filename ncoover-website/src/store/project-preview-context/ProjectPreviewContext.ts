import { createContext } from "react";

interface ProjectPreviewContextProps {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProjectPreviewContext = createContext<ProjectPreviewContextProps>({
	isModalOpen: false,
	setIsModalOpen: () => false,
});

import { createContext } from "react";
import type { Project } from "../../typings/index.d";

interface ProjectPreviewContextProps {
	isModalOpen: boolean;
	previewModal: React.RefObject<HTMLDialogElement | null>;
	selectedProject: Project | undefined;
	setSelectedProject: React.Dispatch<React.SetStateAction<Project | undefined>>;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	openPreviewModal: () => void;
	closePreviewModal: () => void;
}

export const ProjectPreviewContext = createContext<ProjectPreviewContextProps>({
	isModalOpen: false,
	previewModal: { current: null },
	selectedProject: undefined,
	setSelectedProject: () => {},
	setIsModalOpen: () => {},
	openPreviewModal: () => {},
	closePreviewModal: () => {},
});

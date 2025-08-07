import { createContext } from "react";

interface ProjectPreviewContextProps {
	isModalOpen: boolean;
	previewModal: React.RefObject<HTMLDialogElement | null>;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	openPreviewModal: () => void;
	closePreviewModal: () => void;
}

export const ProjectPreviewContext = createContext<ProjectPreviewContextProps>({
	isModalOpen: false,
	previewModal: { current: null },
	setIsModalOpen: () => {},
	openPreviewModal: () => {},
	closePreviewModal: () => {},
});

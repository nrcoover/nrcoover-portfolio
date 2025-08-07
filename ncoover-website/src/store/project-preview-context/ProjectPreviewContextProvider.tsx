import { useRef, useState } from "react";
import { ProjectPreviewContext } from "./ProjectPreviewContext";

interface ProjectPreviewContextProviderProps {
	children: React.ReactNode;
}

const ProjectPreivewContextProvider = ({
	children,
}: ProjectPreviewContextProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const previewModal = useRef<HTMLDialogElement | null>(null);

	const openPreviewModal = () => {
		setIsModalOpen(true);
		previewModal.current?.showModal();
	};

	const closePreviewModal = () => {
		setIsModalOpen(false);
		previewModal.current?.close();
	};

	const contextValue = {
		isModalOpen,
		previewModal,
		setIsModalOpen,
		openPreviewModal,
		closePreviewModal,
	};

	return (
		<ProjectPreviewContext.Provider value={contextValue}>
			{children}
		</ProjectPreviewContext.Provider>
	);
};

export default ProjectPreivewContextProvider;

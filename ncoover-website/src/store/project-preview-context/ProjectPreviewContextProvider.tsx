import { useRef, useState } from "react";
import { ProjectPreviewContext } from "./ProjectPreviewContext";
import type { Project } from "../../components/portfolio/project-card/ProjectCard";

interface ProjectPreviewContextProviderProps {
	children: React.ReactNode;
}

const ProjectPreivewContextProvider = ({
	children,
}: ProjectPreviewContextProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project | undefined>(
		undefined
	);
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
		selectedProject,
		setSelectedProject,
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

import { useState } from "react";
import { ProjectPreviewContext } from "./ProjectPreviewContext";

interface ProjectPreviewContextProviderProps {
	children: React.ReactNode;
}

const ProjectPreivewContextProvider = ({
	children,
}: ProjectPreviewContextProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const contextValue = {
		isModalOpen,
		setIsModalOpen,
	};

	return (
		<ProjectPreviewContext.Provider value={contextValue}>
			{children}
		</ProjectPreviewContext.Provider>
	);
};

export default ProjectPreivewContextProvider;

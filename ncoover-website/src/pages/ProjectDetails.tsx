import { useParams } from "react-router-dom";

const ProjectDetails = () => {
	const params = useParams();

	return (
		<>
			<h1>Project Details</h1>
			<h2>{params.projectTitle}</h2>
		</>
	);
};

export default ProjectDetails;

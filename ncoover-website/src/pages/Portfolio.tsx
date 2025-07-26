import { Link } from "react-router-dom";

import { createProjectPath } from "../helpers/paths-helper";
import SideNavigation from "../components/side-navigation/SideNavigation";

const DUMMY_PROJECTS = [
	{ id: 1, title: "Project One" },
	{ id: 2, title: "Project Two" },
	{ id: 3, title: "Project Three" },
];

const Portfolio = () => {
	return (
		<>
			<SideNavigation />
			<h1>DEVFLIX</h1>
			<div>
				<h2>Dummy Project</h2>
				<ul>
					{DUMMY_PROJECTS &&
						DUMMY_PROJECTS.map((project) => (
							<li key={project.id}>
								<Link to={createProjectPath(project.title)}>
									{project.title}
								</Link>
							</li>
						))}
				</ul>
			</div>
			<div>
				<h2>Genres</h2>
				<ol>
					<li>Featured</li>
					<li>New Arrivals</li>
					<li>Mini Games</li>
					<li>AI</li>
					<li>React</li>
					<li>TypeScript</li>
					<li>C#</li>
					<li>Vanilla JavaScript</li>
					<li>HTML & CSS</li>
				</ol>
			</div>
		</>
	);
};

export default Portfolio;

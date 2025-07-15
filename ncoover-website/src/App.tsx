import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATHS } from "./constants/paths";

import "./App.css";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import ErrorDefault from "./pages/ErrorDefault";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import Root from "./pages/Root";

const router = createBrowserRouter([
	{
		path: PATHS.Home,
		element: <Root />,
		errorElement: <ErrorDefault />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: PATHS.Portfolio.Root,
				element: <Portfolio />,
			},
			{
				path: `${PATHS.Portfolio.Root}/:projectTitle`,
				element: <ProjectDetails />,
			},
			{
				path: PATHS.AboutMe,
				element: <AboutMe />,
			},
			{
				path: PATHS.Contact,
				element: <Contact />,
			},
		],
	},
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
};

export default App;

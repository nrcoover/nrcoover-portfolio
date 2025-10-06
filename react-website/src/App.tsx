import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATHS } from "./constants/paths";

import "./App.css";
// import AboutMe from "./pages/AboutMe";
// import Contact from "./pages/Contact";
import ErrorDefault from "./pages/ErrorDefault";
// import Home from "./pages/Home";
import ScrollToTop from "./components/common/ScrollToTop";
import Portfolio from "./pages/Portfolio";
import Root from "./pages/Root";
import AuthUserContextProvider from "./store/auth-user-context/AuthUserContextProvider";
import FavoritesContextProvider from "./store/favorites-context/FavoritesContextProvider";
import LocationContextProvider from "./store/location-context/LocationContextProvider";
import ProjectPreviewContextProvider from "./store/project-preview-context/ProjectPreviewContextProvider";
import SettingsContextProvider from "./store/settings-context/SettingsContextProvider";

const router = createBrowserRouter([
	{
		path: PATHS.Home,
		element: (
			<LocationContextProvider>
				<ScrollToTop />
				<Root />
			</LocationContextProvider>
		),
		errorElement: <ErrorDefault />,
		children: [
			// TODO: Implement commented out roots
			// {
			// 	index: true,
			// 	element: <Home />,
			// },
			{
				path: PATHS.Portfolio.Root,
				element: <Portfolio />,
				children: [
					{ path: PATHS.Portfolio.AlreadyHere, element: <Portfolio /> },
					{ path: PATHS.Portfolio.Favorites, element: <Portfolio /> },
				],
			},
			// {
			// 	path: PATHS.AboutMe,
			// 	element: <AboutMe />,
			// },
			// {
			// 	path: PATHS.Contact,
			// 	element: <Contact />,
			// },
		],
	},
]);

const App = () => {
	return (
		<>
			<AuthUserContextProvider>
				<SettingsContextProvider>
					<FavoritesContextProvider>
						<ProjectPreviewContextProvider>
							<RouterProvider router={router}></RouterProvider>
						</ProjectPreviewContextProvider>
					</FavoritesContextProvider>
				</SettingsContextProvider>
			</AuthUserContextProvider>
		</>
	);
};

export default App;

import { Outlet } from "react-router-dom";

import MainNavigation from "../components/main-navigation/MainNavigation";

const Root = () => {
	return (
		<>
			<MainNavigation />
			<main>
				<Outlet></Outlet>
			</main>
		</>
	);
};

export default Root;

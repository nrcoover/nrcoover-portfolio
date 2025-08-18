import { Outlet, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import MainNavigation from "../components/main-navigation/MainNavigation";

const Root = () => {
	const location = useLocation();
	const [isPortfolio, setIsPortfolio] = useState(false);

	useEffect(() => {
		setIsPortfolio(location.pathname.includes("portfolio"));
	}, [location.pathname]);
	return (
		<>
			{!isPortfolio && <MainNavigation />}
			<main>
				<Outlet></Outlet>
			</main>
		</>
	);
};

export default Root;

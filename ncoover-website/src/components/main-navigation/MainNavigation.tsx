import { NavLink, useLocation } from "react-router-dom";
import { PATHS } from "../../constants/paths";

import { useEffect, useState } from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	const location = useLocation();
	const [isPortfolio, setIsPortfolio] = useState(false);

	// TODO: Move this logic to a context?
	useEffect(() => {
		setIsPortfolio(location.pathname.includes("portfolio"));
	}, [location.pathname]);

	return (
		<div className={classes.headerWrapper}>
			<header className={classes.header}>
				<nav>
					<ul
						className={`${classes.list} ${isPortfolio ? `${classes.sideNavigationOffset}` : ""}`}
					>
						<li>
							<NavLink
								to={PATHS.Home}
								className={({ isActive }) =>
									isActive ? classes.active : undefined
								}
								end
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to={PATHS.Portfolio.Root}
								className={({ isActive }) =>
									isActive ? classes.active : undefined
								}
							>
								Portfolio
							</NavLink>
						</li>
						<li>
							<NavLink
								to={PATHS.AboutMe}
								className={({ isActive }) =>
									isActive ? classes.active : undefined
								}
							>
								About Me
							</NavLink>
						</li>
						<li>
							<NavLink
								to={PATHS.Contact}
								className={({ isActive }) =>
									isActive ? classes.active : undefined
								}
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default MainNavigation;

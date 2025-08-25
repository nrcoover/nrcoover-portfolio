import { NavLink, Outlet } from "react-router-dom";

import { useContext } from "react";
import Separator from "../components/common/separator/Separator";
import MainNavigation from "../components/main-navigation/MainNavigation";
import { AuthUserContext } from "../store/auth-user-context/AuthUserContext";

import { PATHS } from "../constants/paths";
import { LocationContext } from "../store/location-context/LocationContext";

import globalClasses from "../global.module.css";
import classes from "./styles/Root.module.css";

const Root = () => {
	const { isLoggedIn, openLoginModal } = useContext(AuthUserContext);
	const { locationPath } = useContext(LocationContext);

	const isPortfolio = locationPath.includes("portfolio");

	const handleOpenLoginFormModal = () => {
		openLoginModal();
	};

	const isTrue = true;

	return (
		<>
			{!isPortfolio && <MainNavigation />}
			<main>
				<Outlet></Outlet>
			</main>
			<footer className={isPortfolio ? classes.sideNavigationOffset : ""}>
				<p className={classes.logo}>
					nr<span>C</span>oover
				</p>
				<nav className={classes.sideNavigation}>
					<h3>{isPortfolio && "main "}menu</h3>
					<ul className={classes.list}>
						<li className={globalClasses.iconContainer}>
							<NavLink
								to={PATHS.Home}
								className={({ isActive }) =>
									isActive
										? (classes.active, globalClasses.iconContainer)
										: globalClasses.iconContainer
								}
								end
							>
								{isTrue && <>home</>}
							</NavLink>
						</li>
						<li className={globalClasses.iconContainer}>
							<NavLink
								to={
									locationPath === PATHS.Portfolio.Root
										? PATHS.Portfolio.AlreadyHere
										: PATHS.Portfolio.Root
								}
								className={({ isActive }) =>
									isActive
										? (classes.active, globalClasses.iconContainer)
										: globalClasses.iconContainer
								}
								end
							>
								{isTrue && <>portfolio</>}
							</NavLink>
						</li>
						<li className={globalClasses.iconContainer}>
							<NavLink
								to={PATHS.AboutMe}
								className={({ isActive }) =>
									isActive
										? (classes.active, globalClasses.iconContainer)
										: globalClasses.iconContainer
								}
								end
							>
								{isTrue && <>about me</>}
							</NavLink>
						</li>
						<li className={globalClasses.iconContainer}>
							<NavLink
								to={PATHS.Contact}
								className={({ isActive }) =>
									isActive
										? (classes.active, globalClasses.iconContainer)
										: globalClasses.iconContainer
								}
								end
							>
								{isTrue && <>contact</>}
							</NavLink>
						</li>
					</ul>
					{isPortfolio && (
						<>
							<Separator />
							<h3>devflix menu</h3>
							<ul className={classes.list}>
								<li className={globalClasses.iconContainer}>
									<NavLink
										to={PATHS.Home}
										className={({ isActive }) =>
											isActive
												? (classes.active, globalClasses.iconContainer)
												: globalClasses.iconContainer
										}
										end
									>
										{isTrue && <>search</>}
									</NavLink>
								</li>
								{isLoggedIn ? (
									<li className={globalClasses.iconContainer}>
										<button
											onClick={handleOpenLoginFormModal}
											className={"iconButton"}
										>
											{isTrue && <a>profile</a>}
										</button>
									</li>
								) : (
									<li className={globalClasses.iconContainer}>
										<button
											type="button"
											onClick={handleOpenLoginFormModal}
											className={"iconButton"}
										>
											{isTrue && <a>login</a>}
										</button>
									</li>
								)}
								<li className={globalClasses.iconContainer}>
									<NavLink
										to={PATHS.Home}
										className={({ isActive }) =>
											isActive
												? (classes.active, globalClasses.iconContainer)
												: globalClasses.iconContainer
										}
										end
									>
										{isTrue && <>light mode</>}
									</NavLink>
								</li>
								<li className={globalClasses.iconContainer}>
									<NavLink
										to={PATHS.Portfolio.Favorites}
										className={({ isActive }) =>
											isActive
												? (classes.active, globalClasses.iconContainer)
												: globalClasses.iconContainer
										}
										end
									>
										{isTrue && <>favorites</>}
									</NavLink>
								</li>

								<li className={globalClasses.iconContainer}>
									<NavLink
										to={PATHS.Home}
										className={({ isActive }) =>
											isActive
												? (classes.active, globalClasses.iconContainer)
												: globalClasses.iconContainer
										}
										end
									>
										{isTrue && <>settings</>}
									</NavLink>
								</li>
							</ul>
						</>
					)}
				</nav>
			</footer>
		</>
	);
};

export default Root;

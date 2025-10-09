import { NavLink, Outlet } from "react-router-dom";

import { useContext } from "react";
import Separator from "../components/common/separator/Separator";
import MainNavigation from "../components/main-navigation/MainNavigation";
import { AuthUserContext } from "../store/auth-user-context/AuthUserContext";

import { PATHS } from "../constants/paths";
import { LocationContext } from "../store/location-context/LocationContext";

import Icon from "../components/common/icon/Icon";
import { iconSocial } from "../constants/iconTypes";
import { getIconName } from "../helpers/iconHelper";

import Logo from "../components/common/logo/Logo";
import globalClasses from "../global.module.css";
import classes from "./styles/Root.module.css";
import { SettingsContext } from "../store/settings-context/SettingsContext";

const Root = () => {
	const { isLoggedIn, openLoginModal } = useContext(AuthUserContext);
	const { locationPath } = useContext(LocationContext);
	const { openSettingsModal } = useContext(SettingsContext);

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
				<Logo />
				<nav className={classes.sideNavigation}>
					<Separator />
					<h3>{isPortfolio && "main "}menu</h3>
					<ul className={classes.list}>
						<li className={globalClasses.iconContainer}>
							<NavLink
								to={"/index.html"}
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
								to={"/about-me.html"}
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
						{/* TODO: Uncomment once feature is implemented */}
						{/* <li className={globalClasses.iconContainer}>
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
						</li> */}
					</ul>

					{isPortfolio && (
						<>
							<Separator />
							<h3>devflix menu</h3>
							<ul className={classes.list}>
								{/* TODO: Uncomment once feature is implemented */}
								{/* <li className={globalClasses.iconContainer}>
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
								</li> */}
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
								{/* TODO: Uncomment once feature is implemented */}
								{/* <li className={globalClasses.iconContainer}>
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
								</li> */}
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
									<button
										type="button"
										className={"iconButton"}
										onClick={openSettingsModal}
									>
										{isTrue && <a>settings</a>}
									</button>
								</li>
								<Separator />
							</ul>
						</>
					)}

					<h3 className={classes.externalSitesTitle}>external sites</h3>
					<div className={classes.previewIconsWrapper}>
						<ul className={classes.previewIcons}>
							<li className={globalClasses.iconContainer}>
								<NavLink
									to={"https://www.linkedin.com/in/nrcoover/"}
									className={({ isActive }) =>
										isActive
											? (classes.active, globalClasses.iconContainer)
											: globalClasses.iconContainer
									}
									end
								>
									<Icon source={iconSocial.LinkedIn} />
								</NavLink>
								<p>{getIconName(iconSocial.LinkedIn)}</p>
							</li>
							<li className={globalClasses.iconContainer}>
								<NavLink
									to={"https://x.com/coovercode"}
									className={`${({ isActive }: { isActive: boolean }) =>
										isActive
											? (classes.active, globalClasses.iconContainer)
											: globalClasses.iconContainer}`}
									end
								>
									<Icon source={iconSocial.Twitter} />
								</NavLink>
								<p>{getIconName(iconSocial.Twitter)}</p>
							</li>
							<li className={globalClasses.iconContainer}>
								<NavLink
									to={"https://github.com/nrcoover"}
									className={({ isActive }) =>
										isActive
											? (classes.active, globalClasses.iconContainer)
											: globalClasses.iconContainer
									}
									end
								>
									<Icon source={iconSocial.GitHub} />
								</NavLink>
								<p>{getIconName(iconSocial.GitHub)}</p>
							</li>
							<li className={globalClasses.iconContainer}>
								<NavLink
									to={"https://codepen.io/nrcoover"}
									className={({ isActive }) =>
										isActive
											? (classes.active, globalClasses.iconContainer)
											: globalClasses.iconContainer
									}
									end
								>
									<Icon source={iconSocial.CodePen} />
								</NavLink>
								<p>{getIconName(iconSocial.CodePen)}</p>
							</li>
						</ul>
					</div>
					<Separator />

					{/* {!isPortfolio && <Separator />} */}
				</nav>
				<p>© {new Date().getUTCFullYear()}</p>
			</footer>
		</>
	);
};

export default Root;

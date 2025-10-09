import { type ReactNode, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { iconUi } from "../../constants/iconTypes";
import { PATHS } from "../../constants/paths";
import globalClasses from "../../global.module.css";
import { AuthUserContext } from "../../store/auth-user-context/AuthUserContext";
import { LocationContext } from "../../store/location-context/LocationContext";
import { SettingsContext } from "../../store/settings-context/SettingsContext";
import Icon from "../common/icon/Icon";
import Separator from "../common/separator/Separator";
import classes from "./SideNavigation.module.css";

type NavItem = {
	id: string;
	label: string;
	icon: ReactNode;
	to?: string;
	href?: string;
	onClick?: () => void;
	section?: "top" | "bottom"; // split into two groups
};

const SideNavigation = () => {
	const { locationPath } = useContext(LocationContext);
	const { isLoggedIn, openLoginModal } = useContext(AuthUserContext);
	const { openSettingsModal } = useContext(SettingsContext);

	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	// Shared nav items definition
	const NAV_ITEMS: NavItem[] = [
		// TODO: replace hrefs when new react pages get implemented.
		{
			id: "home",
			label: "home",
			icon: <Icon source={iconUi.Home} />,
			href: "/index.html",
			// to: PATHS.Home,
			section: "top",
		},
		{
			id: "portfolio",
			label: "portfolio",
			icon: <Icon source={iconUi.Folder} />,
			to:
				locationPath === PATHS.Portfolio.Root
					? PATHS.Portfolio.AlreadyHere
					: PATHS.Portfolio.Root,
			section: "top",
		},
		{
			id: "about",
			label: "about me",
			icon: <Icon source={iconUi.Info} />,
			href: "/about-me.html",
			// to: PATHS.AboutMe,
			section: "top",
		},
		// {
		// 	id: "contact",
		// 	label: "contact",
		// 	icon: <Icon source={iconUi.Contact} />,
		// 	to: PATHS.Contact,
		// 	section: "top",
		// },

		// TODO: Implement Search feature
		// {
		// 	id: "search",
		// 	label: "search",
		// 	icon: <Icon source={iconUi.Search} />,
		// 	to: PATHS.Home,
		// 	section: "bottom",
		// },

		isLoggedIn
			? {
					id: "profile",
					label: "profile",
					icon: <Icon source={iconUi.ProfileCircle} />,
					onClick: openLoginModal,
					section: "bottom",
				}
			: {
					id: "login",
					label: "login",
					icon: <Icon source={iconUi.Login} />,
					onClick: openLoginModal,
					section: "bottom",
				},

		// TODO: Implement Light/Dark mode feature
		// {
		// 	id: "light",
		// 	label: "light mode",
		// 	icon: <Icon source={iconUi.LightMode} />,
		// 	to: PATHS.Home,
		// 	section: "bottom",
		// },
		{
			id: "favorites",
			label: "favorites",
			icon: <Icon source={iconUi.Favorite} />,
			to: PATHS.Portfolio.Favorites,
			section: "bottom",
		},
		{
			id: "settings",
			label: "settings",
			icon: <Icon source={iconUi.Settings} />,
			onClick: openSettingsModal,
			section: "bottom",
		},
	];

	const renderNavItems = (section: "top" | "bottom", isMobile = false) =>
		NAV_ITEMS.filter((item) => item.section === section).map((item) => (
			<li
				key={item.id}
				className={`${globalClasses.iconContainer} ${classes.listItem}`}
			>
				{item.href ? (
					<>
						<a href={item.href} className={`${globalClasses.iconContainer}`}>
							{item.icon} {item.label}
						</a>
					</>
				) : (
					<>
						{item.to ? (
							<NavLink
								to={item.to}
								onClick={isMobile ? toggleMenu : undefined}
								className={({ isActive }) =>
									isActive
										? `${classes.active} ${globalClasses.iconContainer}`
										: globalClasses.iconContainer
								}
								end
							>
								{item.icon} {item.label}
							</NavLink>
						) : (
							<button
								onClick={() => {
									item.onClick?.();
									if (isMobile) toggleMenu();
								}}
								className={`${globalClasses.iconContainer} ${classes.cleanUi}`}
							>
								{item.icon} {item.label}
							</button>
						)}
					</>
				)}
			</li>
		));

	return (
		<>
			{/* Desktop Sidebar */}
			<div className={classes.navigationWrapper}>
				<nav className={classes.sideNavigation}>
					<ul className={classes.list}>{renderNavItems("top")}</ul>
					<Separator width={"60%"} margin={"4rem"} />
					<ul className={classes.list}>{renderNavItems("bottom")}</ul>
				</nav>
			</div>

			{/* Mobile Bottom Bar */}
			<div className={classes.mobileNavBar}>
				<button className={classes.menuButton} onClick={toggleMenu}>
					{menuOpen ? "Close" : "Menu"}
				</button>
			</div>

			{/* Fullscreen Overlay Menu (mobile) */}
			{menuOpen && (
				<div className={classes.mobileMenuOverlay}>
					<nav className={classes.mobileMenuContent}>
						<ul className={classes.mobileList}>
							{renderNavItems("top", true)}
						</ul>
						<Separator width={"60%"} margin={"2rem"} />
						<ul className={classes.mobileList}>
							{renderNavItems("bottom", true)}
						</ul>
					</nav>
				</div>
			)}
		</>
	);
};

export default SideNavigation;

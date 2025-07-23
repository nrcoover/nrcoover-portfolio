import { svgMusic, svgSocial, svgUi } from "./iconSvg";

export const iconMap = {
	music: {
		AppleMusic: svgMusic.AppleMusic,
		Bandcamp: svgMusic.Bandcamp,
		Itunes: svgMusic.Itunes,
		MusicDefault: svgMusic.MusicDefault,
		Soundcloud: svgMusic.Soundcloud,
		Spotify: svgMusic.Spotify,
	},
	social: {
		BlueSky: svgSocial.BlueSky,
		Facbook: svgSocial.Facbook,
		Instagram: svgSocial.Instagram,
		Mastodon: svgSocial.Mastodon,
		Reddit: svgSocial.Reddit,
		Threads: svgSocial.Threads,
		Tumblr: svgSocial.Tumblr,
		Twitch: svgSocial.Twitch,
		Twitter: svgSocial.Twitter,
		YouTube: svgSocial.YouTube,
	},
	ui: {
		DarkMode: svgUi.DarkMode,
		Favorite: svgUi.Favorite,
		Home: svgUi.Home,
		LightMode: svgUi.LightMode,
		Login: svgUi.Login,
		Profile: svgUi.Profile,
		Search: svgUi.Search,
		Star: svgUi.Star,
	},
} as const;

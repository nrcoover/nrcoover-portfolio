// TYPES
type IconTypes = "music" | "social" | "ui";

export const iconTypes = {
	Music: "music",
	Social: "social",
	Ui: "ui",
} as const;

// LABELS
type IconLabel = {
	[key: string]: string;
};

export const iconMusic: IconLabel = {
	AppleMusic: "apple music",
	Bandcamp: "bandcamp",
	Itunes: "itunes",
	MusicDefault: "music default",
	Soundcloud: "soundcloud",
	Spotify: "spotify",
} as const;

export const iconSocial: IconLabel = {
	BlueSky: "bluesky",
	Facbook: "facebook",
	Instagram: "instagram",
	Mastodon: "mastodon",
	Reddit: "reddit",
	Threads: "threads",
	Tumblr: "tumblr",
	Twitch: "twitch",
	Twitter: "twitter",
	YouTube: "youtube",
} as const;

export const iconUi: IconLabel = {
	DarkMode: "dark mode",
	Favorite: "favorite",
	Home: "home",
	LightMode: "light mode",
	Login: "login",
	Profile: "profile",
	Search: "search",
	Star: "star",
} as const;

// DATA
export type IconData = {
	type: IconTypes;
} & {
	[key: string]: string | IconTypes;
};

export const icons: IconData[] = [
	{
		type: iconTypes.Music,
		label: iconMusic.AppleMusic,
	},
];

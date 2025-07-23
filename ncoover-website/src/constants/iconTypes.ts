// TYPES
export type IconTypes = "music" | "social" | "ui";

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

export type IconLabelMap = {
	music: keyof typeof iconMusic;
	social: keyof typeof iconSocial;
	ui: keyof typeof iconUi;
};

// DATA
export type IconData =
	| { type: "music"; label: keyof typeof iconMusic }
	| { type: "social"; label: keyof typeof iconSocial }
	| { type: "ui"; label: keyof typeof iconUi };

export const icons: IconData[] = [
	{
		type: iconTypes.Music,
		label: iconMusic.AppleMusic,
	},
];

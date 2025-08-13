export type IconSource =
	| (typeof iconMusic)[keyof typeof iconMusic]
	| (typeof iconSocial)[keyof typeof iconSocial]
	| (typeof iconUi)[keyof typeof iconUi];

// TYPES
export type IconTypes = "music" | "social" | "ui";

export const iconTypes = {
	Music: "music",
	Social: "social",
	Ui: "ui",
} as const;

// LABELS
export const iconMusic = {
	AppleMusic: "music.AppleMusic",
	Bandcamp: "music.Bandcamp",
	Itunes: "music.Itunes",
	MusicDefault: "music.MusicDefault",
	Soundcloud: "music.Soundcloud",
	Spotify: "music.Spotify",
} as const;

export const iconSocial = {
	BlueSky: "social.BlueSky",
	CodePen: "social.CodePen",
	Facbook: "social.Facebook",
	GitHub: "social.GitHub",
	Instagram: "social.Instagram",
	Mastodon: "social.Mastodon",
	Reddit: "social.Reddit",
	Steam: "social.Steam",
	Threads: "social.Threads",
	Tumblr: "social.Tumblr",
	Twitch: "social.Twitch",
	Twitter: "social.Twitter",
	YouTube: "social.YouTube",
	Website: "social.Website",
} as const;

export const iconUi = {
	DarkMode: "ui.DarkMode",
	Favorite: "ui.Favorite",
	FavoriteOutline: "ui.FavoriteOutline",
	Home: "ui.Home",
	LightMode: "ui.LightMode",
	Login: "ui.Login",
	Profile: "ui.Profile",
	Search: "ui.Search",
	Settings: "ui.Settings",
	Star: "ui.Star",
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

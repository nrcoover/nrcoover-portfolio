export type IconSource =
	| (typeof iconMusic)[keyof typeof iconMusic]
	| (typeof iconSocial)[keyof typeof iconSocial]
	| (typeof iconUi)[keyof typeof iconUi]
	| (typeof iconDev)[keyof typeof iconDev];

// TYPES
export type IconTypes = "music" | "social" | "ui" | "dev";

export const iconTypes = {
	Music: "music",
	Social: "social",
	Ui: "ui",
	Dev: "dev",
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
	LinkedIn: "social.LinkedIn",
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
	Contact: "ui.Contact",
	DarkMode: "ui.DarkMode",
	Favorite: "ui.Favorite",
	FavoriteOutline: "ui.FavoriteOutline",
	Folder: "ui.Folder",
	Home: "ui.Home",
	Info: "ui.Info",
	LightMode: "ui.LightMode",
	Login: "ui.Login",
	Profile: "ui.Profile",
	ProfileCircle: "ui.ProfileCircle",
	Search: "ui.Search",
	Settings: "ui.Settings",
	Star: "ui.Star",
	QuestionMark: "ui.QuestionMark",
} as const;

export const iconDev = {
	React: "dev.React",
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
	| { type: "ui"; label: keyof typeof iconUi }
	| { type: "dev"; label: keyof typeof iconDev };

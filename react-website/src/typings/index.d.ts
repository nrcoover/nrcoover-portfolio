export type Settings = {
	displayMode: string;
	displayAllDecorators: boolean;
	displayImageAiLabel: boolean;
	displayFavoritesIcon: boolean;
	displayPrimaryTagIcon: boolean;
	displayPrimaryTagGlow: boolean;
};

export type Image = {
	src: string;
	alt: string;
	caption?: string;
};

export type CoverArt = {
	coverArtPath: string;
	isAiGeneratedImage: boolean;
};

export type ImageData = {
	coverArt: CoverArt;
	imagesPaths: Image[];
};

export type TagData = {
	primaryTag: string;
	otherTags: string[];
};

export type CodeLinks = {
	type: string;
	url: string;
};

export type HeroData = {
	banner: Image;
	shortTitle: string;
	shortDescription: string;
	isAiGeneratedImage: boolean;
};

export type Project = {
	id: number;
	title: string;
	description: string;
	dateCreated: Date;
	dateUpdated: Date;
	isFeatured: boolean;
	isFavorite: boolean;
	isMiniGame?: boolean;
	imageData: ImageData;
	tagData: TagData;
	links: CodeLinks[];
	heroFeatureData?: HeroData;
	isDefaultData?: boolean;
};

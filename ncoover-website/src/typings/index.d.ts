export type Image = {
	src: string;
	alt: string;
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

export type Project = {
	id: number;
	title: string;
	description: string;
	dateAdded: Date;
	isFavorite: boolean;
	imageData: ImageData;
	tagData: TagData;
	links: CodeLinks[];
};

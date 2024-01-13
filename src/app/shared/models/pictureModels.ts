export type DailyPicture = {
	title: string;
	date: string;
	explanation: string;
	url: string;
	mediaType: 'video' | 'image';
	thumbnailUrl: string;
};

export type ApodApiData = {
	date: string;
	explanation: string;
	hdurl?: string;
	media_type: 'video' | 'image';
	service_version: string;
	title: string;
	url: string;
	thumbnail_url?: string;
};

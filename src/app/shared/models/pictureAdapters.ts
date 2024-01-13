import { ApodApiData, DailyPicture } from './pictureModels';

export const transformApodApiDataToPicture = (
	apodApiData: ApodApiData
): DailyPicture => {
	const dailyPicture: DailyPicture = {
		title: apodApiData.title,
		date: apodApiData.date,
		explanation: apodApiData.explanation,
		mediaType: apodApiData.media_type,
		thumbnailUrl:
			apodApiData.media_type === 'image'
				? apodApiData.url
				: apodApiData.thumbnail_url!,
		url:
			apodApiData.media_type === 'image' ? apodApiData.hdurl! : apodApiData.url,
	};

	return dailyPicture;
};

export const transformApodApiDataArrayToPictureArray = (
	apodApiDataArray: ApodApiData[]
): DailyPicture[] => {
	return apodApiDataArray.map(transformApodApiDataToPicture);
};

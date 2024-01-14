import { ApodApiData } from '@/app/shared/models/pictureModels';

const API_KEY = process.env.NASA_API_KEY;
const APOD_URL = 'https://api.nasa.gov/planetary/apod';

export const getPictureOfTheDay = async (
	date?: string | null
): Promise<ApodApiData> => {
	let url = `${APOD_URL}?api_key=${API_KEY}&thumbs=true`;

	if (date) {
		url += `&date=${date}`;
	}

	const res = await fetch(url);

	if (!res.ok) {
		throwResponseError(res);
	}

	const data: ApodApiData = await res.json();
	return data;
};

export const getMultiplePicturesOfTheDay = async (
	startDate: string,
	endDate: string
): Promise<ApodApiData[]> => {
	let baseUrl = `${APOD_URL}?api_key=${API_KEY}&thumbs=true&start_date=${startDate}&end_date=${endDate}`;

	const res = await fetch(baseUrl);

	if (!res.ok) {
		throwResponseError(res);
	}

	const data: ApodApiData[] = await res.json();
	return data;
};

const throwResponseError = (res: Response) => {
	const error = {
		status: res.status,
		statusText: res.statusText,
		url: APOD_URL,
	};
	throw new Error(JSON.stringify(error));
};

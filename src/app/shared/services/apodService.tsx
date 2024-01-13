import { transformApodApiDataArrayToPictureArray } from '../models/pictureAdapters';
import { DailyPicture } from '../models/pictureModels';
import { getCurrentMonthData } from './dateService';

export const getCurrentMonthPictures = async () => {
	const { currentDay, currentMonth, currentYear, daysInCurrentMonth } =
		getCurrentMonthData();

	const startDate = `${currentYear}-${currentMonth}-01`;
	const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

	const res = await fetch(
		`/api/apod?start_date=${startDate}&end_date=${currentDate}`
	);

	const data = await res.json();
	const currentMonthPictures = transformApodApiDataArrayToPictureArray(data);

	const completeMonthPictures = [
		...currentMonthPictures,
		...Array.from(
			{ length: daysInCurrentMonth - currentMonthPictures.length },
			(v, k) => ({} as DailyPicture)
		),
	];

	return completeMonthPictures;
};

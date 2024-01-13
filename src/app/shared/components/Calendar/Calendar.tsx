import { DailyPicture } from '../../models/pictureModels';
import CalendarDay from './CalendarDay';

type Props = {
	pictures: DailyPicture[];
	setCurrentSelectedPicture: (picture: DailyPicture) => void;
};

export default function Calendar({
	pictures,
	setCurrentSelectedPicture,
}: Props): JSX.Element {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
			{pictures.map((picture, i) => {
				return (
					<CalendarDay
						key={`${picture.date}${picture.url}${i}`}
						background={picture.thumbnailUrl}
						title={picture.title}
						dayNumber={(i + 1).toString().padStart(2, '0')}
						onClick={() => picture.title && setCurrentSelectedPicture(picture)}
					/>
				);
			})}
		</div>
	);
}

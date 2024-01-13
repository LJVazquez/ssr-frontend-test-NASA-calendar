'use client';

import { useEffect, useState } from 'react';
import { DailyPicture } from './shared/models/pictureModels';
import CalendarDay from './shared/components/Calendar/CalendarDay';
import { getCurrentMonthData } from './shared/services/dateService';
import AlertMessage from './shared/components/AlertMessage/AlertMessage';
import ModalBox from './shared/components/ModalBox/ModalBox';
import PictureData from './shared/components/PictureData/PictureData';
import { getCurrentMonthPictures } from './shared/services/apodService';

export default function Home() {
	const [pictures, setPictures] = useState<DailyPicture[]>([]);
	const [selectedPicture, setSelectedPicture] = useState<DailyPicture | null>(
		null
	);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const { currentMonthName } = getCurrentMonthData();

	useEffect(() => {
		const fetchPictures = async () => {
			setLoading(true);
			try {
				const pictures = await getCurrentMonthPictures();
				setPictures(pictures);
			} catch (e: any) {
				console.error(e);
				setError('Woops, something went wrong while fetching daily pictures.');
			} finally {
				setLoading(false);
			}
		};
		fetchPictures();
	}, []);

	const setCurrentSelectedPicture = (picture: DailyPicture) => {
		setSelectedPicture(picture);
	};

	const removeSelectedPicture = () => {
		setSelectedPicture(null);
	};

	return (
		<>
			{error && <AlertMessage message={error} />}
			<main className="container mx-auto mt-8 px-4">
				<h2 className="text-2xl font-bold mb-4">{currentMonthName} pictures</h2>
				{loading && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-12 h-12 fixed top-1/2 left-1/2 text-blue-900 animate-ping"
					>
						<path
							fill-rule="evenodd"
							d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
							clip-rule="evenodd"
						/>
					</svg>
				)}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
					{pictures.map((picture, i) => {
						return (
							<CalendarDay
								key={`${picture.date}${picture.url}${i}`}
								background={picture.thumbnailUrl}
								title={picture.title}
								dayNumber={(i + 1).toString().padStart(2, '0')}
								onClick={() =>
									picture.title && setCurrentSelectedPicture(picture)
								}
							/>
						);
					})}
				</div>
				{selectedPicture && (
					<ModalBox closeModal={removeSelectedPicture}>
						<PictureData picture={selectedPicture} />
					</ModalBox>
				)}
			</main>
		</>
	);
}

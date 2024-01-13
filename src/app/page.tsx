'use client';

import { DailyPicture } from './shared/models/pictureModels';
import { getCurrentMonthData } from './shared/services/dateService';
import { getCurrentMonthPictures } from './shared/services/apodService';
import { useEffect, useState } from 'react';
import AlertMessage from './shared/components/AlertMessage/AlertMessage';
import Calendar from './shared/components/Calendar/Calendar';
import ModalBox from './shared/components/ModalBox/ModalBox';
import PictureData from './shared/components/PictureData/PictureData';
import PlanetIcon from './shared/assets/icons/PlanetIcon';

export default function Home(): JSX.Element {
	const [pictures, setPictures] = useState<DailyPicture[]>([]);
	const [selectedPicture, setSelectedPicture] = useState<DailyPicture | null>(
		null
	);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>('test');

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
					<PlanetIcon
						width="30"
						height="30"
						additionalClasses="fixed top-1/2 left-1/2 text-blue-900 animate-ping"
					/>
				)}
				<Calendar
					pictures={pictures}
					setCurrentSelectedPicture={setCurrentSelectedPicture}
				/>
				{selectedPicture && (
					<ModalBox closeModal={removeSelectedPicture}>
						<PictureData picture={selectedPicture} />
					</ModalBox>
				)}
			</main>
		</>
	);
}

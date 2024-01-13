import { DailyPicture } from '../../models/pictureModels';

type Props = {
	picture: DailyPicture;
};

export default function PictureData({ picture }: Props): JSX.Element {
	const { title, explanation, url, mediaType } = picture;

	return (
		<div className="group z-40">
			{mediaType === 'image' ? (
				<img src={url} alt={title} className="object-fill rounded-md" />
			) : (
				<iframe
					className="w-full h-[50vh] rounded-md"
					src={url}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
			)}
			<div className="absolute bottom-0 bg-gray-900 w-full bg-opacity-60 p-6 text-white rounded-b-lg transition-all opacity-0 group-hover:opacity-100 max-h-48 overflow-auto">
				<h2>{title}</h2>
				<p className="text-sm">{explanation}</p>
			</div>
		</div>
	);
}

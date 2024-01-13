import blankPicture from '@/app/shared/assets/img/blank-day.jpg';

type Props = {
	background: string;
	title: string;
	dayNumber: string;
	onClick: () => void;
};

export default function CalendarDay({
	background,
	title,
	dayNumber,
	onClick,
}: Props) {
	return (
		<div className="mb-4 relative group" onClick={onClick}>
			<span className="absolute text-white top-2 left-2">{dayNumber}</span>
			{!title && (
				<span className="text-white absolute top-1/2 left-1/2 -translate-x-1/2">
					Stay tuned
				</span>
			)}
			{title && (
				<span className="absolute bottom-0 w-full bg-gray-500 bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-all">
					{title}
				</span>
			)}
			<img
				src={background || blankPicture.src}
				alt={title}
				className="aspect-square object-cover rounded-md"
			/>
		</div>
	);
}

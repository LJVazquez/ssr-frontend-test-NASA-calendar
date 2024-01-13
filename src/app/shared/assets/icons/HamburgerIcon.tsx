import { IconProps } from './iconProps';

export default function HamburgerIcon({
	additionalClasses,
	width,
	height,
}: IconProps): JSX.Element {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			width={width}
			height={height}
			className={additionalClasses}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 5a1 1 0 100 2h16a1 1 0 100-2H4zM4 11a1 1 0 100 2h16a1 1 0 100-2H4zm0 6a1 1 0 100 2h16a1 1 0 100-2H4z"
			/>
		</svg>
	);
}

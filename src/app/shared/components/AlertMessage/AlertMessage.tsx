import { useEffect, useState } from 'react';
import AlertIcon from '../../assets/icons/AlertIcon';

type Props = {
	message: string;
};

export default function AlertMessage({ message }: Props): JSX.Element {
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		setDisplay(true);
	}, []);

	return (
		<div
			className={`bg-red-500 flex px-2 py-1 justify-center transition-all duration-1000 ${
				display ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<AlertIcon width="25" height="25" additionalClasses="me-2" />
			<span>{message}</span>
		</div>
	);
}

import { useEffect, useState } from 'react';
import CloseIcon from '@/app/shared/assets/icons/CloseIcon';

type Props = {
	closeModal: () => void;
	children: React.ReactNode;
};

export default function ModalBox({ children, closeModal }: Props): JSX.Element {
	const [display, setDisplay] = useState(false);
	const transitionDuration = 1000;

	useEffect(() => {
		setDisplay(true);
	}, []);

	const handleClose = () => {
		setDisplay(false);
		setTimeout(() => {
			closeModal();
		}, transitionDuration / 2);
	};

	return (
		<div
			className={`fixed top-0 bottom-0 left-0 right-0 bg-gray-800 bg-opacity-60 flex justify-center items-center transition-all ease-in-out duration-${transitionDuration} ${
				display ? 'opacity-100' : 'opacity-0'
			}`}
			onClick={handleClose}
		>
			<div
				className="bg-white rounded-lg w-3/4 max-w-screen-md relative"
				onClick={(e) => e.stopPropagation()}
			>
				<span
					className="absolute top-2 right-2 cursor-pointer text-white"
					onClick={handleClose}
				>
					<CloseIcon width="20" height="20" additionalClasses="text-white" />
				</span>
				{children}
			</div>
		</div>
	);
}

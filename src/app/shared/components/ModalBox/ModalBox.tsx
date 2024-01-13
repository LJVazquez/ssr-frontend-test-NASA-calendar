import { useEffect, useState } from 'react';

type Props = {
	closeModal: () => void;
	children: React.ReactNode;
};

export default function ModalBox({ children, closeModal }: Props) {
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6"
					>
						<path
							fill-rule="evenodd"
							d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
							clip-rule="evenodd"
						/>
					</svg>
				</span>
				{children}
			</div>
		</div>
	);
}

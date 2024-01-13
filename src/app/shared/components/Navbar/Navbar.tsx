'use client';
import { useState } from 'react';
import HamburgerIcon from '../../assets/icons/HamburgerIcon';
import HamburgerIconClose from '../../assets/icons/CloseIcon';
import Link from 'next/link';
import nasaLogo from '@/app/shared/assets/img/NASA_logo.png';
import CloseIcon from '../../assets/icons/CloseIcon';

export default function Navbar(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-black p-4 z-40 text-white relative h-20">
			<div className="container mx-auto flex justify-between items-center">
				<div className="font-bold flex items-center">
					<Link href="/">
						<img
							src={nasaLogo.src}
							width={50}
							alt="nasa logo"
							className="me-4"
						/>
					</Link>

					<h1>Astronomy Picture of the Day Calendar</h1>
				</div>

				<button
					className="lg:hidden text-white focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? (
						<CloseIcon width="25" height="25" />
					) : (
						<HamburgerIcon width="25" height="25" />
					)}
				</button>

				<div className="hidden lg:flex space-x-4">
					<Link href="/" className="text-white hover:text-gray-300">
						Calendar
					</Link>
					<Link href="/about" className="text-white hover:text-gray-300">
						About
					</Link>
				</div>
			</div>

			{isOpen && (
				<div className="lg:hidden bg-black w-full absolute top-20 right-0 left-0 px-4 pb-2">
					<Link
						href="/"
						className="block p-3 text-white hover:text-gray-300"
						onClick={() => setIsOpen(false)}
					>
						Calendar
					</Link>
					<Link
						href="/about"
						className="block p-3 text-white hover:text-gray-300"
						onClick={() => setIsOpen(false)}
					>
						About
					</Link>
				</div>
			)}
		</nav>
	);
}

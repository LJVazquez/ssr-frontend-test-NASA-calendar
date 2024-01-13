'use client';
import nasaLogo from '@/app/shared/assets/img/NASA_logo.png';
import Link from 'next/link';
import { useState } from 'react';

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
					<svg
						className="h-6 w-6 fill-current"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{isOpen ? (
							<path
								fill-rule="evenodd"
								d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
								clip-rule="evenodd"
							/>
						) : (
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M4 5a1 1 0 100 2h16a1 1 0 100-2H4zM4 11a1 1 0 100 2h16a1 1 0 100-2H4zm0 6a1 1 0 100 2h16a1 1 0 100-2H4z"
							/>
						)}
					</svg>
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

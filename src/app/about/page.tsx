import earth from '@/app/shared/assets/img/earth-hero.png';
import Link from 'next/link';
import LinkedInIcon from '../shared/assets/icons/LinkedInIcon';
import GithubIcon from '../shared/assets/icons/GithubIcon';
import EmailIcon from '../shared/assets/icons/EmailIcon';

export default function page() {
	return (
		<>
			<main className="bg-gray-900 text-white mb-6">
				<div className="container grid px-8 md:px-4 py-8 mx-auto grid-cols-12 lg:gap-8">
					<div className="col-span-12 md:col-span-5 place-self-center">
						<img src={earth.src} alt="earth" className="w-96 lg:w-full" />
					</div>
					<div className="place-self-center col-span-12 md:col-span-7 md:order-first">
						<h1>About APOD Calendar</h1>
						<p className="font-light text-lg text-gray-400">
							This is a semi senior frontend technical test for a company. It's
							entirely made with Next JS.
						</p>
						<p className="mt-4">Some key points of the test are:</p>
						<ul className="font-light text-gray-400">
							<li>- Use of Next JS 13/14</li>
							<li>- Use of app directory</li>
							<li>- No use of external libraries</li>
							<li>- Use of typescript in the entire project</li>
							<li>- Responsive design</li>
							<li>- Use of animations</li>
						</ul>
					</div>
				</div>
			</main>
			<aside className="container mx-auto text-center">
				<h2 className="mb-6 text-xl">Some contact links</h2>
				<ul className="flex justify-around">
					<li>
						<Link
							href="https://www.linkedin.com/in/lvazquez-dev/"
							target="_blank"
						>
							<LinkedInIcon
								width="64"
								height="64"
								additionalClasses="text-sky-800"
							/>
						</Link>
					</li>
					<li>
						<Link href="https://github.com/LJVazquez" target="_blank">
							<GithubIcon
								width="64"
								height="64"
								additionalClasses="text-slate-700"
							/>
						</Link>
					</li>
					<li>
						<Link href="mailto:ljvazquez00@gmail.com">
							<EmailIcon
								width="64"
								height="64"
								additionalClasses="text-blue-600"
							/>
						</Link>
					</li>
				</ul>
			</aside>
		</>
	);
}

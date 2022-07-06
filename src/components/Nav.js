import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavBar } from './UI/NavBar.styled';
import TheSVG from './SVG';

export default function Nav() {
	const { pathname } = useRouter();

	return (
		<NavBar>
			{pathname === '/' ? null : (
				<Link type="button " href="/">
					<a>
						<TheSVG variant="home" color="white" aria-label="home button" />
					</a>
				</Link>
			)}
			{pathname === '/profile/my-contact' ? null : (
				<Link type="button" href="/profile/my-contact">
					<a>
						<TheSVG variant="myContact" color="white" aria-label="my contact button" />
					</a>
				</Link>
			)}
			{pathname === '/add-contact' ? null : (
				<Link type="button" href="/add-contact">
					<a>
						<TheSVG
							variant="addContact"
							color="white"
							aria-label="add contact button"
						/>
					</a>
				</Link>
			)}

			{pathname === '/contact-list' ? null : (
				<Link type="button" href="/contact-list">
					<a>
						<TheSVG
							variant="contactList"
							color="white"
							aria-label="contact list button"
						/>
					</a>
				</Link>
			)}
		</NavBar>
	);
}

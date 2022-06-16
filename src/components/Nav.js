import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavBar } from './UI/NavBar.styled';
import { NavA } from './UI/NavA.styled';

export default function Nav() {
	const { pathname } = useRouter();

	return (
		<NavBar>
			{pathname === '/' ? null : (
				<Link href="/">
					<NavA type="button">Home</NavA>
				</Link>
			)}
			{pathname === '/profile/my-contact' ? null : (
				<Link href="/profile/my-contact">
					<NavA type="button">My Contact</NavA>
				</Link>
			)}
			{pathname === '/add-contact' ? null : (
				<Link href="/add-contact">
					<NavA type="button">Add contact</NavA>
				</Link>
			)}

			{pathname === '/contact-list' ? null : (
				<Link type="button" href="/contact-list">
					<NavA type="button">Contact list</NavA>
				</Link>
			)}
		</NavBar>
	);
}

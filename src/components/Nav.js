import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
	const { pathname } = useRouter();

	return (
		<>
			{pathname === '/profile/my-contact' ? null : (
				<Link type="button" href="/profile/my-contact">
					<a type="button">My Contact</a>
				</Link>
			)}
			{pathname === '/add-contact' ? null : (
				<Link type="button" href="/add-contact">
					<a type="button">Add contact</a>
				</Link>
			)}
			{pathname === '/contact-list' ? null : (
				<Link type="button" href="/contact-list">
					<a type="button">Contact list</a>
				</Link>
			)}
		</>
	);
}

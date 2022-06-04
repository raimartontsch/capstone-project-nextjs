import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<Link type="button" href="/profile/my-contact">
				<a type="button">My Contact</a>
			</Link>
			<Link type="button" href="/add-contact">
				<a type="button">Add contact</a>
			</Link>
			<Link type="button" href="/contact-list">
				<a type="button">Contact list</a>
			</Link>
		</>
	);
}

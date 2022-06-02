import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<Link type="button" href="/add-contact">
				<button type="button">Add contact</button>
			</Link>
			<Link type="button" href="/contact-list">
				<button type="button">Contact list</button>
			</Link>
		</>
	);
}

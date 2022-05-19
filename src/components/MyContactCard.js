export default function MyContactCard(contact) {
	return (
		<div key={contact.id}>
			<h2>
				{contact.firstName} {contact.lastName}
			</h2>
			<p>{contact.job}</p>
			<p>{contact.company}</p>
			<p>{contact.email}</p>
			<p>{contact.phone}</p>
			<p>{contact.website}</p>
		</div>
	);
}

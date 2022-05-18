import useStore from './Store';

export default function SingelContactCard() {
	const myContact = useStore(state => state.myContact);
	return (
		<section>
			{myContact.map(contact => {
				return (
					<section key={contact.id}>
						<h2>
							{contact.firstName} {contact.lastName}
						</h2>
						<p>{contact.job}</p>
						<p>{contact.company}</p>
						<p>{contact.email}</p>
						<p>{contact.phone}</p>
						<p>{contact.website}</p>
					</section>
				);
			})}
		</section>
	);
}

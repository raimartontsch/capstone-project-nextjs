import useStore from './Store';

export default function SingleContactCard(contact) {
	const deleteContact = useStore(state => state.deleteContact);

	return (
		<li key={contact.id}>
			<h2>
				{contact.firstName} {contact.lastName}
			</h2>
			<p>{contact.job}</p>
			<p>{contact.company}</p>
			<p>{contact.email}</p>
			<p>{contact.phone}</p>
			<p>{contact.website}</p>
			<button
				type="button"
				onClick={() => {
					deleteContact(contact.id);
				}}
			>
				Delete{' '}
			</button>
		</li>
	);
}

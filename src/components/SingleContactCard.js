import MyContactDetailForm from './MyContactDetailForm';
import useStore from './Store';

export default function SingleContactCard(contact) {
	const deleteContact = useStore(state => state.deleteContact);
	const editContact = useStore(state => state.editContact);

	return (
		<>
			{contact.edit ? (
				<MyContactDetailForm id={contact.id} />
			) : (
				<li key={contact.id} id={contact.id}>
					<h2>
						{contact.firstName} {contact.lastName}
					</h2>
					<p>{contact.job}</p>
					<p>{contact.company}</p>
					<p>{contact.email}</p>
					<p>{contact.phone}</p>
					<p>{contact.website}</p>
				</li>
			)}

			<button
				type="button"
				onClick={() => {
					deleteContact(contact.id);
				}}
			>
				Delete
			</button>
			<button
				type="button"
				onClick={() => {
					editContact(contact.id);
				}}
			>
				{contact.edit ? 'Save' : 'Edit'}
			</button>
		</>
	);
}

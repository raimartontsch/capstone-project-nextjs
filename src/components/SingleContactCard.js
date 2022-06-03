import MyContactDetailForm from './MyContactDetailForm';
import useStore from './Store';
import Link from 'next/link';

export default function SingleContactCard({
	id,
	firstName,
	lastName,
	job,
	company,
	email,
	phone,
	website,
	edit,
}) {
	const deleteContact = useStore(state => state.deleteContact);
	const editContact = useStore(state => state.editContact);
	const myContacts = useStore(state => state.myContacts);

	return (
		<>
			{edit ? (
				<MyContactDetailForm id={id} />
			) : (
				<li key={id} id={id}>
					{myContacts[0].id === id ? (
						<Link
							href={{
								pathname: '/profile/my-contact',
								query: {
									id: id,
								},
							}}
						>
							<h2>
								{firstName} {lastName}
							</h2>
						</Link>
					) : (
						<Link
							href={{
								pathname: '/profile/[id]',
								query: {
									id: id,
								},
							}}
						>
							<h2>
								{firstName} {lastName}
							</h2>
						</Link>
					)}
					<p>{job}</p>
					<p>{company}</p>
					<p>{email}</p>
					<p>{phone}</p>
					<p>{website}</p>
				</li>
			)}

			{myContacts[0].id === id ? null : (
				<button
					type="button"
					onClick={() => {
						deleteContact(id);
					}}
				>
					Delete
				</button>
			)}

			{!edit ? (
				<button
					type="button"
					onClick={() => {
						editContact(id);
					}}
				>
					Edit
				</button>
			) : null}
		</>
	);
}

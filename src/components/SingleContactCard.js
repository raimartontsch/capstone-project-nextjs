import MyContactDetailForm from './MyContactDetailForm';
import useStore from './Store';

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

	return (
		<>
			{edit ? (
				<MyContactDetailForm id={id} />
			) : (
				<li key={id} id={id}>
					<h2>
						{firstName} {lastName}
					</h2>
					<p>{job}</p>
					<p>{company}</p>
					<p>{email}</p>
					<p>{phone}</p>
					<p>{website}</p>
				</li>
			)}

			<button
				type="button"
				onClick={() => {
					deleteContact(id);
				}}
			>
				Delete
			</button>
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

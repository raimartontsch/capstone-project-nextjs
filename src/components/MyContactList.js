import MyContactCard from './MyContactCard';
import useStore from './Store';

export default function MyContactList() {
	const myContact = useStore(state => state.myContact);

	return myContact.map(contact => {
		return (
			<MyContactCard
				key={contact.id}
				firstName={contact.firstName}
				lastName={contact.lastName}
				job={contact.job}
				company={contact.company}
				email={contact.email}
				phone={contact.phone}
				website={contact.website}
			/>
		);
	});
}

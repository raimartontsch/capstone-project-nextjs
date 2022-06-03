import dynamic from 'next/dynamic';
import Footer from '../../src/components/Footer';
import useStore from '../../src/components/Store';

export default function MyContact() {
	const myContacts = useStore(state => state.myContacts[0]);
	const SingleContactCard = dynamic(() => import('../../src/components/SingleContactCard'), {
		ssr: false, // This line important.
	});
	//const myProfile = myContacts.filter(contact => contact.id === contact[0].id);

	return (
		<>
			<SingleContactCard
				key={myContacts?.id}
				id={myContacts?.id}
				firstName={myContacts?.firstName}
				lastName={myContacts?.lastName}
				job={myContacts?.job}
				company={myContacts?.company}
				email={myContacts?.email}
				phone={myContacts?.phone}
				website={myContacts?.website}
				edit={myContacts?.edit}
			/>
			<Footer />
		</>
	);
}

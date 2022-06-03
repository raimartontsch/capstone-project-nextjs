import { useRouter } from 'next/router';
import useStore from '../../src/components/Store';

export default function Profile() {
	const router = useRouter();
	const profileID = router.query;
	const myContacts = useStore(state => state.myContacts);
	const profile = myContacts.filter(contact => contact.id === profileID.id);

	return (
		<>
			<h2>
				{profile[0]?.firstName} {profile[0]?.lastName}
			</h2>
			<p>{profile[0]?.job}</p>
			<p>{profile[0]?.company}</p>
			<p>{profile[0]?.phone}</p>
			<p>{profile[0]?.email}</p>
			<p>{profile[0]?.website}</p>
		</>
	);
}

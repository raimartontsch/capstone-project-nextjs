import { useRouter } from 'next/router';
import useStore from '../../src/components/Store';
import dynamic from 'next/dynamic';

//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const QRCodeGenerator = dynamic(() => import('../../src/components/QRCodeGenerator'), {
	ssr: false, // This line important.
});

export default function Profile() {
	const { query } = useRouter();
	const myContacts = useStore(state => state.myContacts);
	const profile = myContacts.filter(contact => contact.id === query.id);

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

			<QRCodeGenerator />
		</>
	);
}

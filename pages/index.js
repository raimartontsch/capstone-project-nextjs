import Footer from '../src/components/Footer';
import MyContactDetailForm from '../src/components/MyContactDetailForm';

import dynamic from 'next/dynamic';
//import CardGrid from '../src/components/CardGrid/CardGrid';

export default function Home() {
	//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
	const MyContactList = dynamic(() => import('../src/components/MyContactList'), {
		ssr: false, // This line important.
	});
	return (
		<>
			<h1>B/Hub</h1>
			<hr />
			<MyContactDetailForm />
			<hr />
			<MyContactList />
			<hr />
			<Footer />
		</>
	);
}

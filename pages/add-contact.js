import dynamic from 'next/dynamic';

//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const MyContactDetailForm = dynamic(() => import('../src/components/Form/MyContactDetailForm'), {
	ssr: false, // This line important.
});

export default function addContactPage() {
	return <MyContactDetailForm />;
}

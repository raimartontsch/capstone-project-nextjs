import dynamic from 'next/dynamic';

//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const ContactList = dynamic(() => import('../src/components/MyContactList'), {
	ssr: false, // This line important.
});

export default function contactListPage() {
	return <ContactList />;
}

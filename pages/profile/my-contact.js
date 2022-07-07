import dynamic from 'next/dynamic';
import useStore from '../../src/components/Store';
import { Card } from '../../src/components/UI/Card/Card.styled';
import { CardContainer } from '../../src/components/UI/Card/CardContainer.styled';
import { QRWrapper } from '../../src/components/UI/Card/QRWrapper.styled';
import { Container } from '../../src/components/UI/Container.styled';

//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const QRCodeGenerator = dynamic(() => import('../../src/components/QRCodeGenerator'), {
	ssr: false, // This line important.
});
const SingleContactCard = dynamic(() => import('../../src/components/Card/SingleContactCard'), {
	ssr: false, // This line important.
});
//const myProfile = myContacts.filter(contact => contact.id === contact[0].id);

export default function MyContact() {
	const myContacts = useStore(state => state.myContacts[0]);

	return (
		<Container>
			<CardContainer>
				<Card>
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
				</Card>
				<QRWrapper>
					<QRCodeGenerator />
				</QRWrapper>
			</CardContainer>
		</Container>
	);
}

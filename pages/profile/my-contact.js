import dynamic from 'next/dynamic';
import useStore from '../../src/components/Store';
import { CardContainer } from '../../src/components/UI/Card/CardContainer.styled';
import { QRWrapper } from '../../src/components/UI/Card/QRWrapper.styled';
import { Container } from '../../src/components/UI/Container.styled';
import { ListStyle } from '../../src/components/UI/List.styled';

//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const QRCodeGenerator = dynamic(() => import('../../src/components/QRCodeGenerator'), {
	ssr: false, // This line important.
});
const SingleContactCard = dynamic(() => import('../../src/components/SingleContactCard'), {
	ssr: false, // This line important.
});
//const myProfile = myContacts.filter(contact => contact.id === contact[0].id);

export default function MyContact() {
	const myContacts = useStore(state => state.myContacts[0]);

	return (
		<Container>
			<CardContainer>
				<ListStyle>
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
				</ListStyle>
				<QRWrapper>
					<QRCodeGenerator />
				</QRWrapper>
			</CardContainer>
		</Container>
	);
}

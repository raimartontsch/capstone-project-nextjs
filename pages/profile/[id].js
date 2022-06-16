import { useRouter } from 'next/router';
import useStore from '../../src/components/Store';
import dynamic from 'next/dynamic';
import { CardContainer } from '../../src/components/UI/Card/CardContainer.styled';
import { QRWrapper } from '../../src/components/UI/Card/QRWrapper.styled';
import SingleContactCard from '../../src/components/SingleContactCard';
import { Container } from '../../src/components/UI/Container.styled';

//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const QRCodeGenerator = dynamic(() => import('../../src/components/QRCodeGenerator'), {
	ssr: false, // This line important.
});

export default function Profile() {
	const { query } = useRouter();
	const myContacts = useStore(state => state.myContacts);
	const profile = myContacts.filter(contact => contact.id === query.id);

	return (
		<Container>
			<CardContainer>
				<SingleContactCard
					key={profile[0]?.id}
					id={profile[0]?.id}
					firstName={profile[0]?.firstName}
					lastName={profile[0]?.lastName}
					job={profile[0]?.job}
					company={profile[0]?.company}
					email={profile[0]?.email}
					phone={profile[0]?.phone}
					website={profile[0]?.website}
					edit={profile[0]?.edit}
				/>
				<QRWrapper>
					<QRCodeGenerator />
				</QRWrapper>
			</CardContainer>
		</Container>
	);
}

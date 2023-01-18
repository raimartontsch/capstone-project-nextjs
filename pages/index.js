import Cu from '../public/Cu';
import { SiteContainer } from '../src/components/UI/SiteContainer.styled';

export default function Home() {
	return (
		<SiteContainer>
			<Cu />
			<p>C.U.</p>
		</SiteContainer>
	);
}

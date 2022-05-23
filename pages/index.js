import Footer from '../src/components/Footer';
import MyContactDetailForm from '../src/components/MyContactDetailForm';
import MyContactList from '../src/components/MyContactList';
import SingleContactCard from '../src/components/SingleContactCard';

export default function Home() {
	return (
		<>
			<div>Home</div>
			<MyContactDetailForm />
			<MyContactList />
			<SingleContactCard />
			<Footer />
		</>
	);
}

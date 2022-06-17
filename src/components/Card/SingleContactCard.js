import MyContactDetailForm from '../Form/MyContactDetailForm';
import useStore from '../Store';
import Link from 'next/link';
import { ListItem } from '../UI/List.Item.styled';
import { DeleteButton } from '../UI/Button/DeleteButton.styled';
import { EditButton } from '../UI/Button/EditButton.styled';
import { Card } from '../UI/Card/Card.styled';
import { CallMailContainer } from '../UI/CallMailContainer.styled';
import { NavA } from '../UI/NavA.styled';
import { ButtonBox } from '../UI/Button/ButtonBox.styled';

export default function SingleContactCard({
	id,
	firstName,
	lastName,
	job,
	company,
	email,
	phone,
	website,
	edit,
}) {
	const deleteContact = useStore(state => state.deleteContact);
	const editContact = useStore(state => state.editContact);
	const myContacts = useStore(state => state.myContacts);

	return (
		<Card>
			{edit ? (
				<MyContactDetailForm id={id} />
			) : (
				<ListItem key={id} id={id}>
					{myContacts[0].id === id ? (
						<Link
							href={{
								pathname: '/profile/my-contact',
								query: {
									id: id,
								},
							}}
						>
							<h2>
								{firstName} {lastName}
							</h2>
						</Link>
					) : (
						<Link
							href={{
								pathname: '/profile/[id]',
								query: {
									id: id,
								},
							}}
						>
							<h2>
								{firstName} {lastName}
							</h2>
						</Link>
					)}
					<p>{job}</p>
					<p>{company}</p>
					<CallMailContainer>
						<Link href={`tel:${phone}`}>
							<NavA>{phone}</NavA>
						</Link>
						<Link href={`mailto:${email}`}>
							<NavA>{email}</NavA>
						</Link>
					</CallMailContainer>
					<p>{website}</p>
					<ButtonBox>
						{myContacts[0].id === id ? null : (
							<DeleteButton
								type="button"
								onClick={() => {
									deleteContact(id);
								}}
							>
								Delete
							</DeleteButton>
						)}
						{!edit ? (
							<EditButton
								type="button"
								onClick={() => {
									editContact(id);
								}}
							>
								Edit
							</EditButton>
						) : null}{' '}
					</ButtonBox>
				</ListItem>
			)}
		</Card>
	);
}

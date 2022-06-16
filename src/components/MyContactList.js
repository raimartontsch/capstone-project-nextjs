import React from 'react';
import useStore from './Store';
import SingleContactCard from './SingleContactCard';
import { Container } from './UI/Container.styled';
import { ListStyle } from './UI/List.styled';
import { Headline } from './UI/Headline.styled';

export default function ContactList() {
	const myContacts = useStore(state => state.myContacts);

	return (
		<Container>
			<Headline>Contact List</Headline>
			<ListStyle>
				{myContacts[0] && (
					<SingleContactCard
						key={myContacts[0].id}
						id={myContacts[0].id}
						firstName={myContacts[0].firstName}
						lastName={myContacts[0].lastName}
						job={myContacts[0].job}
						company={myContacts[0].company}
						email={myContacts[0].email}
						phone={myContacts[0].phone}
						website={myContacts[0].website}
						edit={myContacts[0].edit}
					/>
				)}

				<hr />

				{myContacts.slice(1).map(contact => {
					return (
						<SingleContactCard
							key={contact.id}
							id={contact.id}
							firstName={contact.firstName}
							lastName={contact.lastName}
							job={contact.job}
							company={contact.company}
							email={contact.email}
							phone={contact.phone}
							website={contact.website}
							edit={contact.edit}
						/>
					);
				})}
			</ListStyle>
		</Container>
	);
}

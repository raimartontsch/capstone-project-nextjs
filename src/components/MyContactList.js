import useStore from './Store';
import React from 'react';
import SingleContactCard from './SingleContactCard';

export default function ContactList() {
	const myContacts = useStore(state => state.myContacts);

	return (
		<>
			<h1>Contact List</h1>
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
			<ol>
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
			</ol>
		</>
	);
}

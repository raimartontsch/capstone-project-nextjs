import MyContactCard from './MyContactCard';
import useStore from './Store';
import React from 'react';

export default function ContactList() {
	const myContact = useStore(state => state.myContact);

	return (
		<ol>
			{myContact.map(contact => {
				return (
					<MyContactCard
						key={contact.id}
						firstName={contact.firstName}
						lastName={contact.lastName}
						job={contact.job}
						company={contact.company}
						email={contact.email}
						phone={contact.phone}
						website={contact.website}
					/>
				);
			})}
		</ol>
	);
}

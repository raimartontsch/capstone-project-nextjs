import useStore from './Store';
import React from 'react';
import SingleContactCard from './SingleContactCard';

export default function ContactList() {
	const myContact = useStore(state => state.myContact);

	return (
		<>
			<h1>Contact List</h1>
			<ol>
				{myContact.map(contact => {
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
						/>
					);
				})}
			</ol>
		</>
	);
}

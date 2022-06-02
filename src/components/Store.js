import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(
		set => ({
			myContacts: [],
			addMyContact: contact =>
				set(state => ({
					myContacts: [
						...state.myContacts,
						{
							id: nanoid(),
							firstName: contact.firstName,
							lastName: contact.lastName,
							job: contact.job,
							company: contact.company,
							phone: contact.phone,
							email: contact.email,
							website: contact.website,
							edit: false,
						},
					],
				})),

			deleteContact: id =>
				set(state => ({
					myContacts: state.myContacts.filter(contact => contact.id !== id),
				})),

			editContact: id =>
				set(state => {
					return {
						myContacts: state.myContacts.map(myContact => {
							if (myContact.id === id) {
								return {
									...myContact,
									edit: true,
								};
							} else {
								return myContact;
							}
						}),
					};
				}),

			saveContact: (id, contact) => {
				set(state => {
					return {
						myContacts: state.myContacts.map(myContact =>
							myContact.id === id
								? {
										...myContact,
										...contact,
										edit: false,
								  }
								: myContact
						),
					};
				});
			},
			id: [],
			setId: id => {
				set(() => {
					return { id: id };
				});
			},
		}),
		{ name: 'B/Hub' }
	)
);

export default useStore;

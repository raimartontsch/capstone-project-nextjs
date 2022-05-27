import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(
		set => ({
			modal: false,
			showEdit: () => {
				set({ modal: true });
			},
			hideEdit: () => {
				set({ modal: false });
			},
			myContact: [],
			addMyContact: contact =>
				set(state => ({
					myContact: [
						...state.myContact,
						{
							id: nanoid(),
							firstName: contact.firstName,
							lastName: contact.lastName,
							job: contact.job,
							company: contact.company,
							phone: contact.phone,
							email: contact.email,
							website: contact.website,
						},
					],
				})),

			deleteContact: id =>
				set(state => ({
					myContact: state.myContact.filter(contact => contact.id !== id),
				})),

			editContact: id =>
				set(state => {
					return {
						myContact: state.myContact.map(updateContact => {
							if (updateContact.id === id) {
								return {
									...updateContact,
									edit: !updateContact.edit,
								};
							} else {
								return updateContact;
							}
						}),
					};
				}),

			controlEditContact: (id, data) => {
				set(state => {
					return {
						myContact: state.myContact.map(updateContact =>
							updateContact.id === id
								? {
										...updateContact,
										...data,
								  }
								: updateContact
						),
					};
				});
			},
		}),
		{ name: 'B/Hub' }
	)
);

export default useStore;

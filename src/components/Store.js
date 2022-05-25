import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(
		set => ({
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
		}),
		{ name: 'B/Hub' }
	)
);

export default useStore;

import useStore from './Store';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export default function MyContactDetailForm({ id }) {
	const myContacts = useStore(state => state.myContacts);
	const addMyContact = useStore(state => state.addMyContact);
	const editContact = useStore(state => state.editContact);
	const controlEditContact = useStore(state => state.controlEditContact);
	const contactToUpdate = myContacts.find(contact => contact.id === id);

	const { register, handleSubmit, reset, setValue } = useForm();

	useEffect(() => {
		if (contactToUpdate) {
			setValue('firstName', contactToUpdate.firstName);
			setValue('lastName', contactToUpdate.lastName);
			setValue('job', contactToUpdate.job);
			setValue('company', contactToUpdate.company);
			setValue('phone', contactToUpdate.phone);
			setValue('email', contactToUpdate.email);
			setValue('website', contactToUpdate.website);
			setValue('edit', contactToUpdate.edit);
		}
	}, [contactToUpdate, setValue]);

	const onSubmit = data => {
		if (contactToUpdate) {
			editContact(id);
			controlEditContact(id, data);
		} else {
			addMyContact(data);
			reset();
		}
	};

	return (
		<>
			<h1>Edit Contact</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					name="firstName"
					type="text"
					placeholder="First name"
					{...register('firstName', { required: true })}
				/>
				<input
					name="lastName"
					type="text"
					placeholder="Last name"
					{...register('lastName', { required: true })}
				/>
				<input
					name="job"
					type="text"
					placeholder="Job/Position"
					{...register('job', { required: true })}
				/>
				<input
					{...register('company', { required: true })}
					name="company"
					type="text"
					placeholder="Company"
				/>
				<input
					{...register('phone', { required: true })}
					name="phone"
					type="tel"
					placeholder="Phone number"
				/>
				<input
					{...register('email', { required: true })}
					name="email"
					type="email"
					placeholder="E-mail address"
				/>
				<input
					{...register('website', { required: true })}
					name="website"
					type="url"
					placeholder="Website url"
				/>
				<button type="submit">+</button>
			</form>

			<hr />
		</>
	);
}

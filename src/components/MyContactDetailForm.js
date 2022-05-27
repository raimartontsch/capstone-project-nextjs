import useStore from './Store';
import { useForm } from 'react-hook-form';

export default function MyContactDetailForm() {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = contact => {
		addMyContact(contact);
		reset();
	};

	const addMyContact = useStore(state => state.addMyContact);

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
				<button type="submit">Submit</button>
			</form>
			<hr />
		</>
	);
}

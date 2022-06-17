import useStore from '../Store';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Wrapper } from '../UI/Wrapper.styled';
import { FormStyle } from '../UI/Form/FormStyle.styled';
import { LabelStyle } from '../UI/Form/Label.styled';
import { Input } from '../UI/Form/Input.styled';
import { FormContainer } from '../UI/Form/Form.Container.styled';
import { DeleteButton } from '../UI/Button/DeleteButton.styled';

export default function MyContactDetailForm({ id }) {
	const myContacts = useStore(state => state.myContacts);
	const addMyContact = useStore(state => state.addMyContact);
	const saveContact = useStore(state => state.saveContact);
	const contactToUpdate = myContacts.find(contact => contact.id === id);

	const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

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
			saveContact(id, data);
		} else {
			addMyContact(data);
			reset();
		}
	};

	return (
		<FormContainer>
			<h1>Edit Contact</h1>
			<Wrapper>
				<FormStyle onSubmit={handleSubmit(onSubmit)}>
				<LabelStyle>First name</LabelStyle>
					<Input
						name="firstName"
						type="text"
						{...register('firstName', { required: true, pattern: /\S(.*\S)?/ })}					
					/>

					<LabelStyle>Last name</LabelStyle>
				
					<Input
						name="lastName"
						type="text"
						{...register('lastName', { required: true, pattern: /\S(.*\S)?/ })}
					/>
					<LabelStyle>Job/Position</LabelStyle>
					<Input
						name="job"
						type="text"
						{...register('job', { required: true, pattern: /\S(.*\S)?/ })}
					/>
					<LabelStyle>Company</LabelStyle>
					<Input
						{...register('company', { required: true, pattern: /\S(.*\S)?/ })}
						name="company"
						type="text"
					/>
					<LabelStyle>Phone</LabelStyle>
					<Input
						{...register('phone', { required: true, valueAsNumber: true, minLength: 6, maxLength: 12, pattern:/[+-]?\d+(?:[.,]\d+)?/})}
						name="phone"
						type="number"
					/>
					<LabelStyle>E-mail</LabelStyle>
					<Input
						{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
						name="email"
					/>
					<LabelStyle>Website</LabelStyle>
					<Input
						{...register('website', { required: true, pattern: /\S(.*\S)?/ })}
						name="website"
						type="url"
					/>
					
					<DeleteButton type="submit">{contactToUpdate ? 'Save' : '+'}</DeleteButton>
				</FormStyle>
			</Wrapper>
		</FormContainer>
	);
}

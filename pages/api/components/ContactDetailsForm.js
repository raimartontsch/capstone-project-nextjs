import { useState } from 'react';

export default function ContactForm() {
	const [firstNameInputValue, setFirstNameInputValue] = useState('');
	// const [firstName, setFirstName] = useState("");

	const handleSubmit = event => {
		event.preventDefault();
		const testing = { firstNameInputValue };

		console.log(testing);
	};

	return (
		<form>
			<input
				label="firstName"
				placeholder="First name"
				type="text"
				value={firstNameInputValue}
				onChange={event => {
					setFirstNameInputValue(event.target.value);
				}}
			/>
			<button type="submit" onClick={handleSubmit} />
			<p>{firstNameInputValue}</p>
		</form>
	);
}

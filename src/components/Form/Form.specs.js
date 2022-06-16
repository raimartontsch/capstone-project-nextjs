import { render, screen } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom';

describe('Form', () => {
	it('render seven input fields on contact details', () => {
		render(<Form />);

		const firstName = screen.getByLabelText(/First name:/i);
		const lastName = screen.getByLabelText(/Last name:/i);
		const job = screen.getByLabelText(/Job:/i);
		const company = screen.getByLabelText(/Company:/i);
		const phone = screen.getByLabelText(/Phone:/i);
		const email = screen.getByLabelText(/E-mail:/i);
		const website = screen.getByLabelText(/Website:/i);
	

		expect(firstName).toBeInTheDocument();
		expect(lastName).toBeInTheDocument();
		expect(job).toBeInTheDocument();
		expect(company).toBeInTheDocument();
		expect(phone).toBeInTheDocument();
		expect(email).toBeInTheDocument();
		expect(website).toBeInTheDocument();
	});
});
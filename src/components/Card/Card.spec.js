import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@storybook/testing-library';
import SingleContactCard from './SingleContactCard';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			route: '/profile/[id]',
			pathname: '',
			query: '',
			asPath: '/profile/[id]',
		};
	},
}));

describe('ReviewCard', () => {
	it('renders 8 strings and an image', () => {
		render(
			<SingleContactCard
				id="9999"
				firstName="Herbert"
				lastName="Fuller"
				job="Automechaniker"
				company="Auti"
				phone="0161/89236776"
				email="fuller@auti.com"
				website="http://beispielURL.de"
				edit="false"
			/>
		);

		const firstName = screen.getByText(/Herbert/i);
		const lastName = screen.getByText(/Fuller/i);
		const job = screen.getByText(/Automechaniker/i);
		const company = screen.getByText(/Auti/i);
		const phone = screen.getByText(/016189236776/i);
		const email = screen.getByText(/fuller@auti.com/i);
		const image = screen.getByAltText(/QR code/i);

		const button = screen.getByRole('button', { name: /Delete/i }, { name: /Edit/i });
		userEvent.click(button);

		expect(firstName).toBeInTheDocument();
		expect(lastName).toBeInTheDocument();
		expect(job).toBeInTheDocument();
		expect(company).toBeInTheDocument();
		expect(phone).toBeInTheDocument();
		expect(email).toBeInTheDocument();
		expect(image).toBeInTheDocument();
	});
});

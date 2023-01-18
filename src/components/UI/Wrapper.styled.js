import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 1em;
	width: 90%;
	height: 80%;
	padding: 0.5em;

	@media (max-width: 550px) {
		width: 100%;
		height: 100%;
	}
`;

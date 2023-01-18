import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html {
	font-size: 62.5%;
}
body {
	padding: 0;
	margin: 0;
	font-family: Arimo, sans-serif;
	font-size: 1.6rem;

	}
	*{
		box-sizing: border-box;
	}
	:root {
		--primary-color: #57c3ef;
		--secondary-color: #1ba098:;
		--tertiary-color:#efc1e5:
		
	}
	
`;

export default GlobalStyle;

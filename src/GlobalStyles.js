import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html {
	font-size: 62.5%;
}
body {
	padding: 0;
	margin: 0;
	font-family: 'Hind', sans-serif;
	font-size: 1.6rem;
	background: #eaf7fd;

	}
	*{
		box-sizing: border-box
	}
	:root {
		--primary-color: #57c3ef;
		--secondary-color: #eeeeee:;
		--tertiary-color:#efc1e5:
		
	}
	
`;

export default GlobalStyle;

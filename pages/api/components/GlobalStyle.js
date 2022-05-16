import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%;
	font-family: -apple-system, sans-serif;
  }
  
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  
  body {  
    background-color: #E2CADF;
    font-size: 1.5rem;
  }
`;

export default GlobalStyle;

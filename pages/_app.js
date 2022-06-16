import React from 'react';
import GlobalStyle from '../src/GlobalStyles';
import Layout from '../src/components/Layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;

import React from 'react';
import Layout from '../src/components/Layout/Layout';
import Home from '.';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />{' '}
			<Layout>
				<Home />
			</Layout>
		</>
	);
}

export default MyApp;

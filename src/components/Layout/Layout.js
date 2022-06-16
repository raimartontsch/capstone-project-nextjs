import React from 'react';
import Nav from '../Nav';

export default function Layout({ children }) {
	return (
		<>
			<main>{children}</main>
			<Nav />
		</>
	);
}

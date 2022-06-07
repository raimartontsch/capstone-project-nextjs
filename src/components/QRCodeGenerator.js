import { useRouter } from 'next/router';
import QRCode from 'qrcode';
import { useEffect, useState, useCallback } from 'react';

export default function QRCodeIMG() {
	const { asPath } = useRouter();
	const [qr, setQR] = useState('');

	const generateQR = useCallback(async text => {
		try {
			console.log(await QRCode.toDataURL(text));
			const data = await QRCode.toDataURL(text);
			setQR(data);
		} catch (err) {
			console.error(err);
		}
	}, []);

	useEffect(() => {
		const wholePath = 'https://capstone-project-nextjs.vercel.app/' + asPath;
		console.log(wholePath);
		generateQR(wholePath);
	}, [asPath, generateQR]);

	return <img id="image" alt="QR code" src={qr} />;
	//img tag neccassry as qrcode library does not work with next/image
}

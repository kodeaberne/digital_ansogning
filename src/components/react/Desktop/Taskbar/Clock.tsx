import { useEffect, useState } from 'react';

function Clock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	}, []);

	return (
		<div
			className="w-25 h-full font-windows text-2xl cursor-pointer text-center border-3 border-windows-white p-2 ml-1 mr-1"
			style={{ borderStyle: 'inset' }}
		>
			{time.toLocaleTimeString('da-DK')}
		</div>
	);
}

export default Clock;

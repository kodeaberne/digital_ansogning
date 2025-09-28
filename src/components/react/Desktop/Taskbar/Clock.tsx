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
			className="w-27 h-full font-windows text-xl cursor-pointer text-center border-3 border-windows-white p-3 ml-1 mr-1 flex items-center justify-center"
			style={{ borderStyle: 'inset' }}
		>
			{time.toLocaleTimeString('da-DK')}
		</div>
	);
}

export default Clock;

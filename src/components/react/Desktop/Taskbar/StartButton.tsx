function StartButton() {
	return (
		<button
			className="w-35 h-full bg-windows-grey font-cmd text-3xl cursor-pointer text-center border-3 border-windows-white p-2 hover:border-windows-lightgrey flex items-center justify-center gap-2"
			style={{ borderStyle: 'outset' }}
			onMouseEnter={(e) => (e.target.style.borderStyle = 'inset')}
			onMouseLeave={(e) => (e.target.style.borderStyle = 'outset')}
		>
			<img src="./icons/start.png" alt="Start" className="w-10 h-10" />
			Start
		</button>
	);
}

export default StartButton;

import Window from '../Desktop/Window';

function AboutMe({
	activeIndex,
	focusIndex,
	index,
	// onClick,
	onMouseDown,
	onClose,
	onPositionChange,
	posX,
	posY,
}: {
	activeIndex: number[];
	focusIndex: number;
	index: number;
	onMouseDown: () => void;
	// onClick: () => void;
	onClose: () => void;
	onPositionChange: (x: number, y: number) => void;
	posX: number;
	posY: number;
}) {
	return (
		<Window
			title="AboutMe.exe"
			icon="./icons/about.png"
			content="about"
			sizeX={400}
			sizeY={690}
			posX={posX}
			posY={posY}
			focused={focusIndex === index}
			active={activeIndex.includes(index)}
			onMouseDown={onMouseDown}
			// onClick={onClick}
			onClose={onClose}
			onPositionChange={onPositionChange}
		/>
	);
}

export default AboutMe;

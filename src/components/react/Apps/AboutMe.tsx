import Window from '../Desktop/Window';

function AboutMe({
	activeIndex,
	focusIndex,
	index,
	onClick,
	onClose,
}: {
	activeIndex: number[];
	focusIndex: number;
	index: number;
	onClick: () => void;
	onClose: () => void;
}) {
	return (
		<Window
			title="AboutMe.exe"
			icon="./icons/about.png"
			content="about"
			sizeX={400}
			sizeY={650}
			posX={65}
			posY={10}
			focused={focusIndex === index}
			active={activeIndex.includes(index)}
			onClick={onClick}
			onClose={onClose}
		/>
	);
}

export default AboutMe;

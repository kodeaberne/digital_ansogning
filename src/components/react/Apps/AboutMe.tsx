import Window from '../Desktop/Window';

function AboutMe({
	focusIndex,
	index,
	onClick,
}: {
	focusIndex: number;
	index: number;
	onClick: () => void;
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
			onClick={onClick}
		/>
	);
}

export default AboutMe;

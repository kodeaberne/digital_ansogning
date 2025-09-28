import Window from '../Desktop/Window';

export default function Welcome({
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
			title="MS-DOS Prompt"
			icon="./icons/dos.png"
			content="welcome"
			sizeX={700}
			sizeY={350}
			posX={5}
			posY={5}
			focused={focusIndex === index}
			onClick={onClick}
		/>
	);
}

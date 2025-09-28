import Window from '../Desktop/Window';

export default function Welcome({
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
			title="MS-DOS Prompt"
			icon="./icons/dos.png"
			content="welcome"
			sizeX={700}
			sizeY={350}
			posX={5}
			posY={5}
			focused={focusIndex === index}
			active={activeIndex.includes(index)}
			onClick={onClick}
			onClose={onClose}
		/>
	);
}

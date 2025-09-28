import Window from '../Desktop/Window';

export default function Welcome({
	activeIndex,
	focusIndex,
	index,
	onClick,
	onClose,
	onPositionChange,
	posX,
	posY,
}: {
	activeIndex: number[];
	focusIndex: number;
	index: number;
	onClick: () => void;
	onClose: () => void;
	onPositionChange: (x: number, y: number) => void;
	posX: number;
	posY: number;
}) {
	return (
		<Window
			title="MS-DOS Prompt"
			icon="./icons/dos.png"
			content="welcome"
			sizeX={700}
			sizeY={350}
			posX={posX}
			posY={posY}
			focused={focusIndex === index}
			active={activeIndex.includes(index)}
			onClick={onClick}
			onClose={onClose}
			onPositionChange={onPositionChange}
		/>
	);
}

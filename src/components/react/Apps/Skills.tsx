import Window from '../Desktop/Window';

export default function Skills({
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
			title="C:\My Skills"
			icon="./icons/folder.png"
			content="skills"
			sizeX={600}
			sizeY={300}
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

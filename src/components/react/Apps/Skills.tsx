import Window from '../Desktop/Window';

export default function Skills({
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
			title="C:\My Skills"
			icon="./icons/folder.png"
			content="skills"
			sizeX={600}
			sizeY={300}
			posX={7.5}
			posY={50}
			focused={focusIndex === index}
			active={activeIndex.includes(index)}
			onClick={onClick}
			onClose={onClose}
		/>
	);
}

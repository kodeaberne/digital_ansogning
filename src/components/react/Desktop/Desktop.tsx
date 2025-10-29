import AboutMe from '../Apps/AboutMe';
import Welcome from '../Apps/Welcome';
import Taskbar from './Taskbar';
import Skills from '../Apps/Skills';
import { useState } from 'react';

function Desktop() {
	const [focusIndex, setFocusIndex] = useState(0);
	const [activeIndex, setActiveIndex] = useState([0, 1, 2]);

	// Add state for window positions
	const [windowPositions, setWindowPositions] = useState({
		0: { x: 5, y: 5 }, // Welcome window
		1: { x: 65, y: 7 }, // AboutMe window
		2: { x: 7.5, y: 50 }, // Skills window
	});

	const taskbarObjects = [
		{ title: 'AboutMe.exe', icon: './icons/about.png', index: 1 },
		{ title: 'MS-DOS Prompt', icon: './icons/dos.png', index: 0 },
		{ title: 'C:\\My Skills', icon: './icons/folder.png', index: 2 },
	];

	const handleDesktopClick = () => {
		setFocusIndex(-1);
	};

	const handleIconClick = (id: number) => {
		// Check if the id already exists in activeIndex array
		if (!activeIndex.includes(id)) {
			// If it doesn't exist, add it to the array
			setActiveIndex((prev) => [...prev, id]);
			setFocusIndex(id);
		}
		// If it exists, do nothing (no action needed)
	};

	const handleWindowClick = (index: number) => {
		setFocusIndex(index);
	};

	const handleCloseWindow = (index: number) => {
		setActiveIndex((prev) => prev.filter((id) => id !== index));
	};

	// Add handler for position changes
	const handlePositionChange = (index: number, x: number, y: number) => {
		setWindowPositions((prev) => ({
			...prev,
			[index]: { x, y },
		}));
	};

	return (
		<main className="w-full h-full bg-wallpaper">
			<div className="dekstop-container w-full h-full" onClick={handleDesktopClick}>
				<div className="flex flex-col gap-5 p-5 left-5 w-40">
					<div
						id="0"
						className="icon flex flex-col items-center cursor-pointer"
						onDoubleClick={() => handleIconClick(1)}
					>
						<img src="./icons/about.png" alt="About Me" className="w-15 h-15" />
						<p className="text-windows-white font-windows">AboutMe.exe</p>
					</div>
					<div
						id="1"
						className="icon flex flex-col items-center cursor-pointer"
						onDoubleClick={() => handleIconClick(0)}
					>
						<img src="./icons/dos.png" alt="MS-DOS Prompt" className="w-15 h-15" />
						<p className="text-windows-white font-windows">Welcome Prompt</p>
					</div>
					<div
						id="2"
						className="icon flex flex-col items-center cursor-pointer"
						onDoubleClick={() => handleIconClick(2)}
					>
						<img src="./icons/folder.png" alt="Skills" className="w-15 h-15" />
						<p className="text-windows-white font-windows">My Skills</p>
					</div>
				</div>
			</div>
			<Welcome
				activeIndex={activeIndex}
				focusIndex={focusIndex}
				index={0}
				onMouseDown={() => handleWindowClick(0)}
				onClose={() => handleCloseWindow(0)}
				onPositionChange={(x, y) => handlePositionChange(0, x, y)}
				posX={windowPositions[0].x}
				posY={windowPositions[0].y}
			/>
			<AboutMe
				activeIndex={activeIndex}
				focusIndex={focusIndex}
				index={1}
				onMouseDown={() => handleWindowClick(1)}
				onClose={() => handleCloseWindow(1)}
				onPositionChange={(x, y) => handlePositionChange(1, x, y)}
				posX={windowPositions[1].x}
				posY={windowPositions[1].y}
			/>
			<Skills
				activeIndex={activeIndex}
				focusIndex={focusIndex}
				index={2}
				onMouseDown={() => handleWindowClick(2)}
				onClose={() => handleCloseWindow(2)}
				onPositionChange={(x, y) => handlePositionChange(2, x, y)}
				posX={windowPositions[2].x}
				posY={windowPositions[2].y}
			/>
			<Taskbar
				taskbarObjects={taskbarObjects}
				activeIndex={activeIndex}
				focusIndex={focusIndex}
				onClick={handleWindowClick}
			/>
		</main>
	);
}

export default Desktop;

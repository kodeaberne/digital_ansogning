import AboutMe from '../Apps/AboutMe';
import Welcome from '../Apps/Welcome';
import Taskbar from './Taskbar';
import Skills from '../Apps/Skills';
import { useState } from 'react';

function Desktop() {
	const [focusIndex, setFocusIndex] = useState(0);
	const [activeIndex, setActiveIndex] = useState([0, 1, 2]);
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
				onClick={() => handleWindowClick(0)}
				onClose={() => handleCloseWindow(0)}
			/>
			<AboutMe
				activeIndex={activeIndex}
				focusIndex={focusIndex}
				index={1}
				onClick={() => handleWindowClick(1)}
				onClose={() => handleCloseWindow(1)}
			/>
			<Skills
				activeIndex={activeIndex}
				focusIndex={focusIndex}
				index={2}
				onClick={() => handleWindowClick(2)}
				onClose={() => handleCloseWindow(2)}
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

import AboutMe from '../Apps/AboutMe';
import Welcome from '../Apps/Welcome';
import Taskbar from './Taskbar';
import Skills from '../Apps/Skills';
import { useState } from 'react';

function Desktop() {
	const [focusIndex, setFocusIndex] = useState(1);
	
	const handleWindowClick = (index: number) => {
		setFocusIndex(index);
	};
	
	return (
		<main className="w-full h-full bg-wallpaper">
			<Welcome focusIndex={focusIndex} index={0} onClick={() => handleWindowClick(0)} />
			<AboutMe focusIndex={focusIndex} index={1} onClick={() => handleWindowClick(1)} />
			<Skills focusIndex={focusIndex} index={2} onClick={() => handleWindowClick(2)} />
			<Taskbar />
		</main>
	);
}

export default Desktop;

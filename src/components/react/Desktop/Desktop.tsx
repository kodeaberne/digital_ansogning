import Test from '../Apps/Test';
import Taskbar from './Taskbar';

function Desktop() {
	return (
		<main className="w-full h-full bg-wallpaper">
			<Test />
			<Taskbar />
		</main>
	);
}

export default Desktop;

import StartButton from './Taskbar/StartButton';
import Clock from './Taskbar/Clock';

function Taskbar() {
	return (
		<div className="w-full h-[50px] bg-windows-grey bottom-0 fixed z-100 flex flex-row space-between items-center border-t-3 border-ridge border-windows-white pl-1.5 pr-1.5">
			<div id="start-button-container" className="w-25 h-[90%] items-center">
				<StartButton />
			</div>
			<div id="app-container" className="w-[calc(100%-60px)] h-[90%] items-center"></div>
			<div id="clock-container" className="w-27 h-[90%] items-center">
				<Clock />
			</div>
		</div>
	);
}

export default Taskbar;

import StartButton from './Taskbar/StartButton';
import Clock from './Taskbar/Clock';

function Taskbar({
	activeIndex,
	focusIndex,
	taskbarObjects,
	onClick,
}: {
	activeIndex: number[];
	focusIndex: number;
	taskbarObjects: { title: string; icon: string; index: number }[];
	onClick: (index: number) => void;
}) {
	// console.log(taskbarObjects);
	return (
		<div className="w-full h-[50px] bg-windows-grey bottom-0 fixed z-100 flex flex-row space-between items-center border-t-3 border-ridge border-windows-white pl-1.5 pr-1.5">
			<div id="start-button-container" className="w-25 h-[90%] items-center">
				<StartButton />
			</div>
			<div
				id="app-container"
				className="w-[calc(100%-60px)] h-[90%] items-center flex flex-row gap-2 ml-5"
			>
				{taskbarObjects.map((object) => (
					<div
						onClick={() => onClick(object.index)}
						key={object.index}
						className={`app ${activeIndex.includes(object.index) ? 'flex' : 'hidden'} flex-row items-center gap-2 p-2 w-50 h-full border-2 border-windows-white cursor-pointer`}
						style={{
							borderStyle: focusIndex === object.index ? 'inset' : 'outset',
							background:
								focusIndex === object.index
									? 'repeating-conic-gradient(#e6e6e6 0% 25%, transparent 0% 50%) 50% / 3px 3px'
									: '#c3c3c3',
						}}
						onMouseEnter={(e) => (e.target.style.borderStyle = 'inset')}
						onMouseLeave={(e) =>
							(e.target.style.borderStyle =
								focusIndex === object.index ? 'inset' : 'outset')
						}
					>
						<img src={object.icon} alt={object.title} className="w-5 h-5" />
						<p className="text-windows-black font-windows w-45">{object.title}</p>
					</div>
				))}
			</div>
			<div id="clock-container" className="w-27 h-[90%] items-center">
				<Clock />
			</div>
		</div>
	);
}

export default Taskbar;

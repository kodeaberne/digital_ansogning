import { useState } from 'react';

export default function Window({
	title,
	content,
	sizeX,
	sizeY,
	posX,
	posY,
}: {
	title: string;
	content: string;
	sizeX: number;
	sizeY: number;
	posX: number;
	posY: number;
}) {
	const [focused, setFocused] = useState(true);
	const [minimized, setMinimized] = useState(false);
	const [active, setActive] = useState(true);

	return (
		<div
			className={`window bg-windows-grey fixed border-3 border-windows-white flex flex-col ${active ? 'flex' : 'hidden'}`}
			style={{ borderStyle: 'outset', left: posX, top: posY, width: sizeX, height: sizeY }}
		>
			<div
				className={`w-full h-10 flex flex-row items-center justify-between ${focused ? 'bg-windows-blue' : 'bg-windows-darkgrey'}`}
			>
				<div className="font-windows text-white text-xl ml-2 w-[calc(100%-55px)]">{title}</div>
				<div className="window-buttons-container flex flex-row items-center gap-[5px] w-[55px] mr-1 place-self-right">
					<button onClick={() => setMinimized(!minimized)} className="minimize h-[25px] w-[25px] bg-windows-grey border-1 border-windows-lightgrey hover:border-black cursor-pointer flex flex-col items-center justify-space-around"
                    style={{ borderStyle: 'outset' }}
                    onMouseEnter={(e) => (e.target.style.borderStyle = 'inset')}
                    onMouseLeave={(e) => (e.target.style.borderStyle = 'outset')}
                    >
                        <div className="line h-[3px] w-[40%] bg-black mt-[80%]"></div>
                    </button>
					<button onClick={() => setActive(false)} className="close h-[25px] w-[25px] bg-windows-grey border-1 border-windows-lightgrey hover:border-black cursor-pointer flex flex-col items-center justify-center"
                    style={{ borderStyle: 'outset' }}
                    onMouseEnter={(e) => (e.target.style.borderStyle = 'inset')}
                    onMouseLeave={(e) => (e.target.style.borderStyle = 'outset')}
                    >
                        {/* <div className="line h-[2.5px] w-[70%] bg-black transform rotate-45 transform-origin-left ml-[1px] mt-[2px]"></div> */}
                        {/* <div className="line h-[2.5px] w-[70%] bg-black transform rotate-[-45deg] transform-origin-left ml-[1px] translate-y-[-2px]"></div> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                    </button>
				</div>
			</div>
			<div className="content w-full h-full p-2">{content}</div>
		</div>
	);
}

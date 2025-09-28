import { useState } from 'react';
import WelcomeContent from '../Apps/WelcomeContent';
import SkillsContent from '../Apps/SkillsContent';
import AboutMeContent from '../Apps/AboutMeContent';

export default function Window({
	title,
	icon,
	content,
	sizeX,
	sizeY,
	posX,
	posY,
	focused,
	onClick,
}: {
	title: string;
	icon: string;
	content: string;
	sizeX: number;
	sizeY: number;
	posX: number;
	posY: number;
	focused: boolean;
	onClick?: () => void;
}) {
	const [minimized, setMinimized] = useState(false);
	const [active, setActive] = useState(true);

	return (
		<div
			id={content + '-window'}
			className={`window bg-windows-grey absolute border-3 border-windows-white flex flex-col ${active ? 'flex' : 'hidden'} ${focused ? 'z-80' : 'z-50'}`}
			style={{
				borderStyle: 'outset',
				left: `${posX}%`,
				top: `${posY}%`,
				width: sizeX,
				height: sizeY,
			}}
			onClick={onClick}
		>
			<div
				className={`w-full h-8 flex flex-row items-center justify-between ${focused ? 'bg-windows-blue' : 'bg-windows-darkgrey'}`}
			>
				<div className="font-windows text-white text-lg ml-2 w-[calc(100%-55px)] flex flex-row items-center gap-2">
					{' '}
					<img src={icon} alt={title} className="w-5 h-5" /> {title}
				</div>
				<div className="window-buttons-container flex flex-row items-center gap-[5px] w-[50px] place-self-right">
					<button
						onClick={() => setMinimized(!minimized)}
						className="minimize h-[20px] w-[20px] bg-windows-grey border-1 border-windows-lightgrey hover:border-black cursor-pointer flex flex-col items-center justify-space-around"
						style={{ borderStyle: 'outset' }}
						onMouseEnter={(e) => (e.target.style.borderStyle = 'inset')}
						onMouseLeave={(e) => (e.target.style.borderStyle = 'outset')}
					>
						<div className="line h-[3px] w-[40%] bg-black mt-[80%]"></div>
					</button>
					<button
						onClick={() => setActive(false)}
						className="close h-[20px] w-[20px] bg-windows-grey border-1 border-windows-lightgrey hover:border-black cursor-pointer flex flex-col items-center justify-center"
						style={{ borderStyle: 'outset' }}
						onMouseEnter={(e) => (e.target.style.borderStyle = 'inset')}
						onMouseLeave={(e) => (e.target.style.borderStyle = 'outset')}
					>
						{/* <div className="line h-[2.5px] w-[70%] bg-black transform rotate-45 transform-origin-left ml-[1px] mt-[2px]"></div> */}
						{/* <div className="line h-[2.5px] w-[70%] bg-black transform rotate-[-45deg] transform-origin-left ml-[1px] translate-y-[-2px]"></div> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="3"
							strokeLinecap="square"
							strokeLinejoin="round"
							className="lucide lucide-x"
						>
							<path d="M18 6 6 18"></path>
							<path d="m6 6 12 12"></path>
						</svg>
					</button>
				</div>
			</div>
			<div className="content w-full h-full p-2 flex flex-col items-center">
				{content === 'welcome' ? (
					<WelcomeContent />
				) : content === 'skills' ? (
					<SkillsContent />
				) : content === 'about' ? (
					<AboutMeContent />
				) : (
					content
				)}
			</div>
		</div>
	);
}

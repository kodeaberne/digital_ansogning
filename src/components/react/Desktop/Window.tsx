import { useState, useRef } from 'react';
import WelcomeContent from '../Apps/WelcomeContent';
import SkillsContent from '../Apps/SkillsContent';
import AboutMeContent from '../Apps/AboutMeContent';
import React from 'react';

// Function to constrain window position within viewport bounds
const constrainWindowPosition = (x: number, y: number, sizeX: number, sizeY: number) => {
	// Convert window size from pixels to percentage
	const windowWidthPercent = (sizeX / window.innerWidth) * 100;
	const windowHeightPercent = (sizeY / window.innerHeight) * 100;

	// Taskbar height (assuming ~40px taskbar at bottom)
	const taskbarHeightPercent = (40 / window.innerHeight) * 100;

	// Constrain X position (left edge can't go below 0%, right edge can't exceed 100%)
	const minX = 0;
	const maxX = 100 - windowWidthPercent;
	const constrainedX = Math.max(minX, Math.min(maxX, x));

	// Constrain Y position (top edge can't go below 0%, bottom edge can't exceed taskbar)
	const minY = 0;
	const maxY = 100 - windowHeightPercent - taskbarHeightPercent;
	const constrainedY = Math.max(minY, Math.min(maxY, y));

	return { x: constrainedX, y: constrainedY };
};

export default function Window({
	title,
	icon,
	content,
	sizeX,
	sizeY,
	posX,
	posY,
	focused,
	active,
	onClick,
	onClose,
	onPositionChange, // Add this new prop
}: {
	title: string;
	icon: string;
	content: string;
	sizeX: number;
	sizeY: number;
	posX: number;
	posY: number;
	focused: boolean;
	active: boolean;
	onClick?: () => void;
	onClose?: () => void;
	onPositionChange?: (x: number, y: number) => void; // Add this type
}) {
	const [minimized, setMinimized] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
	const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });

	const handleMouseDown = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsDragging(true);
		setDragStart({ x: e.clientX, y: e.clientY });
		setInitialPos({ x: posX, y: posY });
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !onPositionChange) return;

		const deltaX = e.clientX - dragStart.x;
		const deltaY = e.clientY - dragStart.y;

		// Convert pixel deltas to percentage (assuming 100% = window width/height)
		let newX = initialPos.x + (deltaX / window.innerWidth) * 100;
		let newY = initialPos.y + (deltaY / window.innerHeight) * 100;

		// Apply boundary constraints
		const constrainedPos = constrainWindowPosition(newX, newY, sizeX, sizeY);
		newX = constrainedPos.x;
		newY = constrainedPos.y;

		onPositionChange(newX, newY);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	// Add global mouse events when dragging
	React.useEffect(() => {
		if (isDragging) {
			const handleGlobalMouseMove = (e: MouseEvent) => {
				if (!onPositionChange) return;

				const deltaX = e.clientX - dragStart.x;
				const deltaY = e.clientY - dragStart.y;

				let newX = initialPos.x + (deltaX / window.innerWidth) * 100;
				let newY = initialPos.y + (deltaY / window.innerHeight) * 100;

				// Apply boundary constraints
				const constrainedPos = constrainWindowPosition(newX, newY, sizeX, sizeY);
				newX = constrainedPos.x;
				newY = constrainedPos.y;

				onPositionChange(newX, newY);
			};

			const handleGlobalMouseUp = () => {
				setIsDragging(false);
			};

			document.addEventListener('mousemove', handleGlobalMouseMove);
			document.addEventListener('mouseup', handleGlobalMouseUp);

			return () => {
				document.removeEventListener('mousemove', handleGlobalMouseMove);
				document.removeEventListener('mouseup', handleGlobalMouseUp);
			};
		}
	}, [isDragging, dragStart, initialPos, onPositionChange]);

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
				onMouseDown={handleMouseDown}
				className={`w-full h-8 flex flex-row items-center justify-between ${focused ? 'bg-windows-blue' : 'bg-windows-darkgrey'} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
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
						onMouseEnter={(e) =>
							((e.target as HTMLElement).style.borderStyle = 'inset')
						}
						onMouseLeave={(e) =>
							((e.target as HTMLElement).style.borderStyle = 'outset')
						}
					>
						<div className="line h-[3px] w-[40%] bg-black mt-[80%]"></div>
					</button>
					<button
						onClick={onClose}
						className="close h-[20px] w-[20px] bg-windows-grey border-1 border-windows-lightgrey hover:border-black cursor-pointer flex flex-col items-center justify-center"
						style={{ borderStyle: 'outset' }}
						onMouseEnter={(e) =>
							((e.target as HTMLElement).style.borderStyle = 'inset')
						}
						onMouseLeave={(e) =>
							((e.target as HTMLElement).style.borderStyle = 'outset')
						}
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
			<div className="content w-full h-full p-1 flex flex-col items-center">
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

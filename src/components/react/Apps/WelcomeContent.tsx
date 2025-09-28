export default function WelcomeContent() {
	return (
		<div
			className="welcome-content w-full h-full bg-black border-3 border-windows-white"
			style={{
				borderStyle: 'inset',
			}}
		>
			<p className="text-windows-white font-cmd p-2">
				Microsoft (R) Windows 95
				<br /> (C) Copyright Microsoft Corp 1981-1995.
			</p>
			<p className="text-windows-white font-cmd p-2">
				C:\ <span>welcome.exe</span>
			</p>
			<p className="text-windows-white font-cmd p-2">Starting welcome.exe....</p>
			<p className="text-windows-white font-cmd p-2">
				Hi there!
				<br />
				Starting productivity.exe and caffeine.sys.
				<br />
				I'm Mikkel.
				<br />
				Feel free to click around: if something breaks, it was a feature. If it works, I
				meant it.
				<br />
				Enjoy the tour!
			</p>
		</div>
	);
}

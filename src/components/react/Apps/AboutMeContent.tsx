export default function AboutMeContent() {
	return (
		<div className="about-me-content flex flex-col gap-4">
			<h1 className="text-4xl font-cmd text-center">Hello, World!</h1>
			<p className="font-windows">
				Hi, I’m Mikkel—front‑end tinkerer, bug whisperer and habitual over-commenter. I
				study Multimedia Design at KEA, live in Copenhagen, and have an unhealthy respect
				for Ctrl+Z. I build fast, clean interfaces with Astro, React, and Tailwind, and I’m
				on a lifelong quest to name variables better than “thing2.”
				<br />
				<br />
				Interests: clean UI, clever micro‑interactions, monospaced fonts with ligatures, and
				the occasional cybersecurity rabbit hole. Also: naming things badly so I can rename
				them later.
			</p>
			<section
				className="flex flex-col justify-center gap-8 bg-windows-white border-2 p-2.5"
				style={{
					borderStyle: 'inset',
				}}
			>
				<h2 className="text-2xl font-cmd text-center">Contact Me</h2>
				<div className="contact-wrapper flex flex-row justify-around">
					<a
						href="https://github.com/ExManubis"
						className="flex flex-col font-windows text-center"
					>
						<img
							src="./icons/github.png"
							alt="Github Logo"
							className="w-15 h-15 place-self-center"
						/>
						My Github
					</a>
					<a
						href="mailto:mikkel@fejl40.dev"
						className="flex flex-col font-windows text-center"
					>
						<img
							src="./icons/mail.png"
							alt="Email icon"
							className="w-15 h-15 place-self-center"
						/>
						E-mail
					</a>
				</div>
			</section>
		</div>
	);
}

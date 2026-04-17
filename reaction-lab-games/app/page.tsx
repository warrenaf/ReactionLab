export default function Home() {
	return (
		<main className="flex min-h-screen w-full items-center justify-center bg-zinc-950 p-4 md:p-8">
			<section className="w-full max-w-[760px]">
				<div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/50">
					{/* Keep the Unity game in a square frame while scaling responsively. */}
					<div className="mx-auto aspect-square w-full max-h-[80vh] max-w-[80vh]">
						<iframe
							src="/Build/index.html"
							title="Reaction Lab Unity WebGL"
							className="h-full w-full border-0"
							allow="fullscreen; autoplay; gamepad"
							loading="eager"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
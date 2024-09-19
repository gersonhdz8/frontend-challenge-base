import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-[#000000] text-[#F6F6F6] font-semibold items-center px-24 w-full h-20 border border-slate-300/20 rounded ">
			<div className="flex w-full max-w-7xl h-full justify-between items-center mx-auto ">
				<div className="flex items-center gap-12">
					<img src="/icon.svg" alt="" />
					<nav className="gap-12 flex font-inter leading-3">
						<Link href="/movie/popular" className="p-3 font-inter text-sm rounded-md hover:bg-yellow-500/40">
							Popular
						</Link>
						<Link href="/movie/favorites" className="p-3 text-sm rounded-md hover:bg-yellow-500/40">
							Favorites
						</Link>
					</nav>
				</div>
				<div className="flex items-center">
					<button className="w-full h-full items-center flex">
						<img src="/signinIcon.svg" alt="" />
					</button>
				</div>
			</div>
		</header>
	);
}

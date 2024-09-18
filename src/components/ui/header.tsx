import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-[#000000] text-[#F6F6F6] font-semibold items-center px-24 w-full h-20 ">	
            <div className="flex w-full h-full justify-between ">
                <div className="flex items-center gap-12">
                    <img src="/icon.svg" alt="" />
                    <nav className="gap-12 flex font-inter leading-3">                        
                        <Link href="" className="px-4 font-inter text-sm">Popular</Link>
                        <Link href="" className="px-4 text-sm">Favorites</Link>                            
                        
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

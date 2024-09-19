"use client";
import Link from "next/link";
import SelectGenre from "./select-genre";
import Search from "./search";
export default function Aside(): React.JSX.Element {
  return (
    <aside className="w-64 min-w-64 h-screen bg-[#262626]">
      <div className="flex flex-col gap-5 p-5">
        <label className="text-white">Search</label>

        <Search placeholder="Buscar pelicula..."></Search>

        <label className="text-white">Genres</label>
        <SelectGenre></SelectGenre>
      </div>
      <ul className="p-5 flex flex-col gap-5 font-inter font-semibold text-white">
        <Link href="/movie/popular">
          <li className="hover:bg-yellow-500/40 p-3 rounded-md">Popular</li>
        </Link>
        <Link href="/movie/now_playing">
          <li className="hover:bg-yellow-500/40 p-3 rounded-md">Now Playing</li>
        </Link>
        <Link href="/movie/upcoming">
          <li className="hover:bg-yellow-500/40 p-3 rounded-md">Upcoming</li>
        </Link>
        <Link href="/movie/top_rated">
          <li className="hover:bg-yellow-500/40 p-3 rounded-md">Top Rated</li>
        </Link>
      </ul>
    </aside>
  );
}

import { Movie } from "@/lib/definitions";
import { Heart } from "lucide-react";
import Image from "next/image";

import { useState } from "react";

export default function CardMovie(movie: Movie): React.JSX.Element {
  const image_url = process.env.NEXT_PUBLIC_IMAGE_URL;
  const [isFavorite, setIsFavorite] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setFavorites((prevFavorites) => {
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };
  return (
    <div className="h-full w-full gap-5 border border-slate-300/20 rounded-lg shadow bg-neutral-800 ">
      <a href={`/details?movieId=${movie.id}`} className="">
        <Image
          className="rounded-t-lg object-cover max-h-[22rem] min-h-[22rem] w-full shadow-sm shadow-neutral-700"
          src={`${image_url}` + `${movie.poster_path}`}
          alt={movie.title}
          width={250}
          height={350}
        />
      </a>
      <div className="p-4 flex flex-col">
        <a
          href={`/details?movieId=${movie.id}`}
          className="flex items-center justify-start text-clip"
        >
          <h5 className="text-xl font-semibold tracking-tight text-white min-h-14 max-h-14 text-wrap overflow-hidden ">
            {movie.title}
          </h5>
        </a>
        <div className="flex items-center justify-between mt-2.5 mb-5">
          <div className="flex items-center text-yellow-200">Rating</div>
          <span className="bg-yellow-100 text-yellow-900 text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
            {(movie.vote_average * 10.0).toFixed(2)}%
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {movie.release_date}
          </span>
          <button
            className="p-2 bg-neutral-500 hover:bg-neutral-900 rounded-full"
            onClick={toggleFavorite}
          >
            {isFavorite ? (
              <Heart color="white" fill="#E54545" size={22} />
            ) : (
              <Heart color="white" size={22} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

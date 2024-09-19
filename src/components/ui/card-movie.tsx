import { Movie } from "@/lib/definitions";

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
    <div className="w-full max-w-sm h- border border-slate-300/20 rounded-lg shadow bg-neutral-800 ">
      <a href="#">
        <img
          className="rounded-t-lg object-contain h-max shadow-sm shadow-neutral-700"
          src={`${image_url}` + `${movie.poster_path}`}
          alt={movie.title}
        />
      </a>
      <div className="p-3">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-white ">
            {movie.title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center text-yellow-200">Rating</div>
          <span className="bg-yellow-100 text-yellow-900 text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
            {(movie.vote_average * 10.0).toFixed(2)}%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {movie.release_date}
          </span>
          <button
            onClick={toggleFavorite}
            className="text-white bg-yellow-500/70 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-normal rounded-lg text-sm p-2 text-center"
          >
            <img
              src={isFavorite ? "/iconHeartFilled.svg" : "/iconHeart.svg"}
              alt="favorite"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

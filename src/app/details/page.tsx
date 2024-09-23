/* eslint-disable prettier/prettier */
"use client";
import { useEffect, useState, Suspense } from "react";
import { ArrowLeft, Heart, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { MovieDetails, Movie } from "@/lib/definitions";
import { getMoviesDetails, getMoviesRecomendation } from "@/lib/data";
import { MovieDetailsSkeleton } from "../../components/ui/skeletonDetails";

export default function MovieDetailsPage(): React.JSX.Element {
  const [movie, setMovies] = useState<MovieDetails>();
  const [recomendations, setRecomendation] = useState<Movie[]>();
  const searchParams = useSearchParams();
  const movieId = searchParams.get("movieId") || "557";
  const image_url = process.env.NEXT_PUBLIC_IMAGE_URL;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const getMovies = async () => {
      try {
        const { results } = await getMoviesDetails(movieId);
        const {
          fullResponse: recomendationResponse,
          results: MoviesRecomendation,
        } = await getMoviesRecomendation(movieId);
        //console.log(results);
        setMovies(results);
        setRecomendation(MoviesRecomendation);
      } catch (error) {
        //console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, [movieId]);

  const formatRuntime = (runtime: number): string => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`;
  };

  if (!movie) {
    return (
      <div>
        <MovieDetailsSkeleton></MovieDetailsSkeleton>
      </div>
    );
  }

  return (
    <Suspense fallback={<MovieDetailsSkeleton></MovieDetailsSkeleton>}>
      <div className="min-h-screen md:min-h-screen  w-full h-full bg-neutral-900 text-white">
        <div className="relative md:h-[100vh] 2xl:h-[80vh] bg-neutral-900">
          <Image
            src={`${image_url}` + `${movie.backdrop_path}`}
            alt={movie.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t  from-neutral-900 to-transparent" />

          <Link
            href="/"
            className="absolute top-4 left-4 p-2 bg-black/50 rounded-full"
          >
            <ArrowLeft size={24} />
          </Link>
        </div>

        <div className="px-4 py-8 absolute ml-16 top-1/2 max-w-7xl">
          <div className="flex items-start gap-8 ">
            <div className="flex gap-5 flex-col">
              <Image
                src={`${image_url}` + `${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <button className="rounded-lg bg-yellow-500/80 text-black font-semibold w-full h-10 inline-flex items-center gap-5 justify-center">
                Ver trailer <Play size={20}></Play>
              </button>
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
              <p className="text-gray-400 mb-4">
                {movie.release_date} • {formatRuntime(movie.runtime)}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-green-500 text-black px-3 py-1 rounded-full">
                  <span className="font-bold text-lg">
                    {movie.vote_average}%
                  </span>
                  <span className="text-sm">User Score</span>
                </div>
                <button className="p-2 bg-neutral-800 rounded-full">
                  <Heart size={24} />
                </button>
              </div>
              <h2 className="text-xl font-semibold mb-2">Overview:</h2>
              <p className="text-gray-300 mb-6">{movie.overview}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-semibold"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2"></div>
            </div>
          </div>
        </div>
        <div className="mt-12 px-20">
          <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recomendations?.map((recomendation) => {
              return (
                <Link href={`/details?movieId=${recomendation.id}`}>
                  <div
                    key={recomendation.title}
                    className="relative flex flex-col items-center"
                  >
                    <Image
                      src={`${image_url}` + `${recomendation.poster_path}`}
                      alt={recomendation.title}
                      width={150}
                      height={225}
                      className="rounded-lg"
                    />
                    <p className="mt-2 text-sm text-center">
                      {recomendation.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Suspense>
  );
}

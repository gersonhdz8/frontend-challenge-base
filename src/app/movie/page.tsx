"use client";
import { useEffect, useState, Suspense } from "react";
import { getMoviesSearch } from "@/lib/data";
import CardMovie from "@/components/ui/card-movie";
import { ApiResponse, Movie } from "@/lib/definitions";
import Pagination from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import CardMovieSkeleton from "@/components/ui/SkeletonCard";

export default function Home(): React.JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [response, setResponse] = useState<ApiResponse | undefined>(undefined);
  const searchParams = useSearchParams();
  const [noResults, setNoResults] = useState(false);
  const currentPage = searchParams.get("page") || "1";
  const queryParams = searchParams.get("query") || "";

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const getMovies = async () => {
      try {
        const { fullResponse, results } = await getMoviesSearch(
          currentPage,
          queryParams,
        );
        setResponse(fullResponse);
        setMovies(results);
        setNoResults(fullResponse.total_results === 0);
      } catch (error) {
        //console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, [currentPage, queryParams]);

  return (
    <>
      <Suspense fallback={<CardMovieSkeleton></CardMovieSkeleton>}>
        {noResults ? (
          <div className="text-center text-white">
            <p>No se encontraron resultados.</p>
          </div>
        ) : (
          <>
            <section className="grid grid-cols-4 gap-5 p-4 grid-rows-3">
              {movies.map((movie) => (
                <CardMovie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  overview={movie.overview}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                  poster_path={movie.poster_path}
                  backdrop_path={movie.backdrop_path}
                />
              ))}
            </section>

            <Pagination totalPages={response?.total_pages || 1} />
          </>
        )}
      </Suspense>
    </>
  );
}

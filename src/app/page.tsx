"use client";
import { Suspense, useEffect, useState } from "react";
import { getMoviesTrending } from "@/lib/data";
import CardMovie from "@/components/ui/card-movie";
import { ApiResponse, Movie } from "@/lib/definitions";
import Pagination from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import CardMovieSkeleton from "@/components/ui/SkeletonCard";

export default function Home(): JSX.Element {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState(true);
	const [response, setResponse] = useState<ApiResponse | undefined>( undefined);
	const searchParams = useSearchParams();
	const currentPage = searchParams.get("page") || "1";

	useEffect(() => {
		const getMovies = async () => {
			try {
				const { fullResponse, results } = await getMoviesTrending(currentPage);
				setResponse(fullResponse);
				setMovies(results);
			} catch (error) {
				console.error("Error fetching movies:", error);
			} finally {
				setLoading(false);
			}
		};

		getMovies();
	}, [currentPage]);

	if (loading) {
		return <div className="text-center text-white"><CardMovieSkeleton></CardMovieSkeleton></div>;
	}

	return (
		<>

			<section className="grid grid-cols-4 gap-5 p-4 grid-rows-3">
				
				{movies.map((movie,index) => (
					<CardMovie
						id={movie.id}
						title={movie.title}
						overview={movie.overview}
						release_date={movie.release_date}
						vote_average={movie.vote_average}
						poster_path={movie.poster_path}
						backdrop_path={movie.backdrop_path}></CardMovie>
				))}				
			</section>

			<Pagination totalPages={response?.total_pages || 1} />
		</>
	);
}

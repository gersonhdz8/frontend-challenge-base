import { useEffect, useState } from "react";
import { Movie } from "@/lib/definitions";
import { getMoviesTrending } from "@/lib/data";



export default function SectionCard() {
    const url_image= process.env.NEXT_PUBLIC_IMAGE_URL
	const [movies, setMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getMovies = async () => {
			try {
				const fetchedMovies = await getMoviesTrending();
				setMovies(fetchedMovies);
			} catch (error) {
				console.error("Error fetching movies:", error);
			} finally {
				setLoading(false);
			}
		};

		getMovies();
	}, []);

	if (loading) {
		return <div className="text-center text-white">Loading...</div>;
	}

	return (
		<section className="grid grid-cols-4 gap-4 p-4">
			{movies.map((movie) => (
				<div
					key={movie.id}
					className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
					<img
						src={`${url_image}`+`${movie.poster_path}`}
						alt={movie.title}
						className="w-full h-64 object-cover"
					/>
					<div className="p-4">
						<h2 className="text-white font-bold text-lg">{movie.title}</h2>
					</div>
				</div>
			))}
		</section>
	);
}

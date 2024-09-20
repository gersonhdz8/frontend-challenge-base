/* eslint-disable prettier/prettier */
/* "use client"
import { useEffect, useState } from 'react'
import { ArrowLeft, Heart } from 'lucide-react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import { Movie } from '@/lib/definitions';
import { getMoviesDetails } from '@/lib/data';

export default function MovieDetailsPage(): React.JSX.Element {
  const [movie, setMovies] = useState<Movie|null>(null);  
  const searchParams = useSearchParams();  
  const movieId = searchParams.get("movieId") || "";
  const image_url = process.env.NEXT_PUBLIC_IMAGE_URL
  

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const getMovies = async () => {
      try {
        const {results} = await getMoviesDetails(movieId        
        ); 
        console.log(results);       
        setMovies(results);        
      } catch (error) {
        //console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, [movieId]);

   
  

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="relative h-[50vh]">
        <Image
          src={`${image_url}` + `${movie.backdrop_path}`}
          alt={movie.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
        <button className="absolute top-4 left-4 p-2 bg-black/50 rounded-full">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="container mx-auto px-4 py-8 relative -mt-32">
        <div className="flex items-start gap-8">
          <Image
            src={`${image_url}` + `${movie.poster_path}`}
            alt={movie.title}
            width={200}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <p className="text-gray-400 mb-4">{movie.release_date}</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-green-500 text-black px-3 py-1 rounded-full">
                <span className="font-bold text-lg">{movie.vote_average}%</span>
                <span className="text-sm">User Score</span>
              </div>
              <button className="p-2 bg-neutral-800 rounded-full">
                <Heart size={24} />
              </button>
            </div>
            <h2 className="text-xl font-semibold mb-2">Overview:</h2>
            <p className="text-gray-300 mb-6">{movie.overview}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              
            </div>
            <div className="flex flex-wrap gap-2">
              
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">            
          </div>
        </div>
      </div>
    </div>
  )
} */

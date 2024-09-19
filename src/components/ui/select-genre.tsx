import React, { useState, useEffect } from "react";
import { fecthGenres } from "../../lib/data";
import { ChevronDown } from "lucide-react";
import { Genre } from "@/lib/definitions";

export default function SelectGenre() {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [selectedGenre, setSelectedGenre] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function loadGenres() {
			try {
				const data = await fecthGenres();                
				setGenres(data);
				if (data.length > 0) {
					setSelectedGenre(data[0].name);
				}
			} catch (err) {
				setError("Failed to fetch genres. Please try again later.");
			} finally {
				setIsLoading(false);
			}
		}

		loadGenres();
	}, []);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedGenre(event.target.value);
	};

	if (isLoading) {
		return <div className="text-[#F6F6F6]">
            <select
				id="movieGenre"
				name="movieGenre"
				value={selectedGenre}
				onChange={handleChange}
				className="flex pl-2 pr-8 h-10 w-full rounded-md border border-neutral-800 text-[#F6F6F6] bg-neutral-950 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white focus-visible:ring-1 focus-visible:ring-[#E6B10B] disabled:cursor-not-allowed disabled:opacity-50 appearance-none max-h-12 overflow-y-auto">
                    <option value="action">
						Action
					</option>
                    

				
			</select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#F6F6F6]">
				<ChevronDown className="h-4 w-4" />
			</div>
        </div>;
	}

	if (error) {
		return <div className="text-red-500">{error}</div>;
	}

	return (
		<div className="relative">
			<select
				id="movieGenre"
				name="movieGenre"
				value={selectedGenre}
				onChange={handleChange}
				className="flex pl-2 pr-8 h-10 w-full rounded-md border border-neutral-800 text-[#F6F6F6] bg-neutral-950 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white focus-visible:ring-1 focus-visible:ring-[#E6B10B] disabled:cursor-not-allowed disabled:opacity-50 appearance-none max-h-12 overflow-y-auto">
				{genres.map((genre) => (
					<option key={genre.id} value={genre.name}>
						{genre.name}
					</option>
				))}
			</select>
			<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#F6F6F6]">
				<ChevronDown className="h-4 w-4" />
			</div>
		</div>
	);
}

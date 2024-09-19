"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
	totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;

	const updatePage = (page: number) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", page.toString());
		router.push(`?${params.toString()}`);
	};

	const getVisiblePages = () => {
		const maxVisiblePages = 7;
		let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
		let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

		if (endPage - startPage < maxVisiblePages - 1) {
			startPage = Math.max(1, endPage - maxVisiblePages + 1);
		}

		return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
	};

	const visiblePages = getVisiblePages();

	return (
		<nav className="flex justify-center items-center space-x-2 mt-8">
			<button
				onClick={() => updatePage(Math.max(1, currentPage - 1))}
				disabled={currentPage === 1}
				className="p-2 rounded-md bg-yellow-800 text-white hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed"
				aria-label="Previous page">
				<ChevronLeft size={20} />
			</button>

			{visiblePages.map((number) => (
				<button
					key={number}
					onClick={() => updatePage(number)}
					className={`px-4 py-2 rounded-md ${
						currentPage === number
							? "bg-yellow-600 text-white"
							: "bg-yellow-800/50 text-white hover:bg-yellow-700"
					}`}>
					{number}
				</button>
			))}

			<button
				onClick={() => updatePage(Math.min(totalPages, currentPage + 1))}
				disabled={currentPage === totalPages}
				className="p-2 rounded-md bg-yellow-800 text-white hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed"
				aria-label="Next page">
				<ChevronRight size={20} />
			</button>
		</nav>
	);
}


export interface Genre{
    id: number;
    name: string;
}
export interface Movie{
    id: number;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
}
export interface ApiResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }
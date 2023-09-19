import { useState } from "react";
import { MoviesList } from "../components/MoviesList/MoviesList";
import { SearchMovies } from "../components/SearchMovies/SearchMovies";
import { useGetMovies } from "../hooks/useGetMovies";
import { useSearchMovieByTitle } from "../hooks/useSearchMovieByTitle";




export function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = useGetMovies();
    const searchResults = useSearchMovieByTitle(searchQuery);
    console.log(searchResults)

    function handleOnSearch(movieTitle) {
        setSearchQuery(movieTitle);
    }

    return (
        <>
            <SearchMovies onSearch={handleOnSearch}/>
            <MoviesList movies={searchResults.length > 0 ? searchResults : movies}/>
        </>
    )
}

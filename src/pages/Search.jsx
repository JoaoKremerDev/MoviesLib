import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import './Search.css'

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MovieGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
    console.log({movies})
  };

  useEffect(() => {
    const searchWithQueryUrl = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryUrl);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">Search results for: {query}</h2>
      <div className="movies-container">
        {movies.length === 0 && <p className="meu-texto animacao-mexer">We can't find this movie in our lib at this moment...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;


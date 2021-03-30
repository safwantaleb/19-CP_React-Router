import "../App.css";
import React, { useState } from "react";
import AddMovie from "./AddMovie";
import { movies } from "./Movies";
import MovieList from "./MovieList";
import MoviesSearch from "./MoviesSearch";

function Home() {
  const [movieList, setMovieList] = useState(movies);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState("");

  const handleAddMovie = (movie) => {
    const newMovie = { ...movie, id: Math.random() * 10 };
    console.log("movie", newMovie);
    setMovieList([...movieList, newMovie]);
  };
  const handleDelete = (id) => {
    console.log(id);
    const newList = movieList.filter((movie) => movie.id !== id);
    setMovieList(newList);
  };
  return (
    <div className="App">
      <div className="App-header">
        <h1>Movie App</h1>
        <MoviesSearch
          setNameSearch={setNameSearch}
          ratingSearch={ratingSearch}
          setRatingSearch={setRatingSearch}
        />
        <MovieList
          movieList={movieList}
          nameSearch={nameSearch}
          ratingSearch={ratingSearch}
          handleDelete={handleDelete}
        />
      </div>
      <div>
        <h1>Add Movies</h1>
        <AddMovie onAdd={handleAddMovie} />
      </div>
    </div>
  );
}

export default Home;

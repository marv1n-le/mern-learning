import React from "react";
import { useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

export const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <p key={movie.id}>
          {movie.name}
          <button onClick={() => {
            dispatch(removeMovie(movie.id));
          }}>Delete Movie</button>
        </p>
      ))}
    </div>
  );
};

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [{
    id: 1,
    name: "Interstellar"
  },
  {
    id: 2,
    name: "Harry Potter"
  }],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const lastMovie = state.movies[state.movies.length - 1];
      const newMovie = {
        id: lastMovie ? lastMovie.id + 1 : 1,
        name: action.payload
      };
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    }
  }
});

export const { addMovie, removeMovie } = movieSlice.actions;

export default movieSlice.reducer;
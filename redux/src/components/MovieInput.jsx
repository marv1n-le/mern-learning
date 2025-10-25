import React, { useState } from 'react'
import { addMovie } from '../movieSlice';
import { useDispatch } from 'react-redux';

const MovieInput = () => {
  const dispatch = useDispatch();
  const [newMovie, setNewMovie] = useState("");
  return (
    <div>
      <input value={newMovie} onChange={(e) => setNewMovie(e.target.value)}/>
      <button onClick={() => {
        if (newMovie) {
          dispatch(addMovie(newMovie));
          setNewMovie("");
        }
      }}>Add Movie</button>
    </div>
  )
}

export default MovieInput

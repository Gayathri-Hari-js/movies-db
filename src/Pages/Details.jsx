import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import {fetchMovieById} from '../Middleware/api'

function Details() {
  const dispatch = useDispatch();
  const params = useParams();
  // const movieDetails = useSelector((state) => state.moviesReducer.movie);
  useEffect(()=>{
    fetchMovieById(params.id).then(movies=> 
   dispatch({ type: 'MOVIE_DATA', payload: movies.results }));
 },[]);
  return (
    <div>
      {/* {movieDetails} */}
    </div>
  )
}

export default Details
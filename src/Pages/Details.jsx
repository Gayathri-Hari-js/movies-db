import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import Moment from 'moment'
import {fetchMovieById, fetchMovieCredits} from '../Middleware/api'
import config from '../Middleware/config';

function Details() {
  const dispatch = useDispatch();
  const params = useParams();
  
  const movie = useSelector((state) =>  state.moviesReducer.movie);
  const credits = useSelector((state) =>  state.moviesReducer.credits);
  
  useEffect(()=>{
    fetchMovieById(params.id).then(movie=> {
      dispatch({ type: 'MOVIE_DATA', payload: movie })
  });
    fetchMovieCredits(params.id).then(credits=> {
      dispatch({ type: 'MOVIE_CREDITS', payload: credits })
  });

 },[dispatch, params.id]);

  const RELEASE_DATE = Moment(movie?.release_date).format('MMM DD, YYYY'); 
  const IMG_SRC =  config.imgBaseURL+ movie?.poster_path ;
  return (
    <div className='outter_details'>
      <img className='img_details' src ={IMG_SRC} alt={movie?.title}></img>
      <section className='overview_details'>
        <div>
          <div style={{fontSize: "2em"}}>{movie?.title}</div>  
          <i style={{fontSize: "0.9em"}}> {movie?.tagline}</i>
        </div>
        <p>Release Date : {RELEASE_DATE}</p>
        <b>Overview </b>
        <p> {movie?.overview}</p>
        <div className=''>Rating : {movie?.vote_average}</div>
        
        <p><b>Directors </b>
          {credits && credits.crew && 
          credits.crew.map(each=>{ return each.known_for_department ==='Directing' ? each.name: '' })
          }
        </p>

      </section>
    </div>
  )
}

export default Details
import React, { Fragment, useEffect } from 'react'
import SearchBar from '../Components/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import {fetchMovies} from '../Middleware/api'

function Dashboard() {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.moviesReducer.movies);

  useEffect(()=>{
     fetchMovies().then(movies=>
    dispatch({ type: 'MOVIES_DATA', payload: movies.results }));
  },[]);

  return (
      <Fragment>
        <section className='inner_content_part_one'>
          <div className='column_wrapper'>
            <div className='content_wrapper'>
              <div className='title'>
                <h2>Welcome to MoviesDB</h2>
                <h3>Millions of movies, TV shows. Explore Now!</h3>
              </div>
              <SearchBar></SearchBar>
            </div>
          </div>
        </section>
        <section className='inner_content_part_two'>
        {moviesList.map(movie=>( movie.id))}
        </section>
      </Fragment>
  )
}

export default Dashboard
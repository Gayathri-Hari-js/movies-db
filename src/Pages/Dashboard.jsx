import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Components/Cards'
import SearchBar from '../Components/SearchBar'
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
          <div style={{width:'100%'}}>
          <h2>What's Popular</h2>
          <div className='card_container'>
            {moviesList && moviesList.map(movie=>(
              <Card key={movie.id} data={movie}></Card>))}
          </div>
          </div>
        </section>
      </Fragment>
  )
}

export default Dashboard
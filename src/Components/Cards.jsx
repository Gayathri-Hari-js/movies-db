import React from 'react'
import { useNavigate } from 'react-router-dom'
import Moment from 'moment'
import {useDispatch} from 'react-redux'
import config from '../Middleware/config';

function Card(props) {
    const {poster_path,
            title,
            release_date,
            vote_average,
            id
          } = props.data;
    const RELEASE_DATE = Moment(release_date).format('MMM DD, YYYY');  
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const handleClick = () =>{
      dispatch({ type: 'MOVIE_DATA', payload: props.data });
      navigate(`/movie/${id}`);
    }
  return (
    <div className='card' onClick={handleClick}>
      <div className='card_img'>
        <img className='card_img_inner' src ={config.imgBaseURL+ poster_path} alt={title}></img>
      </div>
      <section className='rating'>
        <div className='card_rating_otter_ring'>
          <div className='card_rating_ring'>
            <div className='card_rating'>{vote_average}</div>
          </div>
        </div>
      </section>
      <h1 style={{fontSize: "1em"}}>{title}</h1>
      <p>{RELEASE_DATE}</p>
    </div>
  )
}

export default Card
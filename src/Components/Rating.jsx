import React, {useMemo, useState} from 'react'
import { FaStar } from 'react-icons/fa'

function Rating({count, rating, color, onRating}) {
    const [hoverRating, setHoverRating] = useState(rating);
    const getColor = index => {
        if(hoverRating >= index)
            return color.filled
        else if(!hoverRating && rating >= index)
            return color.filled
        return color.unfilled;
    }
    const starRating = useMemo(()=>{
        return Array(count)
        .fill(0)
        .map((_,i)=> i +1)
        .map(index=>
        <FaStar key={index} className='icon_star' 
        onClick={()=> onRating(index)}
        style={{ color: getColor(index)}}
        onMouseEnter={()=>setHoverRating(index)}
        onMouseLeave={()=>setHoverRating(rating)}/>
        )
    },[count,rating, hoverRating, onRating])
  return (
    <div>
        {starRating}
    </div>
  )
}

Rating.defaultProps = {
    count : 5,
    rating: 0,
    color:{
        filled:'#f5eb3b',
        unfilled:'@DCDCDC'
    }
}
export default Rating
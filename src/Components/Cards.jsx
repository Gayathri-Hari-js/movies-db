import React from 'react'
import {useSelector} from 'react-redux'

function Cards() {
    const searchResult = useSelector((state) => state.filtered);
    console.log(searchResult)
  return (
    <div>Cards</div>
  )
}

export default Cards
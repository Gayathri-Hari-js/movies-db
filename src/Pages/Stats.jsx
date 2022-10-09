import React,{useCallback, useEffect, useState} from 'react'
import BarChart from '../Components/BarChart'
import {fetchTopRatedMovies} from '../Middleware/api'

function Stats() {
  const [chartDataSet, setChartDataSet] = useState([]);
  
  
const processDataSet = useCallback((topMovies) => {
   return  topMovies.results.map(movie => (
      JSON.parse(JSON.stringify({'label': movie.title, 'rate':movie.vote_average})))   
  ).slice(0,10);
},[]);

useEffect(()=>{
  fetchTopRatedMovies().then(topMovies=> {
    const data = processDataSet(topMovies);
    setChartDataSet(data);
})
}, [processDataSet]);

  return (
    <div>
     { chartDataSet.length >0 ? <BarChart data={chartDataSet}/> : ''}
    </div>
  )
}

export default Stats
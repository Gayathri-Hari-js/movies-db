import React,{useCallback, useEffect, useState} from 'react'
import BarChart from '../Components/BarChart'
import {fetchTopRatedMovies} from '../Middleware/api'

function Stats() {
  const [primaryDataSet, setPrimaryDataSet] = useState([]);
  const [secondaryDataSet, setSecondaryDataSet] = useState([]);

  
  
const processPrimaryDataSet = useCallback((topMovies) => {
   return  topMovies.results.map(movie => (
      JSON.parse(JSON.stringify({'label': movie.title, 'rate':movie.vote_average})))   
  ).slice(0,10);
},[]);

const processSecondaryDataSet = useCallback((topMovies) => {
  return  topMovies.results.map(movie => (
     JSON.parse(JSON.stringify({'label': movie.title, 'rate':movie.vote_count})))   
 ).slice(0,10);
},[]);

useEffect(()=>{
  fetchTopRatedMovies().then(topMovies=> {
    const pData = processPrimaryDataSet(topMovies);
    setPrimaryDataSet(pData);
    const sData = processSecondaryDataSet(topMovies);
    setSecondaryDataSet(sData);

})
}, [processPrimaryDataSet, processSecondaryDataSet]);

  return (
    <div className='stats_container'>
      
      <div className='stats_title'>Top 10 popular movies Ratings and Vote counts statistics </div>
    <div>
     { primaryDataSet.length >0 ? <BarChart data={primaryDataSet} labels={{xLabel:'Movies', yLabel: 'Ratings'}}/> : ''}
    </div>

    <div>
    { secondaryDataSet.length >0 ? <BarChart data={secondaryDataSet} labels={{xLabel:'Movies', yLabel: 'Number of Votes'}}/> : ''}
    </div>
</div>
  )
}

export default Stats
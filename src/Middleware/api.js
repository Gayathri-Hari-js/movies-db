import config from './config';

export const fetchMovies = async() => {
    try{
        const url = `${config.baseURL}/movie/popular?${config.apiKey}`
        const res = await fetch(url);
        const resJson = await res.json();
        return resJson;
    } catch(err){
        console.warn(err);
    }
}
// single movie
export const fetchMovieById = async(id) => {
  try{
      const url = `${config.baseURL}/movie/${id}?${config.apiKey}`
      const res = await fetch(url);
      const resJson = await res.json();
      return resJson;
  } catch(err){
      console.warn(err);
  }
}
// movie credits
///movie/{movie_id}/credits
export const fetchMovieCredits = async(id) => {
  try{
      const url = `${config.baseURL}/movie/${id}/credits?${config.apiKey}`
      const res = await fetch(url);
      const resJson = await res.json();
      return resJson;
  } catch(err){
      console.warn(err);
  }
}
export const fetchSearchResults = async (query) => {
    try{
      if (query && query.length > 0) {
        const parsedQuery = query.replaceAll(' ', '+');
        const url = `${config.baseURL}/search/movie?${config.apiKey}&language=en-US&query=${parsedQuery}&page=1&include_adult=false`;
        const res = await fetch(url);
        const resJson = await res.json();
        return resJson;
      } else {
        return [];
      }
    } catch(err){
        console.warn(err);
    }
  };

  ///movie/top_rated
  export const fetchTopRatedMovies = async () => {
    try{
        const url = `${config.baseURL}/movie/top_rated?${config.apiKey}`;
        const res = await fetch(url);
        const resJson = await res.json();
        return resJson;
      
    } catch(err){
        console.warn(err);
    }
  };

  //post ratings

  export const createRatings = async ( movie_id, body) =>{
    try{
      const url = `${config.baseURL}/movie/${movie_id}/rating?${config.apiKey}`;
      fetch(url, {
        method: 'POST',
        headers: new Headers({
           'Accept': 'application/json',
           'Content-Type': 'application/json'
        }),
         body: JSON.stringify(body)
    })
    .then(response => {
      if(!response.ok){throw new Error(`Error code:  ${response.status}`)}
      else return response.json()
    })
    .then(
      data => data.status_message,
      err=> alert(err)
    )
    
  } catch(err){
      console.warn(err);
      alert(err)
  }
  }
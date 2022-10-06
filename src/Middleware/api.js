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
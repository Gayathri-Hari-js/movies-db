const MOVIES_DATA = "MOVIES_DATA";
const MOVIE_DATA = "MOVIE_DATA";

const 
moviesReducer = (movies = [], action) => {
    switch( action.type){
        case MOVIES_DATA:
            return {movies: action.payload};
        case MOVIE_DATA:
            return {movie: action.payload};
        default:
            return movies;
    }
}
export default moviesReducer;
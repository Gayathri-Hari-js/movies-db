const MOVIES_DATA = "MOVIES_DATA";
const MOVIE_DATA = "MOVIE_DATA";
const MOVIE_CREDITS = "MOVIE_CREDITS";
const TOP_MOVIES_DATA = "TOP_MOVIES_DATA";

const initState ={ movies: [], movie:[], credits:[], topMovies:[]}
const 
moviesReducer = (state = initState, action) => {
    switch( action.type){
        case MOVIES_DATA:
            return {...state, movies: action.payload};
        case MOVIE_DATA:
            return {...state, movie: action.payload};
        case MOVIE_CREDITS:
            return {...state, credits: action.payload}; 
        case TOP_MOVIES_DATA:
            return {...state, topMovies: action.payload}; 
        default:
            return state;
    }
}
export default moviesReducer;
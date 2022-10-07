const MOVIES_DATA = "MOVIES_DATA";
const MOVIE_DATA = "MOVIE_DATA";
const MOVIE_CREDITS = "MOVIE_CREDITS";
const initState ={ movies: [], movie:[], credits:[]}
const 
moviesReducer = (state = initState, action) => {
    switch( action.type){
        case MOVIES_DATA:
            return {...state, movies: action.payload};
        case MOVIE_DATA:
            return {...state, movie: action.payload};
        case MOVIE_CREDITS:
            return {...state, credits: action.payload}; 
        default:
            return state;
    }
}
export default moviesReducer;
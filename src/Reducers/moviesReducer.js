const MOVIES_DATA = "MOVIES_DATA";

const 
moviesReducer = (movies = [], action) => {
    switch( action.type){
        case MOVIES_DATA:
            return {movies: action.payload};
        default:
            return movies;
    }
}
export default moviesReducer;
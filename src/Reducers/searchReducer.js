const SEARCH_DATA = "SEARCH_DATA";
const REMOVE_SEARCH = "REMOVE_SEARCH";

const searchReducer = (filtered = [], action) => {
    switch( action.type){
        case SEARCH_DATA:
            return [...filtered, action.payload];
        case REMOVE_SEARCH:
            return filtered= [];
        default:
            return filtered;
    }
}
export default searchReducer;
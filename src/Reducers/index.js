import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from "./moviesReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
    searchReducer:searchReducer,
    moviesReducer:moviesReducer,
  });

  export const store = configureStore({ reducer: rootReducer })
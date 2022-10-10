import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Details from '../Pages/Details';
import SearchResult from '../Pages/SearchResult';
import Stats from '../Pages/Stats';

const RouteTree = () =>{
    return(
        <Routes>
          <Route path ='/' element = {<Dashboard/>} exact></Route>
          <Route path ='/movie/:id' element = {<Details/>}></Route>
          <Route path ='/stats' element = {<Stats/>}></Route>
          <Route path ='/result/:query' element = {<SearchResult/>}></Route>
        </Routes>
    );
}

export default RouteTree;
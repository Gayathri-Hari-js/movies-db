import React from 'react';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Details from '../Pages/Details';
import SearchResult from '../Pages/SearchResult';
import Status from '../Pages/Status';

const RouteTree = () =>{
    return(<BrowserRouter>
        <Routes>
          <Route path ='/' element = {<Dashboard/>} exact></Route>
          <Route path ='/movie/:id' element = {<Details/>}></Route>
          <Route path ='/stats' element = {<Status/>}></Route>
          <Route path ='/result/:query' element = {<SearchResult/>}></Route>
        </Routes>
    </BrowserRouter> );
}

export default RouteTree;
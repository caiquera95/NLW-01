import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'; 

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

//exact para verificar se o path(caminho) é o mesmo

const Routes = () =>{
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/> 
            <Route component={CreatePoint} path="/create-point"/>
        </BrowserRouter>
    );
}

export default Routes;
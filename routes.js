import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'; //home = first screen
import MapNavigation from './pages/MapNavigaiton';
import Outlet from './pages/Outlet';


const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path='/' exact />
            <Route component={MapNavigation} path='/map-navigation' exact />
            <Route component={Outlet} path='/outlet' exact />
        </BrowserRouter>
    );
};

export default Routes;
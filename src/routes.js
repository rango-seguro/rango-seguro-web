import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home' // home = first screen
import MapNavigation from './pages/MapNavigation'
import Outlet from './pages/Outlet'
import Restaurant from './pages/Restaurant'

const Routes = () => (
  <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={MapNavigation} path="/map-navigation" exact />
    <Route component={Outlet} path="/outlet" exact />
    <Route component={Restaurant} path="/restaurant" exact />
  </BrowserRouter>
)

export default Routes

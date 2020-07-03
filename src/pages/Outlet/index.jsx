import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

const Outlet = () => {
  return (
    <>
      <Header />

      <Link to="/map-navigation">
        <strong>buscar no mapa</strong>
      </Link>
    </>
  )
}

export default Outlet

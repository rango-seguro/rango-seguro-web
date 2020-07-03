import React from 'react'
import { Link } from 'react-router-dom'

const Outlet = () => {
  return (
    <div>
      <header> Temp </header>
      <h1> Outlet - Rango Seguro </h1>
      <footer> Temp2 </footer>

      <Link to="/map-navigation">
        <strong>buscar no mapa</strong>
      </Link>
    </div>
  )
}

export default Outlet

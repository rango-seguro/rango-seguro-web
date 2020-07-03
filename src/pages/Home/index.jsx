import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <header> Temp </header>
      <h1> Home - Rango Seguro </h1>
      <footer> Temp2 </footer>

      <Link to="/map-navigation">
        <strong>buscar</strong>
      </Link>
    </div>
  )
}

export default Home

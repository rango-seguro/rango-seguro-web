import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

import cover1 from '../../assets/cover1.png'

const Restaurant = () => {
  return (
    <>
      <Header />

      <Link to="/map-navigation">
        <strong>buscar no mapa</strong>
      </Link>

      <div className="p-3">
        <h1 className="text-info">Restaurante 1</h1>
        <h3>Uma forma diferente</h3>
        <div>
          <img
            src={cover1}
            alt="imagem do restaurante"
            className="w-25 rounded-circle"
          />
        </div>
      </div>
    </>
  )
}

export default Restaurant

import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

const MapNavigation = () => {
  return (
    <>
      <Header />

      <Link to="/outlet">
        <strong>ver lojas</strong>
      </Link>
    </>
  )
}

export default MapNavigation

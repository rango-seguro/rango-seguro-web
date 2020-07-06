import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Card from '../../components/Card'

import cover1 from '../../assets/cover1.png'
import cover2 from '../../assets/cover2.png'

const Outlet = () => {
  return (
    <>
      <Header />

      <Link to="/map-navigation">
        <div className="text-right pr-1">
          <strong>
            {' '}
            buscar no mapa <i class="fa fa-reply" />
          </strong>
        </div>
      </Link>
      <div className="row">
        <div className="col-md-6 col-sm-12 my-0">
          <Card imgsrc={cover1} />
        </div>
        <div className="col-md-6 col-sm-12">
          <Card imgsrc={cover2} />
        </div>
      </div>
    </>
  )
}

export default Outlet

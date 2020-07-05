import React, { Component } from 'react'
import Card from './index'
import { render } from '@testing-library/react'

import cover1 from '../../assets/cover1.png'
import cover2 from '../../assets/cover2.png'
import cover3 from '../../assets/cover3.png'

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
        </div>
      </div>
    )
  }
}

export default Cards

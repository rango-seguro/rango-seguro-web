import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from './style'

import Header from '../../components/Header'
import logo from '../../assets/logo.png'

import './style.css'

const Home = () => {
  return (
    <>
      <Header />

      <Container className="bg-light">
        <div>
          <img src={logo} alt="logo" width={'100%'} height={'50%'} />
          <Link className="d-flex justify-content-center pt-5" to="/map-navigation">
            <Button className="btn btn-outline-danger btn-lg"> Procurar </Button>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Home

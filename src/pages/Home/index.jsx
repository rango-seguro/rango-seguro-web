import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from './style'

import Header from '../../components/Header'
import logo from '../../assets/logo_test.jpeg'

import './style.css'

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <div className="imgContainer">
          <img src={logo} alt="logo" width="50%" height="50%" />
          <Link to="/map-navigation" className="searchButton">
            <Button> Procurar </Button>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Home

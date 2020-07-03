import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from './style'

import Header from '../../components/Header'
import logo from '../../assets/logo_test.jpeg'

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <div>
          <img src={logo} alt="logo" width={'100%'} height={'50%'} />
          <Link to="/map-navigation">
            <Button> Procurar </Button>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Home

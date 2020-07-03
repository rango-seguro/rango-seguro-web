import React from 'react'
import styled from 'styled-components'

import Dropdown from '../Dropdown'

export const Container = styled.div`
  height: 10%;
  width: 100%;
`

export const Button = styled.button`
  opacity: 0.9;
  height: 100%;
`

const Header = () => {
  return (
    <Container>
      <Dropdown></Dropdown>
    </Container>
  )
}

export default Header

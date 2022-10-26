import React from 'react'
import styled from "styled-components"


function Header() {
  return (
    <Container>
      <a href="tesla.com">
        <img src="/images/logo.svg" alt=""></img>
      </a>

      <Menu>
        <a href='model.com'>Model S</a>
        <a href='model.com'>Model 3</a>
        <a href='model.com'>Model X</a>
        <a href='model.com'>Model Y</a>
      </Menu>

      <RightMenu>
        <a href="shop.com">Shop</a>
        <a href="tesla.com">Tesla Account</a>
        
      </RightMenu>
      
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height = 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;



`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }

`



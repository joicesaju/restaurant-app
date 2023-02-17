import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn3.vectorstock.com/i/1000x1000/44/57/red-restaurant-icon-vector-6224457.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            FIND ___YOUR___RESTAURENT 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
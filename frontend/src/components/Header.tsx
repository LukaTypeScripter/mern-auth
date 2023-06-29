import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {FaSignInAlt,FaSignOutAlt} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
function Header() {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to={'/'}>
            <Navbar.Brand >MERN App</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <LinkContainer to={"/login"}>
                    <Nav.Link >
                        <FaSignInAlt /> sign in
                    </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/register"}>
                    <Nav.Link href="/login">
                        <FaSignInAlt /> sign up
                    </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  )
}

export default Header
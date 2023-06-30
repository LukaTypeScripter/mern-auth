import React from 'react'
import { Container, Nav, Navbar,NavDropdown,Badge } from 'react-bootstrap'
import {FaSignInAlt,FaSignOutAlt} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap'
import { AuthState } from '../slices/authSlice';
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

function Header() {
    const { userInfo } = useSelector((state: { auth: AuthState }) => state.auth);
    const [logoutApiCall] = useLogoutMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = async () => {
try {
    await logoutApiCall("").unwrap();
    dispatch(logout())
    navigate('/')
} catch (error) {
    console.log(error)
}
    }
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
                    {userInfo ? (
                        <>
                        <NavDropdown title={String(userInfo.name)} id='username'>
                            <LinkContainer to={`/profile`}>
                                <NavDropdown.Item>
                                    Profile
                                </NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                        </NavDropdown>
                        </>
                    ) : (
                        <>
                        <LinkContainer to={"/login"}>
                    <Nav.Link >
                        <FaSignInAlt /> sign in
                    </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/register"}>
                    <Nav.Link href="/login">
                        <FaSignOutAlt /> sign up
                    </Nav.Link>
                    </LinkContainer>
                        </>
                    )}
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  )
}

export default Header
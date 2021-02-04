import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
        return (
                <header>
                    <Navbar bg="light" expand="lg" collapseOnSelect>
                        <Container>
                            <LinkContainer to="/">
                                <Navbar.Brand>Security Ops Club</Navbar.Brand>
                            </LinkContainer>
                            
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <LinkContainer to="/doc">
                                        <Nav.Link>Official Club Document</Nav.Link>
                                    </LinkContainer>      
                                    <LinkContainer to="/donate">
                                        <Nav.Link>Donate</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/login">
                                        <Nav.Link>Login</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/registration">
                                        <Nav.Link>Register</Nav.Link>
                                    </LinkContainer>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
            )
}

export default Header

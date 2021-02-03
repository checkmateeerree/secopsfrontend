import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const LoggedInHeader = () => {
        const logOutFunction = () => {
            localStorage.removeItem("token")
            window.location.href = "/"
        }
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
                                    <NavDropdown title="About the Club" id="basic-nav-dropdown">
                                        <LinkContainer to="/doc/0">
                                            <NavDropdown.Item>Part 0: Our Mission and Objective</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/doc/1">
                                            <NavDropdown.Item>Part 1: Target Members, Training, and Results</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/doc/2">
                                            <NavDropdown.Item>Part 2: Fields of Study</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/doc/3">
                                            <NavDropdown.Item>Part 3: Positions and Leadership Path</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/doc/4">
                                            <NavDropdown.Item>Part 4: Finances</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/doc/5">
                                            <NavDropdown.Item>Part 5: Possible Risks of the Club and Our Solutions</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/doc/6">
                                            <NavDropdown.Item>Part 6:  A Comparison to Other Existing Clubs</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>
                                    <LinkContainer to="/profile">
                                        <Nav.Link>Profile</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/donate">
                                        <Nav.Link>Donate</Nav.Link>
                                    </LinkContainer>

                                    <Nav.Link onClick={() => window.location.href="https://zoom.us"}>Club Zoom Link</Nav.Link>
                             
                                    <Nav.Link onClick={logOutFunction}>Logout</Nav.Link>
                                   
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
            )
}

export default LoggedInHeader

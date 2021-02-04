import React from 'react'
import Cookies from 'js-cookie'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container} from 'react-bootstrap'

const LoggedInHeader = ({isAdmin}) => {
        const logOutFunction = () => {
            Cookies.remove('token')
            window.location.href = "/"
        }
        const checkForCookies = () => {
            const token = Cookies.get('token')
            if (!token){
                window.location.href="/"
                return 
            }
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
                                    {isAdmin ? 
                                    <LinkContainer to="/admindashboard">
                                        <Nav.Link onClick={checkForCookies}>Admin Dashboard</Nav.Link>
                                    </LinkContainer> : ''}
                                    <LinkContainer to="/doc">
                                        <Nav.Link onClick={checkForCookies}>Official Club Document</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/profile">
                                        <Nav.Link onClick={checkForCookies}>Profile</Nav.Link>
                                    </LinkContainer>
                                    
                                    <LinkContainer to="/donate">
                                        <Nav.Link onClick={checkForCookies}>Donate</Nav.Link>
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

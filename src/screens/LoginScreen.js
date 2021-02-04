import React, {useState} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'

const LoginScreen = () => {

    const [studentID, changeStudentID] = useState('')
    const [password, changePassword] = useState('')

    const studentIDListener = (e) => {
        changeStudentID(e.target.value)
    }
    const passwordListener = (e) => {
        changePassword(e.target.value)
    }
    const submitListener = async(e) => {
        e.preventDefault()
        axios.post('https://secopsapi.herokuapp.com/api/login', {
            "studentID": studentID, "password": password
        }).then((res) => {
            const token = res.data.token 
            if (token){
                Cookies.set('token', token, { path: '/', expires: res.data.expiresIn/24/60/60})
                window.location.href = "/"
            }
            
        }).catch((err) => {
            console.log(err)
        })
    }
   
    return (
        <div className="py-3">
            <Container>
            <Row>
                <Col style={{"padding": "3vh", "paddingBottom": "10vh", "border": "0px solid black", "borderBottom": "0px", "backgroundColor": "white"}}>
                    <h3 className="text-center" style={{"marginBottom": "3vh", "color": "black"}}>Login To Your Account</h3>
                    <Form onSubmit={submitListener} style={{"width": "50%", "padding": "5vh", "margin": "0 auto", "border": "1px solid grey", "backgroundColor": "white"}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label column="lg">Student ID</Form.Label>
                            <Form.Control size="lg" onChange={studentIDListener} type="text" placeholder="Enter ID" required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label column="lg">Password</Form.Label>
                            <Form.Control size="lg" onChange={passwordListener} type="password" placeholder="Password" required/>
                        </Form.Group>
                        <p>Forgot your password? It was sent to your email upon registration.</p>
                        <div className="text-center">
                            <Button size="lg" variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>  
            </Container>
        </div>
    )
}

export default LoginScreen

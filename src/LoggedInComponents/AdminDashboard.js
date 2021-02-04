import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Card, Container, Col, Row, Button, Form } from 'react-bootstrap'

const token = Cookies.get('token')

const AdminDashboard = () => {
    const [users, setUsers] = useState()
    const [meetingsAttended_, setMeetingsAttended_] = useState()
    useEffect(() => {
        const fetchData = () => {
            axios.get('https://secopsapi.herokuapp.com/api/users', {headers: {authorization: `Bearer ${token}`}}).then((res) => {
            setUsers(res.data.message)
        })} 
        fetchData()
    }, [])

    if (!users) {
        return (
            <div className="py-3">
                <Container>
                    <h1 className="text-center">Club Members</h1>
                </Container>
            </div>
        )
    }else {
        const changeTotalMeetings = (e) => {
            setMeetingsAttended_(parseInt(e.target.value))
        }

        const submitHandler = (e) => {
            e.preventDefault()
            console.log(meetingsAttended_)
            axios.put('https://secopsapi.herokuapp.com/api/changetotalmeetings', {meetingsAttended_}, {headers: {authorization: `Bearer ${token}`}}).then((res) => {
                console.log(res)
            })
        }
        return (
            
            <div className="py-3">
                <Container>
                    <h1 className="text-center" style={{"paddingBottom": "1vh"}}>Club Members</h1>
                    <div style={{"display": "flex", "justifyContent": "space-around", "paddingBottom": "4vh"}}>
                    <Form className="text-center" onSubmit={submitHandler}>
                        <Form.Group controlId="formBasicText">
                            <Form.Label><h4>Change Total Meetings</h4></Form.Label>
                            <Form.Control type="text" placeholder="Enter total meetings" onChange={changeTotalMeetings}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Change
                        </Button>
                    </Form>
                    </div> 
                    <Row>
                    {users.map((user, idx) => {
                        return (
                        <Col key={idx} xs="auto" style={{"margin": '0 auto'}}>
                            <Card style={{ width: '35vw', "marginBottom": "2vw"}}>
                                <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.vanasconstruction.com%2Fwp-content%2Fuploads%2F2014%2F10%2FPicture-1-LHS-NIGHT_ENTRANCE.jpg&f=1&nofb=1" />
                                <Card.Body>
                                    <Card.Title>Name: {user.firstName} {user.lastName}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Student ID: {user.studentID}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Email: {user.email}</Card.Subtitle>
                                    <Card.Text>
                                        Graduating in {user.gradYear}!<br />
                                        Total meetings attended: {user.meetingsAttended}<br />
                                       
                                        Years in club: {user.yearsInClub} <br />
                                        {user.leadershipPosition ? "Leadership position: " + user.leadershipPosition : ""}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                     })}
                    </Row>
                </Container>
            </div>
        )
    }


   

    
}

export default AdminDashboard

import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Container } from 'react-bootstrap'

const token = Cookies.get('token')

const Schedule = () => {
    const [meetingDates, setMeetingDates] = useState()
    useEffect(() => {
    const fetchData = () => {
        axios.get('https://secopsapi.herokuapp.com/api/dates', {headers: {authorization: `Bearer ${token}`}}).then((res) => {
        setMeetingDates(res.data['meetings'])
    })} 
    fetchData()
    }, [])
    if (meetingDates){

        const meetings = meetingDates.map(date_ => {
            return {title: "Club Meeting", date: date_.meetingDate}
        })

        console.log(meetings)
        
        return (
            <Container>
                <div className="text-center" style={{"border": "1px solid black", "padding": "6vh"}}>
                    <h1>Club Meeting Schedule</h1>
                    
                        <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
    
                        events={
                            meetings
                        }
                        />
                </div>
            </Container>
          )
    }

    return (
        <div>

        </div>
    )
    
}

export default Schedule

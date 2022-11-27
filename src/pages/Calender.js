import React, {useState,useRef} from "react";

import NavBar from '../components/NavBar';
import TabsBar from '../components/TabsBar';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEventModal from "./AddEventModal";
import axios from "axios"; 
import moment from 'moment';

export default function Calender() {

    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState()
    const calendarRef = useRef(null);
    

    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title
        });
    }

    async function handleEventAdd(data){
        await axios.post("http://localhost:5000/api/calendar/create-event",data.event);
    }

    async function handleDatesSet(data){
        const response = await axios.get("http://localhost:5000/api/calendar/get-events?start="+moment(data.start).toISOString())
        setEvents(response.data);
    }

    const div_style = {
        height: '100vh',
    };

    const section_style = {
        margin: "auto",
        padding: "30px",
        width: "80%",
        textALign: "center",
        fontSize: "25px",
        marginTop: "20px",
        borderRadius: "20px",
        color: "black",
        backgroundColor: "#92d19d",
        fontFamily: "'Aero_03', sans-serif",
    }
    return (
        <div style={div_style}>
            <NavBar />
            <TabsBar />
            <section style={section_style}>
                <button onClick={()=>setModalOpen(true)}>Add Event</button>
                <FullCalendar
                    ref={calendarRef}
                    events = {events}
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    eventAdd={(event) => handleEventAdd(event)}
                    datesSet={(date) => handleDatesSet(date)}
                />

                <AddEventModal isOpen={modalOpen} onClose ={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/>
            </section>
        </div>
    );
}

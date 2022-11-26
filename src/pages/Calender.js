import React from "react";

import NavBar from '../components/NavBar';
import TabsBar from '../components/TabsBar';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calender() {
    const div_style={
            height:'100vh',
        };
    
    const section_style = {
        margin:"auto",
        padding:"30px",
        width: "75%",
        textALign:"center",
        fontSize:"25px",
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
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
            />
            </section>
        </div>
    );
}
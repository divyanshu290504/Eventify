import React from 'react';

export default function TabsBar() {
    const div_style={
        display:"flex",
        align:"center",
        justifyContent:"space-evenly",
        backgroundColor:"#52639e",
    }
    const a_style={
        cursor: 'pointer',
        marginLeft:"20px",
        marginRight:"20px",
        marginBottom:"10px",
        color:"black",
        fontSize:"25px",
        fontAlign:"center"
    }
    return (
        <div style={div_style}>
            <a href="/events" style={a_style}>Events</a>
            <a href="/calender" style={a_style}>Calender</a>
        </div>
    );
}
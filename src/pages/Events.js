import React, { useState } from "react";

import NavBar from '../components/NavBar';
import TabsBar from '../components/TabsBar';

import df_img from '../images/event_df.jpg'
import image1 from '../images/event1.jpg'
import image2 from '../images/event2.jpg'
import image3 from '../images/event3.jpg'
import image4 from '../images/event4.jpg'
import axios from "axios";

const time1 = "6:00 PM"
const date1 = "29/11/2022"
const venue1 = "Orion Mall"

const time2 = "7:00 PM"
const date2 = "30/11/2022"
const venue2 = "Phoenix Mall"

const time3 = "9:00 PM"
const date3 = "28/11/2022"
const venue3 = "Nexus"

export default function Events() {

    const [imgmain, setimg] = useState(df_img)
    const [timemain, settime] = useState()
    const [datemain, setdate] = useState()
    const [venuemain, setvenue] = useState()

    
    async function handlesubmit(data){
        await axios.post("http://localhost:5000/api/calendar/create-event",data.event);
    }

    function handlechange1() {
        setimg(image1)
        settime(time1)
        setdate(date1)
        setvenue(venue1)
    }

    function handlechange2() {
        setimg(image2)

        settime(time2)
        setdate(date2)
        setvenue(venue2)

    }
    function handlechange3() {
        setimg(image3)
        settime(time3)
        setdate(date3)
        setvenue(venue3)

    }
    
    const div_style = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-blue-purple-gradient-color-background-website-banner-graphic-design_120819-729.jpg')"
    };
    // const [events, setEvents] = useState()

    // async function handleEventSet(data){
    //     const response = await axios.get("http://localhost:5000/events/get-event")
    //     setEvents(response.data);
    //     console.log(events)
    // }

    const img_style={
        height: "200px", width: "300px",marginBottom:"10px"
    }

    const img_div_style= {
        marginBottom:"10px"
    }
    return (
        <div style={div_style}>
            <NavBar />
            <TabsBar />
            <div style={{ height: "1000px", flex: "flex" }}>
                <div style={{ height:"1000px",width: "20%", float: "left", overflowY: "scroll" }}>
                    <div style={{marginBottom:"10px"}}>
                        <img src={image1} style={img_style} onClick={() => handlechange1()}></img>
                        {/* <h4>Time: {time1}</h4>
                        <h4>Date: {date1}</h4>
                        <h4>Venue: {venue1}</h4> */}
                        <button onClick={() => handlechange1()} style={{ color: "white", background: "purple"}}>SHOW</button>
                    </div>
                    <div style={img_div_style}>
                        <img src={image2} style={img_style} onClick={() => handlechange2()}></img>
                        {/* <h4>Time: {time2}</h4>
                        <h4>Date: {date2}</h4>
                        <h4>Venue: {venue2}</h4> */}
                        <button onClick={() => handlechange2()} style={{ color: "white", background: "purple"}}>SHOW</button>
                    </div>
                    <div style={{marginBottom:"10px"}}>
                        <img src={image3} style={img_style} onClick={() => handlechange3()}></img>
                        {/* <h4>Time: {time3}</h4>
                        <h4>Date: {date3}</h4>
                        <h4>Venue: {venue3}</h4> */}
                        <button onClick={() => handlechange3()} style={{ color: "white", background: "purple"}}>SHOW</button>
                    </div>
                    <div style={{marginBottom:"10px"}}>
                        <img src={image4} style={img_style} onClick={() => handlechange3()}></img>
                        {/* <h4>Time:</h4>
                        <h4>Date:</h4>
                        <h4>Venue:</h4> */}
                        <button onClick={() => handlechange3()} style={{ color: "white", background: "purple"}}>SHOW</button>

                    </div>



                </div>
                <div style={{ width: "80%", float: "right" }}>
                    <img src={imgmain} style={{ height: "400px", width: "600px", marginLeft: "300px", marginTop: "30px", marginBottom: "10px", borderRadius: "10px",border:"3px solid black"}}></img>
                    <h3 style={{marginLeft:"300px"}}>Time: {timemain}</h3>
                    <h3 style={{marginLeft:"300px"}}>Date: {datemain}</h3>
                    <h3 style={{marginLeft:"300px"}}>Venue: {venuemain}</h3>
                    <button onClick={(event) => handlesubmit(event)} style={{ color: "white", background: "purple",marginLeft:"300px"}}>Add Event</button>
                </div>

            </div>
        </div>
    );
}
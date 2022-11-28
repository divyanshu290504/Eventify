import React, { useState } from "react";

import NavBar from '../components/NavBar';
import TabsBar from '../components/TabsBar';
import Event1List from "../components/Event1List";
import df_img from '../images/event_df.jpg'
import axios from "axios";

const time1 = "6:00 PM"
const date1 = "29/11/2022"
const venue1 = "Orion Mall"

class Events extends React.Component {
    constructor(props) {
        super(props);

        this.state = { events: [], imgmain: { df_img }, timemain: { time1 }, datemain: { date1 }, venuemain: { venue1 } };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/event1')
            .then(response => {
                console.log(response.data)
                this.setState({ events: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
        console.log(this.state.events)
    }
    
    render() {
        const div_style = {
            minHeight:'250vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-blue-purple-gradient-color-background-website-banner-graphic-design_120819-729.jpg')"
        };
        const img_div_style = {
            marginBottom: "10px"
        }
    
        const img_style = {
            height: "200px", width: "300px", marginBottom: "10px"
        }

        const main_img_style = {
            height: "400px",
            width: "600px",
            marginLeft: "300px",
            marginTop: "30px",
            marginBottom: "10px",
            borderRadius: "10px",
            border: "3px solid black"
        }
        
        return (
            <div style={div_style}>
                <NavBar />
                <TabsBar />
                <div style={{ height: "1000px", flex: "flex" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                        {this.state.events.map((event, index) =>
                            <Event1List key={index} title={event["title"]} start={event["start"]} end={event["end"]} desc={event["desc"]} venue={event["venue"]} img={event["img"]}/>
                            )}

                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
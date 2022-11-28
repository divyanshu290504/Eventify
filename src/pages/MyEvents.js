import React from "react";

import EventList from '../components/EventList';
import NavBar from '../components/NavBar';
import TabsBar from '../components/TabsBar';
import axios from "axios"; 
import moment from 'moment';

class MyEvents extends React.Component {
    constructor(props) {
        super(props);

        this.state = { events: [] };
    }

    componentDidMount() {
        const date = new Date();
        axios.get("http://localhost:5000/api/calendar/get-myevents?start="+moment(date).toISOString())
            .then(response => {
                this.setState({ events: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div style= {{minHeight:'713px',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-blue-purple-gradient-color-background-website-banner-graphic-design_120819-729.jpg')"}}>
                <NavBar />
                <TabsBar />
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" ,marginTop:"10px"}}>
                    <h3 style={{display: "flex"}}>Events</h3>
                    <h3 style={{display: "flex"}}>Start Time</h3>
                    <h3 style={{display: "flex"}}>End Time</h3>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                    {this.state.events.map((event, index) => <EventList key={index} event_name={event["title"]} start={event["start"]} end={event["end"]}/>)}
                </div>
            </div>
        );
    }
}
export default MyEvents;
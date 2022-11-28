import React, { useState } from "react";
// import df_img from '../images/event_df.jpg'

const time1 = "6:00 PM"
const date1 = "29/11/2022"
const venue1 = "Orion Mall"
const df_img = "https://assets.website-files.com/5ff4e43997c4ec6aa5d646d1/603d547ed5c5fd6365dabbef_industry%20expert%20roundup%20-%20why%20are%20events%20important.png"
class Event1List extends React.Component {


    constructor(props) {
        super(props);
        this.state = { events: [], imgmain: df_img, timemain: "", datemain: "", venuemain: "" };
    }

    handlechange1 = () => {
        this.setState({ imgmain: this.props.img, timemain: this.props.start, datemain: this.props.start, venuemain: this.props.venue })
    }

    componentDidMount() {
        console.log(time1)
        this.setState({ imgmain: df_img, timemain: time1, datemain: date1, venuemain: venue1 }, () => { console.log(this.state.timemain) })
    }
    render() {
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

        var div_style = {
            width: "350px",
            height: "300px",
            padding: "15px",
            margin: "15px",
            textAlign: "center",
            backgroundColor: "#e6abff",
            borderRadius: "10px",
            cursor:"pointer"
        };
        var con_style={
            height: "64.98px",
            width:"190px",
            overflow:"hidden"
        };
        var h4_style = {
            margin: "5px"
        };
        return (
            <div>
                {/* <div style={{ height: "1000px", width: "20%", float: "left", overflowY: "scroll" }}>
                    <div style={{ marginBottom: "10px" }}>
                        {this.props.title}
                        <img src={this.props.img} style={img_style} onClick={this.handlechange1}></img>
                        <button onClick={this.handlechange1} style={{ color: "white", background: "purple" }}>SHOW</button>
                    </div>
                </div> */}

                <div style={div_style}>
                    <img src={this.props.img} style={img_style} alt="Novel Cover" />
                    <div style={con_style}>
                        <h4 style={h4_style}>{this.props.title}</h4>
                    </div>
                </div>
                {/* 
                <div style={{ width: "80%",float:"right"}}>
                    <img src={this.state.imgmain} style={main_img_style}></img>
                    <h3 style={{ marginLeft: "300px" }}>Time: {this.state.timemain}</h3>
                    <h3 style={{ marginLeft: "300px" }}>Date: {this.state.datemain}</h3>
                    <h3 style={{ marginLeft: "300px" }}>Venue: {this.state.venuemain}</h3>
                    <button onClick={this.handlechange1} style={{ color: "white", background: "purple", marginLeft: "300px" }}>Add Event</button>
                </div> */}
            </div>
        );
    }
}

export default Event1List;
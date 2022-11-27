import React from 'react'
import logo from '../images/icon.png'
import Footer_desc from "./Footer"
// import club_logo from "../images/nexus_logo.png"

export default function Footer() {
  return (
    <div style={{backgroundColor:"#031f47"}}>
    <div className="footer_logo_link">
        <Footer_desc />
    </div>
    <div className="footer_rights" style={{ display: "flex", flexWrap: "wrap", color:"white",  justifyContent: "space-evenly" }}>
                <div>Eventify {new Date().getFullYear()} • All rights reserved</div>
                <div>Made with ❣️ by Eventify Team</div>
            </div>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <img className="footer_pes_logo" src={logo} alt="college logo" height = "50px" width = "50px" ></img>
        </div>
    </div>
  )
}
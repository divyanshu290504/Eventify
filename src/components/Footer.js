import React from 'react'
import linkedin from '../images/linkedin.png'
import discord from '../images/discord.png'
import insta from '../images/instagram.png'
import mail from "../images/mail.png"
//import FooterMod from "./FooterMod"

export default function Footer_desc() {
    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", marginTop:"10px", marginBottom:"10px"}}>
                <a href=""><img src={insta} className="footer_social_icons" alt="social media" height = "35px" width = "35px" /></a>
                <a href=""><img src={linkedin} className="footer_social_icons" alt="social media"height = "35px" width = "35px" /></a>
                <a href=""><img src={discord} className="footer_social_icons" alt="social media" height = "35px" width = "35px"/></a>
                <a href=""><img src={mail} className="footer_social_icons" alt="social media" height = "35px" width = "35px"/></a>
            </div>
        </div>
    )
}
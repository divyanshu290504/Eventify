import React from "react";
export default function Text(){
    
    const f_style={
        margin:"auto",
        padding:"30px",
        width: "75%",
        textALign:"center",
        fontSize:"25px",
        marginTop:"50px",
        color: "black",
        fontFamily: "'Aero_03', sans-serif",
        textShadow: "1px 1px black"
    }
    return(
        <>
            {/* <span style={{textAlign:"center"}}>Eventify<br/></span> */}
        <div style={f_style}>There are plenty of events in and around town for you to check out whether you like shopping, learning something new or live shows. Here are the top events that you can attend in your city. 
PS: We've also made it easy for you to plan by listing out some top events that have been lined up. GO grab those early-bird tickets! 
        </div>
        <div style={f_style}>Find the best experiences happening out there in your city or enjoy handpicked content while sitting comfortably at home. Eventify is your go-to place to figure out what to do today! </div>
        
        </>
          
    )
}
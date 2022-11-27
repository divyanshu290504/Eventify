import React from "react";

import NavBar from '../components/NavBar';
import TabsBar from '../components/TabsBar';

export default function Events() {
    const div_style={
            height:'100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-blue-purple-gradient-color-background-website-banner-graphic-design_120819-729.jpg')"
        };
    return (
        <div style={div_style}>
            <NavBar />
            <TabsBar />
        </div>
    );
}
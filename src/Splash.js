import React from 'react'
import splashvid from "./splash.m4v";
import "./splash.css";
const Splash = () => {
    return (
        <div className="Splash">
        <video className='splash-video' autoPlay muted>
            <source src={splashvid} type='video/mp4' />
        </video>
    </div>
    )
}

export default Splash

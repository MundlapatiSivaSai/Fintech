import React from 'react'
import "./navbar.css";
import {Avatar , IconButton} from '@material-ui/core';
import image from "../../fintech_logo.png";
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    const [openprofile , setopenprofile] = React.useState(false);
    const [changenavbar , setchangenavbar] = React.useState(false)

    const navbardrawer = React.useRef(null);
    function changebackground()
    {
        if(window.scrollY >=10)
        setchangenavbar(true);
        else
            setchangenavbar(false);
    }
    window.addEventListener('scroll', changebackground)

    function handlescrolltodiv(e)
    {   
        
        var divobj = document.getElementById(e.target.getAttribute('data-class'));
        var height = divobj.offsetTop;
        
        if (e.target.getAttribute('data-class') == "home")
        height = 0;
        window.scrollTo({
            top : height - 100,
            behavior : 'smooth'
        })

      
    }


    return (<>
        <div className={changenavbar ? 'navbar navbar-active' : 'navbar'}> 
            <div className = "navbar__logo">
                <img src = {image}/>
            </div>
            <IconButton className = "navbar__hamburger__outside" onClick = {() => {navbardrawer.current.style.display = "flex"}}>
                    <MenuIcon/>
            </IconButton>
            <div className = "navbar__links">
                <button onClick = {handlescrolltodiv} data-class = "home">Home</button>
                <button onClick = {handlescrolltodiv} data-class = "pricing">Pricing</button>
                <button onClick = {handlescrolltodiv} data-class = "customers">About Us</button>
                <button onClick = {handlescrolltodiv} data-class = "whyus">Why Us?</button>
                <button onClick = {handlescrolltodiv} data-class = "contact">Contact</button>
            </div>

            <div className = "navbar__profile">
                <IconButton onClick = {() => setopenprofile(openprofile => !openprofile)}>
                    <Avatar src = "https://res.cloudinary.com/dw2h36vj0/image/upload/v1702654543/fjv9cb58dojylqia343t.jpg" />
                    {
                        openprofile ? 
                    <div className = "navbar__profileSetting">
                        <a>Profile Settings</a>
                        <a>My Services</a>
                        <a>Logout</a>
                    </div>
                    : null 
                }
                </IconButton>
            </div>

        </div>
        <div className = "navbar__links__drawer" ref = {navbardrawer}>
            <div>
            <IconButton className = "hamburger__button" onClick = {() => {navbardrawer.current.style.display = "none"}}>
                    <MenuIcon/>
            </IconButton>
            </div>
                <Avatar className = "avatar" src = "https://avatars.githubusercontent.com/u/56871802?v=4" />
                <button onClick = {handlescrolltodiv} data-class = "home">Home</button>
                <button onClick = {handlescrolltodiv} data-class = "pricing">Pricing</button>
                <button onClick = {handlescrolltodiv} data-class = "customers">About Us</button>
                <button onClick = {handlescrolltodiv} data-class = "whyus">Why Us?</button>
                <button onClick = {handlescrolltodiv} data-class = "contact">Contact</button>
        </div>
        </>
    )
}

export default Navbar

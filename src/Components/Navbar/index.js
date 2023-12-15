import React from 'react'
import "./navbar.css";
import { Avatar, IconButton } from '@material-ui/core';
import image from "../../fintech_logo.png";
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    const [openprofile, setOpenprofile] = React.useState(false);
    const [changenavbar, setChangenavbar] = React.useState(false);

    const navbardrawer = React.useRef(null);

    function changeBackground() {
        if (window.scrollY >= 10) {
            setChangenavbar(true);
        } else {
            setChangenavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    function handleScrollToDiv(e) {
        var divObj = document.getElementById(e.target.getAttribute('data-class'));
        var height = divObj.offsetTop;

        if (e.target.getAttribute('data-class') === "home") {
            height = 0;
        }
        window.scrollTo({
            top: height - 100,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div className={changenavbar ? 'navbar navbar-active' : 'navbar'}>
                <div className="navbar__logo">
                    <img src={image} alt="Logo" />
                </div>
                <IconButton className="navbar__hamburger__outside" onClick={() => { navbardrawer.current.style.display = "flex" }}>
                    <MenuIcon />
                </IconButton>
                <div className="navbar__links">
                    <button onClick={handleScrollToDiv} data-class="home">Home</button>
                    <button onClick={handleScrollToDiv} data-class="pricing">Pricing</button>
                    <button onClick={handleScrollToDiv} data-class="customers">About Us</button>
                    <button onClick={handleScrollToDiv} data-class="whyus">Why Us?</button>
                    <button onClick={handleScrollToDiv} data-class="contact">Contact</button>
                </div>

                <div className="navbar__profile">
                    <IconButton onClick={() => setOpenprofile(openprofile => !openprofile)}>
                        <Avatar src="https://res.cloudinary.com/dw2h36vj0/image/upload/v1702654543/fjv9cb58dojylqia343t.jpg" />
                        {openprofile &&
                            <div className="navbar__profileSetting">
                                <button>Profile Settings</button>
                                <button>My Services</button>
                                <button>Logout</button>
                            </div>
                        }
                    </IconButton>
                </div>
            </div>
            <div className="navbar__links__drawer" ref={navbardrawer}>
                <div>
                    <IconButton className="hamburger__button" onClick={() => { navbardrawer.current.style.display = "none" }}>
                        <MenuIcon />
                    </IconButton>
                </div>
                <Avatar className="avatar" src="https://res.cloudinary.com/dw2h36vj0/image/upload/v1702654543/fjv9cb58dojylqia343t.jpg" />
                <button onClick={handleScrollToDiv} data-class="home">Home</button>
                <button onClick={handleScrollToDiv} data-class="pricing">Pricing</button>
                <button onClick={handleScrollToDiv} data-class="customers">About Us</button>
                <button onClick={handleScrollToDiv} data-class="whyus">Why Us?</button>
                <button onClick={handleScrollToDiv} data-class="contact">Contact</button>
            </div>
        </>
    )
}

export default Navbar;

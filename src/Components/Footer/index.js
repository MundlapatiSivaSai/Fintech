import React from 'react'
import "./footer.css";
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';

const Footer = () => {
    return (
        <div className = "footer">
            <div className = "footer__info">
                <div className = "footer__infoContact">
                    <h3>Fintech Pvt. Ltd.</h3>
                    <h6>Contact Us: </h6>
                    <p>+91 9640702408</p>

                    <h6>Email Us: </h6>
                    <p>sivaaliassai1435@gmail.com</p>

                    <h6>Social Media</h6>
                    <div>
                        
                    </div>
                </div>
                <div className = "footer__links">
                    <h4>Quick Links</h4>
                    <a><DoubleArrowOutlinedIcon/> Privacy Policy</a>
                    <a><DoubleArrowOutlinedIcon/> Disclaimer</a>
                    <a><DoubleArrowOutlinedIcon/> About Us</a>
                    <a><DoubleArrowOutlinedIcon/> Contact Us</a>
                    <a><DoubleArrowOutlinedIcon/> SiteMap</a>
                    <a><DoubleArrowOutlinedIcon/> FAQs</a>
                </div>
            </div>

            <div className = "footer__copyright">
                  <p>© 2021 Company Name Pvt. Ltd. All Rights Reserved</p>  
            </div>

        </div>
    )
}

export default Footer

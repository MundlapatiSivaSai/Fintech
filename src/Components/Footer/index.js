import React from 'react';
import "./footer.css";
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__info">
                <div className="footer__infoContact">
                    <h3>Fintech Pvt. Ltd.</h3>
                    <h6>Contact Us: </h6>
                    <p>+91 9640702408</p>

                    <h6>Email Us: </h6>
                    <p>sivaaliassai1435@gmail.com</p>

                    <h6>Social Media</h6>
                    <div>
                        {/* Social media links or icons can go here */}
                    </div>
                </div>
                <div className="footer__links">
                    <h4>Quick Links</h4>
                    {/* Ensure each <a> tag has a valid href attribute */}
                    <a href="/privacy-policy"><DoubleArrowOutlinedIcon/> Privacy Policy</a>
                    <a href="/disclaimer"><DoubleArrowOutlinedIcon/> Disclaimer</a>
                    <a href="/about-us"><DoubleArrowOutlinedIcon/> About Us</a>
                    <a href="/contact-us"><DoubleArrowOutlinedIcon/> Contact Us</a>
                    <a href="/sitemap"><DoubleArrowOutlinedIcon/> SiteMap</a>
                    <a href="/faqs"><DoubleArrowOutlinedIcon/> FAQs</a>
                </div>
            </div>

            <div className="footer__copyright">
                <p>© 2021 Company Name Pvt. Ltd. All Rights Reserved</p>  
            </div>
        </div>
    );
}

export default Footer;

import React from "react";

import './Css/FooterSectionCss.css';

export default function FooterSection(){
    return(
        <div className="footer-section">
            <div className="footer-inner">
                <div className="footer-details">
                    <div className="about-us-section"> <span className="title">ABOUT</span>
                        <div className="contact-us">Contact us</div>
                        <div className="aboute-us">About us</div>
                        <div className="stories">Glam Cart Stories</div>
                    </div>

                    <div className="group-companies-section"> <span className="title">GROUP COMPANIES</span>
                        <div className="contact-us">Myntra</div>
                        <div className="aboute-us">Shopsy</div>
                        <div className="stories">Shop Street</div>
                    </div>

                    <div className="help-section"> <span className="title">HELP</span>
                        <div className="contact-us">Payment</div>
                        <div className="aboute-us">Cancellation</div>
                        <div className="stories">FAQ</div>
                    </div>

                    <div className="consumer-policy-section"> <span className="title">CONSUMER POLICY</span>
                        <div className="contact-us">Cancellation & Returns</div>
                        <div className="aboute-us">Terms Of Use</div>
                        <div className="stories">ERP Compliance</div>
                    </div>
                    
                    <div className="address-section"> <span className="title">Registered Office Address :</span>
                        <div className="contact-us">Shop No.1, Kanher Rd, Suvarngad Aparment Near Travel India Club, Rajendra Nagar, Sadashiv Peth, Pune, Maharashtra 411030, India</div>
                    </div>
                </div>                        
            </div>
        </div>
    )
}
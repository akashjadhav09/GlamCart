import React from "react";
import { GrFireball, GrSafariOption , GrUbuntu , GrCloudlinux  } from "react-icons/gr";

import FooterSection from '../Pages/footer';
import ProfileCard from "../../../widgets/components/ProfileCard";

import './Css/AboutUsCss.css';

export default function AboutUs(){
    return(
        <>
            <div className="home-page-wrapper__outer">
                <div className="home-page-wrapper__inner">
                    <div className="our-story-section">
                        <div className="out-story-desc">
                            <div className="desc-wrapper-inner">
                                <div className="heading"><span>Our Story</span></div>
                                <p className="desc">We believe shopping should be a delightful experience. That's why we created Glam cart a curated destination for fashion and care. Driven by a passion for  quality, sustainability, unique finds, we're committed to bringing you products you'll love, and service you can trust.</p>
                            </div>
                            <img src='../../public/assets/images/LoginPoster.jpg' alt='our-story-poster'/>
                        </div>
                    </div>


                    <div className="card-section">
                        <div className="small-card">
                            <div className="icon"><GrFireball className="icon-inner" /></div>
                            <h4 className="title">10.5k</h4>
                            <p>Trust</p>
                        </div>

                        <div className="small-card">
                            <div className="icon"><GrSafariOption  className="icon-inner" /></div>
                            <h4 className="title">10.5k</h4>
                            <p>Trust</p>
                        </div>

                        <div className="small-card">
                            <div className="icon"><GrUbuntu  className="icon-inner" /></div>
                            <h4 className="title">10.5k</h4>
                            <p>Trust</p>
                        </div>

                        <div className="small-card">
                            <div className="icon"><GrCloudlinux  className="icon-inner" /></div>
                            <h4 className="title">10.5k</h4>
                            <p>Trust</p>
                        </div>

                        <div className="small-card">
                            <div className="icon"><GrFireball className="icon-inner" /></div>
                            <h4 className="title">10.5k</h4>
                            <p>Trust</p>
                        </div>
                    </div>
                    
                    <div className="meet-our-people-section">
                    <div className="heading"><span>Meet The Team</span></div>
                        <div className="profile-wrapper">
                            <ProfileCard
                                image="../../../../public/assets/images/prof-avtar-1.png"
                                name="Shubham Shinde"
                                designation="Lead UI/UX Designer"
                                socialLinks={{
                                linkedin: "https://linkedin.com/in/johndoe",
                                twitter: "https://twitter.com/johndoe",
                                github: "https://github.com/johndoe",
                                }}
                            />

                            <ProfileCard
                                image="../../../../public/assets/images/prof-avtar-2.png"
                                name="Yash Bagal"
                                designation="Operations Manager"
                                socialLinks={{
                                linkedin: "https://linkedin.com/in/johndoe",
                                twitter: "https://twitter.com/johndoe",
                                github: "https://github.com/johndoe",
                                }}
                            />

                            <ProfileCard
                                image="../../../../public/assets/images/prof-avtar-1.png"
                                name="Akash Jadhav"
                                designation=" Front-End Developer"
                                socialLinks={{
                                linkedin: "https://linkedin.com/in/johndoe",
                                twitter: "https://twitter.com/johndoe",
                                github: "https://github.com/johndoe",
                                }}
                            />

                            <ProfileCard
                                image="../../../../public/assets/images/prof-avtar-3.png"
                                name="Anya Sharma"
                                designation="Customer Support Specialist"
                                socialLinks={{
                                linkedin: "https://linkedin.com/in/johndoe",
                                twitter: "https://twitter.com/johndoe",
                                github: "https://github.com/johndoe",
                                }}
                            />

                            <ProfileCard
                                image="../../../../public/assets/images/prof-avtar-5.png"
                                name="Anjali Singh"
                                designation="Digital Marketing Strategist"
                                socialLinks={{
                                linkedin: "https://linkedin.com/in/johndoe",
                                twitter: "https://twitter.com/johndoe",
                                github: "https://github.com/johndoe",
                                }}
                            />
                        </div>
                    </div>
                    <FooterSection/>
                </div>
            </div>
        </>
    )
}
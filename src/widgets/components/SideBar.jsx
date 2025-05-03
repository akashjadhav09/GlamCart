import {React, useState, useRef, useEffect} from "react";
import { Link, useLocation } from 'react-router-dom';

import { FaHome, FaShopify  } from "react-icons/fa";
import { MdCircleNotifications } from "react-icons/md";
import { AiFillMobile } from "react-icons/ai";

import '../componentCss/SideBarWidgetCss.css';

export default function Sidebar({ isOpen, onClose }) {
    const [isHomePageVisible, SetIsHomePageVisible] = useState(false);
    const [isDiscoverDealsVisible, SetIsDiscoverDealsVisible] = useState(false);
    const [isNewArrivalVisible, SetIsNewArrivalVisible] = useState(false);
    const [isAboutUsVisible, SetIsAboutUsVisible] = useState(false);

    const sidebarRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose(); 
            }
        }
        
        SetIsHomePageVisible(location.pathname === '/home');
        SetIsDiscoverDealsVisible(location.pathname === '/shopnow');
        SetIsNewArrivalVisible(location.pathname === '/new-arrivals');
        SetIsAboutUsVisible(location.pathname === '/Aboutus');

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("scroll", handleClickOutside);
        };
    }, [onClose,location.pathname]);

    if (!isOpen) return null;
    return(
        <>
            <div ref={sidebarRef} className="sidebar-main-wrapper__outer h-full bg-slate-200 fixed z-[1]">
                <div className="sidebar-main-wrapper__inner">
                    
                    <div className="profile-circle flex justify-center py-3 border-b border-b-slate-300">
                        <div className="profile-circle h-10 w-10 bg-slate-500 rounded-full my-1"></div>
                    </div>

                    <div className="nav-link-wrapper__outer">
                        <div className="nav-link-wrapper__inner">
                            <div className="nav-link-lable-wrapper">
                                <Link to="/home">
                                    <FaHome className="nav-icon"></FaHome>
                                    <div className={`nav-label ${isHomePageVisible ? 'text-[#5f7ad2]' : ''}`}>Home</div>
                                </Link>
                            </div>
                            <div className="nav-link-lable-wrapper">
                                <Link to="/shopnow">
                                    <FaShopify  className="nav-icon"></FaShopify >
                                    <div className={`nav-label ${isDiscoverDealsVisible ? 'text-[#5f7ad2]' : ''}`}>Discover Deals</div>
                                </Link>
                            </div>
                            <div className="nav-link-lable-wrapper">
                                <Link to="/new-arrivals">
                                    <MdCircleNotifications  className="nav-icon"></MdCircleNotifications >
                                    <div className={`nav-label ${isNewArrivalVisible ? 'text-[#5f7ad2]' : ''}`}>New Arrival</div>
                                </Link>
                            </div>
                            <div className="nav-link-lable-wrapper">
                                <Link to="/Aboutus">
                                    <AiFillMobile  className="nav-icon"></AiFillMobile >
                                    <div className={`nav-label ${isAboutUsVisible ? 'text-[#5f7ad2]' : ''}`}>About Us</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
   
}
import {React, useState, useRef, useEffect} from "react";
import { Link, useLocation } from 'react-router-dom';

import { FaHome, FaShopify  } from "react-icons/fa";
import { MdCircleNotifications } from "react-icons/md";
import { AiFillMobile } from "react-icons/ai";

import '../componentCss/SideBarWidgetCss.css';

export default function Sidebar({ isOpen, onClose, validUser }) {
    const [isHomePageVisible, SetIsHomePageVisible] = useState(false);
    const [isDiscoverDealsVisible, SetIsDiscoverDealsVisible] = useState(false);
    const [isNewArrivalVisible, SetIsNewArrivalVisible] = useState(false);
    const [isAboutUsVisible, SetIsAboutUsVisible] = useState(false);

    const sidebarRef = useRef(null);
    const location = useLocation();

    let currentUserName= "";
    let currentUserid = "";
    let currentUserEmail = "";

    if(validUser){
        currentUserName = `${validUser[0].firstname.trim()} ${validUser[0].lastname.trim()}`;
        currentUserid = validUser[0].userid;
        currentUserEmail = validUser[0].email;
    }

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

    function createNameMonogram(fullName) {
        const parts = fullName.trim().split(' ');
        const first = parts[0]?.charAt(0).toUpperCase() || '';
        const last = parts.length > 1
            ? parts[parts.length - 1].charAt(0).toUpperCase()
            : '';
        return first + last;
    }

    if (!isOpen) return null;
    return(
        <>
            <div ref={sidebarRef} className="sidebar-main-wrapper__outer h-full bg-slate-200 fixed z-[11]">
                <div className="sidebar-main-wrapper__inner">
                    
                    <div className="profile-circle py-3 border-b border-b-slate-300 flex items-center justify-center flex-col">
                        <div className="profile-circle h-10 w-10 bg-violet-400 text-white rounded-full my-1 flex items-center justify-center">
                            {createNameMonogram(currentUserName)}
                        </div>
                        <div className="user-name text-xl font-semibold text-center mb-1">{currentUserName}</div>
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
import React from "react";
import { FaHome, FaShopify  } from "react-icons/fa";
import { MdCircleNotifications } from "react-icons/md";
import { AiFillMobile } from "react-icons/ai";

import '../componentCss/SideBarWidgetCss.css';

export default function Sidebar() {

    return(
        <>
            <div className="sidebar-main-wrapper__outer h-full w-1/5 bg-slate-200 absolute z-[1]">
                <div className="sidebar-main-wrapper__inner">
                    
                    <div className="profile-circle flex justify-center py-3 border-b border-b-slate-300">
                        <div className="profile-circle h-10 w-10 bg-slate-500 rounded-full my-1"></div>
                    </div>

                    <div className="nav-link-wrapper__outer">
                        <div className="nav-link-wrapper__inner">
                            <div className="nav-link-lable-wrapper">
                                <FaHome className="nav-icon"></FaHome>
                                <div className="nav-label">Home</div>
                            </div>
                            <div className="nav-link-lable-wrapper">
                                <FaShopify  className="nav-icon"></FaShopify >
                                <div className="nav-label">Discover Deals</div>
                            </div>
                            <div className="nav-link-lable-wrapper">
                                <MdCircleNotifications  className="nav-icon"></MdCircleNotifications >
                                <div className="nav-label">New Arrival</div>
                            </div>
                            <div className="nav-link-lable-wrapper">
                                <AiFillMobile  className="nav-icon"></AiFillMobile >
                                <div className="nav-label">About Us</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
   
}
import {React, useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import ProfilePopup from "./ProfilePopup";
import { ProductContext } from "../../../context/ProductData";

export default function SignOutPopup(){
    const [isOpenProfilePopup, setIsOpenProfilePopup] = useState(false);
    const { isSignOutPopupVisible, setIsSignOutPopupVisible } = useContext(ProductContext);
    const { validUser, setValidUser } = useContext(ProductContext);
    const popupRef = useRef(null);
    
    const navigate = useNavigate();

    useEffect(()=>{
        const handleClosePop = (event) =>{
            if (popupRef.current && !popupRef.current.contains(event.target)) {        
                // setIsSignOutPopupVisible((prev)=> !prev);
            }
        }

        document.addEventListener('mousedown',handleClosePop);
        document.addEventListener('scroll',handleClosePop);

        return(()=>{
            document.removeEventListener('mousedown',handleClosePop);
            document.removeEventListener('scroll',handleClosePop);
        })
    },[isSignOutPopupVisible])

    const handleClick = (property)=>{
        if(property === "profile"){
            setIsOpenProfilePopup((prev)=> !prev);
        }else{
            navigate('/signin', { replace: true });
            setIsSignOutPopupVisible((prev)=> !prev);
        }
    }

    const handleCloseProfilePopup = ()=>{
        setIsSignOutPopupVisible((prev) => !prev);
        setIsOpenProfilePopup((prev) => !prev)
    }

    return(
        <>
            <div ref={popupRef} className="profile-and-signout-wrapper fixed top-14 right-4 z-50 w-40 bg-white shadow-md rounded-xl border border-gray-200 py-2 flex flex-col">
                <button 
                    className="profile-button w-full text-center px-4 py-2 hover:bg-gray-100 text-text-gray-700 transition-colors text-sm font-medium text-gray-700"
                    onClick={()=>handleClick('profile')}>  Profile                  
                </button>

                <button 
                    className="signout-button w-full text-center px-4 py-2 hover:bg-gray-100 text-text-gray-700 transition-colors text-sm font-medium text-gray-700"
                    onClick={()=>handleClick(' SignOut')}> Sign Out                   
                </button>
            </div>

            {isOpenProfilePopup && <ProfilePopup onClose={handleCloseProfilePopup} validUser={validUser}/>}
        </>
    )
}
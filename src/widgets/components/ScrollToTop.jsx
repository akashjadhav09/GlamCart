import React from "react";
import { FaChevronUp } from "react-icons/fa";
export default function ScrollToTop () {

    function handleButtonClick (){
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    }


    return(
        <div 
            onClick={handleButtonClick}
            className="scroll-to-top-button-wrapper fixed right-2 bottom-4 bg-sky-400 text-white rounded-full p-2 cursor-pointer 
                        animate-bounce transition-all duration-300 hover:scale-110 shadow-lg"
            >
            <FaChevronUp className="text-lg" />
            </div>

    )
}
import React from "react";
import { MdOutlineSupervisedUserCircle, MdShoppingCart, MdOutlineSearch } from "react-icons/md";

import './css/NavbarCss.css'


export default function Navbar() {
  return (
    <nav className="navbar-wrapper-main__outer">
      <div className="navbar-wrapper-main">
        
       <div className="glam-cart-name-wrapper">
        <h2>Glam Cart</h2>
       </div>
       
        <div className="buttons-wrapper">
            <div className="onsale-button-wrapper">
                <h4>On Sale</h4>
            </div>

            <div className="new-arrival-button-wrapper">
                <h4>New Arrival</h4>
            </div>

            <div className="brands-button-wrapper">
                <h4>Brands</h4>
            </div>

            <div className="contact-button-wrapper">
                <h4>Contact</h4>
            </div>
        </div>

       <div className="search-bar-wrapper">
        <div className="search-bar-wrapper__inner">
            <MdOutlineSearch />
            <input type="text" />
        </div>
       </div>

      <div className="cart-and-profile-icon-wrapper">
        <div className="cart-icon-wrapper">
        <MdShoppingCart className="search-icon" />
        </div>

        <div className="profile-icon-wrapper">
        <MdOutlineSupervisedUserCircle />
        </div>
      </div>

      </div>
    </nav>
  );
}

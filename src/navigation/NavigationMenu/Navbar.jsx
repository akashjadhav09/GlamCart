import {React, useContext}from "react";
import { Link, useNavigate } from 'react-router-dom';

import { MdOutlineSupervisedUserCircle, MdShoppingCart,  MdFavorite  } from "react-icons/md";

import { ProductContext } from "../../context/ProductData";
import './css/NavbarCss.css'

export default function Navbar() {
  const navigate = useNavigate();
  const { likedProducts } = useContext(ProductContext);

  function openFavProductList(){
    navigate('/liked-product-page')    
  }

  const handleOpenCart = () =>{
    navigate('/cart-page')
  }

  return (

    <nav className="navbar-wrapper-main__outer">
      <div className="navbar-wrapper-main">
        
       <div className="glam-cart-name-wrapper">
        <h2>Glam Cart</h2>
       </div>
       
        <div className="buttons-wrapper">
            <div className="onsale-button-wrapper">
                <h4 className="nav-btn"><Link to="/home">Home</Link></h4>
            </div>

            <div className="onsale-button-wrapper">
                <h4 className="nav-btn"><Link to="/shopnow">Discover Deals</Link></h4>
            </div>

            <div className="new-arrival-button-wrapper">
                <h4 className="nav-btn"><Link to="/new-arrivals">New Arrival</Link></h4>
            </div>

            <div className="contact-button-wrapper">
                <h4 className="nav-btn"><Link to="/Aboutus">About Us</Link></h4>
            </div>
        </div>

       <div className="search-bar-wrapper">
        <div className="search-bar-wrapper__inner">
            <input className="search-here" type="text" placeholder="search here"/>
        </div>
       </div>

      <div className="cart-and-profile-icon-wrapper">
        <div className="cart-icon-wrapper favourite-icon-wrapper">
        <MdFavorite  className="search-icon" onClick={()=>openFavProductList()}/>
        <span className="fav-count-label">{likedProducts.length ? likedProducts.length : 0}</span>
        </div>

        <div className="cart-icon-wrapper">
        <MdShoppingCart className="search-icon" onClick={()=> handleOpenCart()}/>
        </div>

        <div className="profile-icon-wrapper">
        <MdOutlineSupervisedUserCircle />
        </div>
      </div>

      </div>
    </nav>
  );
}

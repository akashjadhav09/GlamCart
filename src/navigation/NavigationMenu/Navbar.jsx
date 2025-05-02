import {React, useContext, useState}from "react";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineSupervisedUserCircle, MdShoppingCart,  MdFavorite  } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";


import Sidebar from '../../widgets/components/SideBar';
import { ProductContext } from "../../context/ProductData";
import './css/NavbarCss.css'

export default function Navbar() {
  const navigate = useNavigate();
  const { likedProducts, cartProducts } = useContext(ProductContext);
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  function openFavProductList(){
    navigate('/liked-product-page')    
  }

  const handleOpenCart = () =>{
    navigate('/cart-page')
  }

  const handleShowSidebar = ()=>{
    setIsShowSidebar(prev => !prev);
  }

  return (
    <>
    <nav className="navbar-wrapper-main__outer">
      <div className="navbar-wrapper-main">
        
        <div className="logo-hamburger-wrapper__outer flex items-center justify-center gap-4">
          <div className="hamburger-wrapper mx-8 cursor-pointer" onClick={()=> handleShowSidebar()}>
            <GiHamburgerMenu className="block md:hidden"/>
          </div>

        <div className="glam-cart-name-wrapper">
          <h2>Glam Cart</h2>
        </div>
        </div>
       
          <div className="buttons-wrapper hidden md:flex">
            <div className="onsale-button-wrapper">
                <h4 className="nav-btn"><Link to="/home">Home</Link></h4>
            </div>

            <div className="onsale-button-wrapper">
                <h4 className="nav-btn"><Link to="/shopnow">Discover Deals</Link></h4>
            </div>

            <div className="new-arrival-button-wrapper">
                <h4 className="nav-btn"><Link to="/new-arrivals">New Arrival</Link></h4>
            </div>

            <div className="contact-button-wrapper ">
                <h4 className="nav-btn"><Link to="/Aboutus">About Us</Link></h4>
            </div>
          </div>

       {/* <div className="search-bar-wrapper">
        <div className="search-bar-wrapper__inner">
            <input className="search-here" type="text" placeholder="search here"/>
        </div>
       </div> */}

      <div className="cart-and-profile-icon-wrapper">
        <div className="cart-icon-wrapper favourite-icon-wrapper" onClick={() => openFavProductList()}>
          <MdFavorite className="search-icon" />
          {likedProducts.length ? (
            <span className="fav-count-label">
              {likedProducts.length > 0 ? likedProducts.length : 0}
            </span>
          ) :null}         
        </div>

        <div className="cart-icon-wrapper" onClick={()=> handleOpenCart()}>
          <MdShoppingCart className="search-icon -icon-wrapper"/>
          {cartProducts.length ? (
            <span className="cart-count-label">
              {cartProducts.length}
            </span>
          ) : null}
          
        </div>

        <div className="profile-icon-wrapper">
        <MdOutlineSupervisedUserCircle />
        </div>
      </div>

      </div>
    </nav>

    <div className={`md:hidden ${isShowSidebar ?'block' : 'hidden'}`}>
      <Sidebar isOpen={isShowSidebar} onClose={() => setIsShowSidebar(false)}/>
    </div>
    </>
  );
}

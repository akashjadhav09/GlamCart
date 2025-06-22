import {React, useContext, useEffect, useState}from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineSupervisedUserCircle, MdShoppingCart,  MdFavorite  } from "react-icons/md";
import { GoSidebarCollapse } from "react-icons/go";

import Sidebar from '../../widgets/components/SideBar';
import { ProductContext } from "../../context/ProductData";
import SignOutPopup from "../../widgets/custom-modal/ModalWidget/SignOutPopup";

import './css/NavbarCss.css'

export default function Navbar() {
  const { likedProducts, cartProducts, isSignOutPopupVisible, setIsSignOutPopupVisible } = useContext(ProductContext);
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isHomePageVisible, SetIsHomePageVisible] = useState(false);
  const [isDiscoverDealsVisible, SetIsDiscoverDealsVisible] = useState(false);
  const [isNewArrivalVisible, SetIsNewArrivalVisible] = useState(false);
  const [isAboutUsVisible, SetIsAboutUsVisible] = useState(false);
  const { validUser, setValidUser } = useContext(ProductContext);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    SetIsHomePageVisible(location.pathname === '/home');
    SetIsDiscoverDealsVisible(location.pathname === '/shopnow');
    SetIsNewArrivalVisible(location.pathname === '/new-arrivals');
    SetIsAboutUsVisible(location.pathname === '/Aboutus');
  }, [location.pathname]);

  function openFavProductList(){
    navigate('/liked-product-page')    
  }

  const handleOpenCart = () =>{
    navigate('/cart-page')
  }

  const handleShowSidebar = ()=>{
    setIsShowSidebar((prev) => !prev);
  }

  const handleOpenPopup = () =>{
    setIsSignOutPopupVisible((prev) => !prev);
  }

  return (
    <>
    <nav className="navbar-wrapper-main__outer">
      <div className="navbar-wrapper-main">
        
        <div className="logo-hamburger-wrapper__outer flex items-center justify-center gap-4">
          <div className="hamburger-wrapper mx-8 cursor-pointer" onClick={()=> handleShowSidebar()}>
            <GoSidebarCollapse className="block md:hidden"/>
          </div>

        <div className="glam-cart-name-wrapper">
          <h2>Glam Cart</h2>
        </div>
        </div>
       
          <div className="buttons-wrapper hidden md:flex">
            <div className="onsale-button-wrapper">
                <h4 className={`nav-btn ${isHomePageVisible ? 'text-[#571974]' : ''}`}><Link to="/home">Home</Link></h4>
            </div>

            <div className="onsale-button-wrapper">
                <h4 className={`nav-btn ${isDiscoverDealsVisible ? 'text-[#571974]' : ''}`}><Link to="/shopnow">Discover Deals</Link></h4>
            </div>

            <div className="new-arrival-button-wrapper">
                <h4 className={`nav-btn ${isNewArrivalVisible ? 'text-[#571974]' : ''}`}><Link to="/new-arrivals">New Arrival</Link></h4>
            </div>

            <div className="contact-button-wrapper ">
                <h4 className={`nav-btn ${isAboutUsVisible ? 'text-[#571974]' : ''}`}><Link to="/Aboutus">About Us</Link></h4>
            </div>
          </div>

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
          <MdOutlineSupervisedUserCircle onClick={(e)=>handleOpenPopup(e)}/>
        </div>
      </div>

      </div>
    </nav>

    <div className={`md:hidden ${isShowSidebar ?'block' : 'hidden'}`}>
      <Sidebar isOpen={isShowSidebar} onClose={() => setIsShowSidebar(false)} validUser={validUser}/>
    </div>

      {isSignOutPopupVisible && <SignOutPopup/> }
    </>
  );
}

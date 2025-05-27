import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import './App.css'

import SignInForm from './auth/SignIn'
import SignUpForm from './auth/SignUp'
import Navbar from './navigation/NavigationMenu/Navbar'
import HomePage from './navigation/NavigationPages/Pages/HomePage'
import NewArrivalPage from './navigation/NavigationPages/Pages/NewArrival'
import AboutUs from './navigation/NavigationPages/Pages/AboutUs'
import ShopNowPage from './navigation/NavigationPages/Pages/ShopNow'
import ProductDetailModal from './widgets/components/ProductDetailPopup'
import BuyProductPage from './navigation/NavigationPages/Pages/BuyProductPage';
import CartPage from './navigation/NavigationPages/Pages/ProductCartPage';
import FavProductPage from './navigation/NavigationPages/Pages/FavProductPage';

import { ProductContext } from './context/ProductData';
import CustomModal from './widgets/custom-modal/ModalWidget/CustomModal';

function App() {
  const { validUser } = useContext(ProductContext);
  const [clicksPerSecond, setClicksPerSecond] = useState(0);
  const clickTimes = useRef([]);
  const [showPlaceOrderModal, setShowCustomModal] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  
  useEffect(()=>{
    document.addEventListener('click', handleClick);

    return()=>{
      document.removeEventListener('click', handleClick);
    }
  })

  function handleClick(){
    const now = Date.now();

    clickTimes.current.push(now);
    clickTimes.current = clickTimes.current.filter((time) => now - time <= 1000);
    setClicksPerSecond(clickTimes.current.length);

    if(clicksPerSecond > 8){
      setShowCustomModal(true);
      setNotificationMessage('Its bot or any automated script')
    }
  }

  return (
    <>
      <Router>
        <div id='app-container__main'>        
          {validUser.length > 0 && <Navbar/>}
          {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/new-arrivals" element={<NewArrivalPage />} />
            <Route path="/Aboutus" element={<AboutUs />} />
            <Route path="/shopnow" element={<ShopNowPage />} />
            <Route path="/product-detail-modal" element={<ProductDetailModal />} />
            <Route path="/buy-product" element={<BuyProductPage />} />
            <Route path="/cart-page" element={<CartPage />} />
            <Route path="/liked-product-page" element={<FavProductPage />} />
          </Routes>
        </div>
      </Router>

      {showPlaceOrderModal && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <CustomModal onClose={() => setShowCustomModal(false)} message={notificationMessage} handleOkButtonClick={() => setShowCustomModal(false)} iconName={IoCheckmarkCircleOutline}  buttonText={'Ok'}/>
        </div>
      )}
    </>
   
  )
}

export default App;

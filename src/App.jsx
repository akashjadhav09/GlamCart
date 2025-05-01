import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

import LogInForm from './auth/Login'
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
import Sidebar from './widgets/components/SideBar';

function App() {

  return (
    <Router>
      <div id='app-container__main'>

      <div className="sm665:hidden">
        <Navbar/>
      </div>

      <div className="hidden md:block">
        <Sidebar/>
      </div>

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LogInForm />} />
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
  )
}

export default App

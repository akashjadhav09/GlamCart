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

function App() {

  return (
    <Router>
      <div id='app-container__main'>
      <Navbar/>
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/signup" element={<SignUpForm />} />

          <Route path="/new-arrivals" element={<NewArrivalPage />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/shopnow" element={<ShopNowPage />} />
          <Route path="/product-detail-modal" element={<ProductDetailModal />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

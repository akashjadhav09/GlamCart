import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

// import ProductList from './widgets/components/productList'

import LogInForm from './auth/Login'
import SignUpForm from './auth/SignUp'
import Navbar from './navigation/NavigationMenu/Navbar'
import HomePage from './navigation/NavigationPages/Pages/HomePage'
import NewArrivalPage from './navigation/NavigationPages/Pages/NewArrival'
import BrandsPage from './navigation/NavigationPages/Pages/ProductBrand'
import ContactPage from './navigation/NavigationPages/Pages/Contact'
import ShopNowPage from './navigation/NavigationPages/Pages/ShopNow'

function App() {

  return (
    <Router>
      <div id='app-container__main'>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/signup" element={<SignUpForm />} />

          <Route path="/new-arrivals" element={<NewArrivalPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shopnow" element={<ShopNowPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

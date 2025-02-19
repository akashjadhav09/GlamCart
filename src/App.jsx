import './App.css'

// import ProductList from './widgets/components/productList'
import LogInForm from './auth/Login'
import SignUpForm from './auth/SignUp'
import Navbar from './pages/NavigationMenu/Navbar'

function App() {

  return (
    <div id='app-container__main'>
     {/* <ProductList/> */}
     {/* <LogInForm/> */}
     <Navbar/>
     <SignUpForm/>
    </div>
  )
}

export default App

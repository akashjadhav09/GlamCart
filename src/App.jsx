import './App.css'

// import ProductList from './widgets/components/productList'
import LogInForm from './auth/Login'
import SignUpForm from './auth/SignUp'

function App() {

  return (
    <div id='app-container__main'>
     {/* <ProductList/> */}
     <LogInForm/>
     <SignUpForm/>
    </div>
  )
}

export default App

import {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './css/signIn.css'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { ProductContext } from '../context/ProductData';

export default function SignInForm () {
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    const [storedUserData, setStoredUserData] = useState([]);
    const { validUser, setValidUser } = useContext(ProductContext);
    
    const navigate = useNavigate();


    useEffect(()=>{
        setStoredUserData(JSON.parse(localStorage.getItem("users")) || []);
        if (validUser.length > 0) {
            navigate('/home', { replace: true }); 
        }   
    },[validUser])
    
    const handleLogin = () => {
        const matchedUser = storedUserData.find((user) =>
            user.userid === userName && user.pass === userPass
        );
        if(matchedUser){
            alert("logged in...");
            setValidUser([matchedUser]); 
            navigate('/home');
            navigate('/', { replace: true });
        }else{
            alert("Invalid credentials...");
        }

        clearForm();
    };

    function handleRouteToSignUp(){
        navigate('/signup');
    }

    function clearForm(){
        setUserName('');
        setUserPass('');
    }

    return(
        <div className='login-wrapper__outer'>
            <div className='login-main-wrapper__outer'>
                <div className='poster-wrapper'>
                    <img className='login-poster' src='../../public/assets/images/LoginPoster.jpg' alt='login-poster' />
                </div>
                <div className='login-wrapper-inner__main'>
                   <div className='detail-wrapper__outer'>
                        <div className='site-logo-wrapper'>
                            <img className='site-logo' src='../../public/assets/icons/site-icon.jpg' alt='site-logo' />
                            <span>Glam Cart</span>
                        </div>
                        <div className='welcome-message-wrapper'>Welcome</div>
                        <div className='instructions-wrapper'>Please login to your account</div>
                   </div>
                    <div className='credential-wrapper'>
                        <h4>Username</h4>
                        <input  type="text"
                            className="user-input input-type__username" 
                            value={userName}
                            onChange={(e)=>setUserName(e.target.value)}
                            required/>

                        <h4>Password</h4>
                        <div className='password-wrapper'>
                            <input  type={ showPassword ? "text" : "password" } 
                                minLength="4" maxLength="10" 
                                className="user-input input-type__password" 
                                value={userPass}
                                onChange={(e)=>setUserPass(e.target.value)}
                                required/>

                            {showPassword ? 
                                (<span className='show-password-icon' onClick={() => setShowPassword(false)}>
                                    <MdOutlineVisibilityOff/>
                                </span>) 
                                : 
                                (<span className='show-password-icon' onClick={() => setShowPassword(true)}>
                                    <MdOutlineVisibility />
                                </span>)
                            }
                            
                        </div>
                    </div>
                    <div className='forgot-password-msg'>Forgot Password?</div>
                    <button className='login-button' onClick={handleLogin}>Login</button>
                    <div className='signin-required-wrapper'>
                        <div className='signin-required-msg'>Dont't have an account?<span className='signup-label' onClick={handleRouteToSignUp}> Signup</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
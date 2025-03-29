import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './css/LoginCss.css'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

export default function LogInForm () {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
      // Perform login logic
      navigate('/'); // Redirect to home after login
    };
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
                        <div className='welcome-message-wrapper'>Welcome Back</div>
                        <div className='instructions-wrapper'>Please login to your account</div>
                   </div>
                    <div className='credential-wrapper'>
                        <h4>Username</h4>
                        <input  type="text" className="user-input input-type__username" required/>

                        <h4>Password</h4>
                        <div className='password-wrapper'>
                            <input  type={ showPassword ? "password" : "text" }  minLength="4" maxLength="10" className="user-input input-type__password" required/>
                            {showPassword ? 
                                (<span className='show-password-icon' onClick={() => setShowPassword(false)}>
                                    <MdOutlineVisibility />
                                </span>) 
                                : 
                                (<span className='show-password-icon' onClick={() => setShowPassword(true)}>
                                    <MdOutlineVisibilityOff/>
                                </span>)
                            }
                            
                        </div>
                    </div>
                    <div className='forgot-password-msg'>Forgot Password?</div>
                    <button className='login-button'>Login</button>
                    <div className='signin-required-wrapper'>
                        <div className='signin-required-msg'>Dont't have an account?<span> Signup</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

import './css/SignUpCss.css'

export default function SignUpForm (){
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const navigate = useNavigate();

    function handleRouteToSignIn(){
        navigate('/');
    }

    function handleUserInputValues(e, property) {
        const setters = {
            'first-name': setFirstName,
            'last-name': setLastName,
            'email': setEmailId,
            'username': setUserName,
            'password': setPassword,
        };

        const setter = setters[property];
        if (setter) {
            setter(e.target.value);
        }
    }


    function handleStoreDetailsToLocalStorage() {
        const userDetails = {
            firstname: firstName,
            lastname: lastName,
            email: emailId,
            userid: userName,
            pass: password,
        };

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        existingUsers.push(userDetails);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        clearForm();
        handleRouteToSignIn();
    }

    function clearForm() {
        setFirstName('');
        setLastName('');
        setEmailId('');
        setUserName('');
        setPassword('');
    }

    return(
        <div className='signup-main-wrapper__outer'>
            <div className='signup-wrapper__outer'>
                <div className='poster-wrapper'>
                    <img className='signup-poster' src='../../public/assets/images/LoginPoster.jpg' alt='signup-poster' />
                </div>
                <div className='signup-wrapper-inner__main'>
                   <div className='detail-wrapper__outer'>                       
                        <div className='create-account-message'>Create an account</div>
                        <div className='instructions-wrapper'>Already have an account? <span className='signin-label' onClick={handleRouteToSignIn}> Login</span></div>
                   </div>
                    <div className='credential-wrapper'>
                        <div className='user-name-detail-wrapper'>
                           <div className='first-name-wrapper'>
                            <h4>First Name</h4>
                            <input  type="text" 
                            className="user-input"
                            value={firstName} 
                            onChange={(e)=>handleUserInputValues(e,'first-name')}
                            required/>
                           </div>

                           <div className='last-name-wrapper'>
                            <h4>Last Name</h4>
                            <input  type="text" 
                            className="user-input"
                            value={lastName}
                            onChange={(e)=>handleUserInputValues(e,'last-name')}/>                             
                           </div>                            
                        </div>
                   
                        <h4>E-mail</h4>
                        <input  type="text" 
                        className="user-input" 
                        value={emailId}
                        onChange={(e)=>handleUserInputValues(e,'email')}
                        required/>

                        <h4>Username</h4>
                        <input  type="text" 
                        className="user-input" 
                        value={userName}
                        onChange={(e)=>handleUserInputValues(e,'username')}
                        required/>

                        <h4>Password</h4>
                         <div className='password-wrapper'>
                            <input  type={ showPassword ? "password" : "text" }  
                            minLength="4" 
                            maxLength="10" 
                            className="user-input input-type__password" 
                            value={password}
                            onChange={(e)=>handleUserInputValues(e,'password')}
                            required/>
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
                    <div className='term-condition-wrapper'>
                        <input type='checkbox' 
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}/> <span>I agree to the Terms & Conditions</span>
                    </div>
                    <button className={`signup-button ${isChecked ? 'clickable' : 'inactive'}`} onClick={handleStoreDetailsToLocalStorage}>Create Account</button>                
                </div>
            </div>
        </div>
    )
}
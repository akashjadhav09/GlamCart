import {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";

import { ProductContext } from '../context/ProductData';
import CustomModal from '../widgets/custom-modal/ModalWidget/CustomModal';

export default function SignInForm () {
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    const [storedUserData, setStoredUserData] = useState([]);
    const { validUser, setValidUser } = useContext(ProductContext);
    const [showCustomModal, setShowCustomModal] = useState(false);
    const [customModalMessage, setcustomModalMessage] = useState('');

    const navigate = useNavigate();


    useEffect(()=>{
        setStoredUserData(JSON.parse(localStorage.getItem("users")) || []);
        if (validUser.length > 0) {
            navigate('/home', { replace: true }); 
        }   
    },[validUser])
    
    const handleLogin = () => {
        if(!handleVerifyRequiredFields()) return;

        const matchedUser = storedUserData.find((user) =>
            user.userid === userName && user.pass === userPass
        );
        if(matchedUser){
            setValidUser([matchedUser]); 
            setTimeout(() => {
                navigate('/home');  
            }, 1000);
            navigate('/', { replace: true });
        }else{
            alert("Invalid credentials...");
        }

        clearForm();
    };

    function handleRouteToSignUp(){
        navigate('/signup');
    }

    function handleVerifyRequiredFields(){
        if(userName.trim() && userPass.trim()){
            return true;            
        }
        setShowCustomModal(true);
        setcustomModalMessage('Please fill in all required fields.')
    }  

    function clearForm(){
        setUserName('');
        setUserPass('');
    }

    return(
        <div className="flex h-screen items-center justify-center bg-gray-50 px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl bg-white shadow-lg p-6 rounded-2xl">
                <div className="w-full md:w-1/2 max-w-sm h-[200px] md:h-[350px]">
                    <img
                        className="h-full w-full object-cover rounded-2xl"
                        src="../../public/assets/images/LoginPoster.jpg"
                        alt="login-poster"
                    />
                </div>

                <div className="w-full md:w-1/2 max-w-sm">
                    <div className="text-center text-3xl font-semibold mb-2">Welcome</div>
                    <div className="text-center text-gray-600 mb-4 font-medium">
                        Sign in for a better shopping experience
                    </div>

                    <div className="space-y-4">
                        <div>
                        <label className="block font-medium">Username</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder='Enter Username'
                            required
                        />
                        </div>

                        <div>
                        <label className="block font-medium">Password</label>
                        <div className="relative">
                            <input
                            type={showPassword ? "text" : "password"}
                            minLength="4"
                            maxLength="10"
                            placeholder='Enter Password'
                            className="w-full border border-gray-300 rounded-xl px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={userPass}
                            onChange={(e) => setUserPass(e.target.value)}
                            required
                            />
                            <span
                            className="absolute right-3 top-2.5 cursor-pointer text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                            >
                            {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                            </span>
                        </div>
                        </div>

                        <button
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl"
                            onClick={handleLogin}>Sign In
                        </button>
                    </div>

                    <div className="text-center text-sm text-gray-600 mt-4">
                        Don’t have an account?
                    </div>
                    <div
                        className="text-center text-blue-500 hover:underline cursor-pointer text-sm"
                        onClick={handleRouteToSignUp}>Sign Up
                    </div>
                </div>
            </div>

            {showCustomModal && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <CustomModal onClose={() => setShowCustomModal(false)} message={customModalMessage} handleOkButtonClick={() => setShowCustomModal(false)} iconName={RiErrorWarningLine}/>
                </div>
            )}

        </div>

    )
}
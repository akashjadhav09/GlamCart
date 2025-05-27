import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";

import CustomModal from '../widgets/custom-modal/ModalWidget/CustomModal';

export default function SignUpForm (){
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [showCustomModal, setShowCustomModal] = useState(false);
    const [customModalMessage, setcustomModalMessage] = useState('');
    const [isAccountCreated, setIsAccountCreated] = useState(false);
    const [isShowOkButton, setIsShowOkButton] = useState(false);

    const navigate = useNavigate();

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
        if(!handleVerifyRequiredFields()) return;

        const userDetails = {
            firstname: firstName,
            lastname: lastName,
            email: emailId.toLocaleLowerCase(),
            userid: userName,
            pass: password,
        };

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        existingUsers.push(userDetails);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        showAccountCreatedPopup();
        clearForm();
    }

    function handleVerifyRequiredFields(){
        if(firstName.trim() && lastName.trim() && emailId.trim() && userName.trim() && password.trim()){
            return true;            
        }
        setShowCustomModal(true);
        setIsShowOkButton(true);
        setcustomModalMessage('All fields are mandatory, Please complete them.')
    }   

    function showAccountCreatedPopup(){
        setIsAccountCreated(prev => !prev);
        setIsShowOkButton(false);
        setShowCustomModal(true);
        setcustomModalMessage('Account created successfully.')
    }

    function clearForm() {
        setFirstName('');
        setLastName('');
        setEmailId('');
        setUserName('');
        setPassword('');
    }

    function handleRouteToSignIn(){
        navigate('/signin');
    }

    function handleTermsAndConditionClick(){
        const link = document.createElement('a');
        link.href = '../../public/assets/docs/Terms.pdf'; 
        link.download = 'TermsAndConditions.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return(
        <div className="flex h-screen items-center justify-center bg-gray-50 px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl bg-white shadow-lg p-6 rounded-2xl">
                <div className="w-full md:w-1/2 max-w-md h-[200px] md:h-[400px]">
                <img
                    src="../../public/assets/images/LoginPoster.jpg"
                    alt="signup-poster"
                    className="h-full w-full object-cover rounded-2xl"
                />
                </div>

                <div className="w-full md:w-1/2 max-w-md">
                <div className="text-3xl font-bold mb-2 text-center">Create an account</div>
                <div className="text-sm text-center mb-6 text-gray-600">
                    Already have an account?{" "}
                    <span
                    className="text-blue-500 hover:underline cursor-pointer"
                    onClick={handleRouteToSignIn}
                    >
                    Login
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                    <label className="block mb-1 font-medium">First Name</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={firstName}
                        onChange={(e) => handleUserInputValues(e, "first-name")}
                        required
                    />
                    </div>
                    <div>
                    <label className="block mb-1 font-medium">Last Name</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={lastName}
                        onChange={(e) => handleUserInputValues(e, "last-name")}
                    />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block mb-1 font-medium">E-mail</label>
                    <input
                    type="email"
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={emailId}
                    onChange={(e) => handleUserInputValues(e, "email")}
                    required
                    />
                </div>

                <div className="mt-4">
                    <label className="block mb-1 font-medium">Username</label>
                    <input
                    type="text"
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={userName}
                    onChange={(e) => handleUserInputValues(e, "username")}
                    required
                    />
                </div>

                <div className="mt-4">
                    <label className="block mb-1 font-medium">Password</label>
                    <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        minLength="4"
                        maxLength="10"
                        className="w-full border border-gray-300 rounded-xl px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => handleUserInputValues(e, "password")}
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

                <div className="mt-4 flex items-center gap-2">
                    <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <span className="text-sm text-gray-700">
                        I agree to the{' '}
                        <span
                            className="underline hover:text-blue-400 cursor-pointer"
                            onClick={handleTermsAndConditionClick}
                        >
                            Terms & Conditions
                        </span>
                    </span>

                </div>

                <button
                    className={`mt-6 w-full py-2 text-white font-semibold rounded-xl ${
                    isChecked ? "bg-green-500 hover:bg-green-600" : "bg-gray-300 cursor-not-allowed"
                    }`}
                    onClick={handleStoreDetailsToLocalStorage}
                    disabled={!isChecked}
                >
                    Create Account
                </button>
                </div>
            </div>

            {showCustomModal && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <CustomModal onClose={() => setShowCustomModal(false)} message={customModalMessage} handleOkButtonClick={isShowOkButton ? () => setShowCustomModal(false) : () => handleRouteToSignIn()} iconName={isAccountCreated ? IoCheckmarkCircleOutline : RiErrorWarningLine} buttonText={isShowOkButton ? 'Ok' : 'Go To Signin'}/>
                </div>
            )}
        </div>

    )
}
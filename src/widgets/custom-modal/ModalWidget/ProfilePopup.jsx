import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

import { ProductContext } from '../../../context/ProductData';

export default function ProfilePopup({onClose}){
    const { isSignOutPopupVisible, setIsSignOutPopupVisible } = useContext(ProductContext);
    const navigate = useNavigate();

    function handleHomeButtonClick(){
        navigate('/home');
        onClose();
        setIsSignOutPopupVisible(false);
    }
    
    function handleGoToCartButtonClick(){
        navigate('/cart-page');
        onClose();
        setIsSignOutPopupVisible(false);
    }

    return(
        <div
            id="profile-modal"
            className="profile-modal-wrapper fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
            onClick={onClose}
            >
            
            <div
                className="profile-modal-inner bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md"
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex justify-end border-b border-gray-300 pb-1 cursor-pointer' onClick={onClose}>
                    <IoMdClose className='text-2xl text-gray-700' />
                </div>
                <div className="user-avatar w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-xl font-bold text-gray-600 mt-3">
                JD
                </div>
                <div className="user-name text-xl font-semibold text-center mb-1">John Doe</div>
                <div className="user-contact text-sm text-center text-gray-500 mb-1">johndoe@example.com</div>
                <div className="user-address text-sm text-center text-gray-400 mb-4">123 Main St, City</div>

                <div className="button-wrapper flex flex-col gap-2">
                <button
                    className="close-btn bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    onClick={handleHomeButtonClick}
                > Home
                </button>
                <button
                    className="cart-btn bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                    onClick={handleGoToCartButtonClick}
                > Go to Cart
                </button>
                <button
                    className="close-btn bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition"
                    onClick={onClose}
                > Close
                </button>
                </div>
            </div>
        </div>
    )
}
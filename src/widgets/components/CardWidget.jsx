import  {React, useEffect, useState, useContext} from "react";
import {MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";

import { ProductContext } from "../../context/ProductData";
import ToastNotification from './ToastNotification';
import { convertPriceToRupees } from '../../helper/Helper';
import CustomModal from "../custom-modal/ModalWidget/CustomModal";

import '../componentCss/CardWidgetCss.css';

export default function ProductCard({ product, alreadyLikedProductId }) {
    const [isFav, setIsFav] = useState(false);
    const [isShowFavIcon, setIsShowFavIcon] = useState(false);
    const { setSelectedProduct, validUser } = useContext(ProductContext);
    const { addToCart } = useContext(ProductContext);
    const navigate = useNavigate();
    const [toast, setToast] = useState(null);
    const { addToFavProduct } = useContext(ProductContext);
    const { likedProducts, removeFromFavProduct, cartProducts } = useContext(ProductContext);
    const [isProductLiked, setisProductLiked] = useState(false);
    const [likedProductId, setlikedProductId] = useState([]);
    const [isAlreadyInCart, setisAlreadyInCart] = useState(false);
    const [showCustomModal, setShowCustomModal] = useState(false);
    const [customModalMessage, setcustomModalMessage] = useState('');

    const priceInINR = convertPriceToRupees(product.price);
    
    useEffect(() => {
        setIsShowFavIcon(window.location.pathname === "/shopnow" ? true : false);
        const likedIds = likedProducts.map(item => item.id); 
        setlikedProductId(likedIds);
    }, [likedProducts]);
    
    const handleStoreFavouriteProducts = (product) => {   
        const alreadyInFavProduct = likedProducts.some((p) => p.id === product.id);
        
        if(!alreadyInFavProduct){
            addToFavProduct(product);
            setisProductLiked(false);
            setToast('Added in favourite list');            
        }else{
            removeFromFavProduct(product.id);
            setisProductLiked(true);
            setToast('Removed from favourite list');
        }
        
        setIsFav((prev) => !prev);  
        setTimeout(() => setToast(null), 1000);
    };

    const handleNavigateToBuyProductPage = (product)=> { 
         if(validUser.length){
            setSelectedProduct(product);
            navigate("/buy-product", { state: {product} }); 
        }else
        {
            handleNavigateToSignInPage('buy products');
        }          
    }

    const handleAddProductToCart = (product) => {
        if(validUser.length){
            const productID = cartProducts.map((item)=>{
             return item.id;
            })
            if(!productID.includes(product.id)) {
                addToCart(product);
                setToast(`Added to cart`);
            }else{
                setisAlreadyInCart(true);
                setToast(`It's already in your cart`);
            }

            setTimeout(() => setToast(null), 1000);
        }else{
            handleNavigateToSignInPage('add product to the cart')
        }
    };

    function handleNavigateToSignInPage(message){
        setcustomModalMessage(`Please sign in before ${message}.`);
        setShowCustomModal(true);
    }

    function handleSignInRoute(){        
        navigate('/signin')
    }

    
  return (
    <div className="product-card-wrapper__outer">
        {toast && <ToastNotification message={toast} onClose={() => setToast(null)} isDeleted={isProductLiked} isAlreadyInCart={isAlreadyInCart}/>}
        <div className="product-thumbnail-wrapper">
            {isShowFavIcon && 
                <MdFavorite className={`like-btn ${likedProductId.includes(product.id) || alreadyLikedProductId.includes(product.id) ? 'red-color' : 'white-color'}`} onClick={()=>handleStoreFavouriteProducts(product)}/>
            }            
            <img src={product.thumbnail} alt={product.title} className="product-image" />  
        </div>
        <div className="product-details-wrapper">
            <div className="product-name">{product.title}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-disc-wrapper">
                <p className="product-disc">{product.discountPercentage}% <span className="">off</span></p>
                {product.id % 2 === 0 ? (
                    <p className="product-disc product-left-label">Only 2 left</p>
                ):null }
            </div>
            <div className="price-wrapper">
                <p className="product-price">{priceInINR} INR</p>
            </div>
        </div>
        <div className="purchase-btn-wrapper">
            <div className="btn-wrapper">
                <button className="add-to-cart btn" onClick={()=> handleAddProductToCart(product)}>ADD TO CART</button>
                <button className="buy-now btn" onClick={()=> handleNavigateToBuyProductPage(product)}>BUY NOW</button>
            </div>
            <div className="free-delivery-wrapper color-blue">Free Delivery</div>
        </div>

        {showCustomModal && (
            <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <CustomModal onClose={() => setShowCustomModal(false)} message={customModalMessage} handleOkButtonClick={handleSignInRoute} iconName={RiErrorWarningLine}/>
            </div>
        )}
    </div>

  );
}


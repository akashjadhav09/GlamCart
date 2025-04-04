import  {React, useEffect, useState, useContext} from "react";
import {MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { ProductContext } from "../../context/ProductData";
import ToastNotification from './ToastNotification';


import '../componentCss/CardWidgetCss.css';

export default function ProductCard({ product }) {
    const [favProducts, setFavProducts] = useState([]);
    const [isFav, setIsFav] = useState(false);
    const [isShowFavIcon, setIsShowFavIcon] = useState(false);
    const { setSelectedProduct } = useContext(ProductContext);
    const { addToCart } = useContext(ProductContext);
    const navigate = useNavigate();
    const [toast, setToast] = useState(null);
    


    const conversionRate = 83; 
    const priceInINR = (product.price * conversionRate).toFixed(2);

    useEffect(() => {
        setIsShowFavIcon(window.location.pathname === "/shopnow" ? true : false);
    }, []);
    
    const handleStoreFavouriteProducts = (product) => {                
        setFavProducts([...favProducts, product.id]); 
        setIsFav((prev) => !prev);         
    };

    const handleNavigateToBuyProductPage = (product)=> {        
        setSelectedProduct(product);
        navigate("/buy-product", { state: {product} });      
    }

    const handleAddProductToCart = (product) => {
        //need to show popup window which show product added or removed in/from cart.
        addToCart(product);

        setToast(`${product.title} added to cart`);
        setTimeout(() => setToast(null), 1000);
    };

  return (
    <div className="product-card-wrapper__outer">
        {toast && <ToastNotification message={toast} onClose={() => setToast(null)} />}
        <div className="product-thumbnail-wrapper">
            {isShowFavIcon && 
                <MdFavorite className={`like-btn ${isFav ? 'color-red' : 'color-white'}`} onClick={()=>handleStoreFavouriteProducts(product)}/>
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
         
    </div>

  );
}


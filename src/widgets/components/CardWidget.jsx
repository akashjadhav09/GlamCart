import  {React, useEffect, useState, useContext} from "react";
import {MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { ProductContext } from "../../context/ProductData";
import ProductDetailModal from "./ProductDetailPopup";
import '../componentCss/CardWidgetCss.css';

export default function ProductCard({ product }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [favProducts, setFavProducts] = useState([]);
    const [isFav, setIsFav] = useState(false);
    const [isShowFavIcon, setIsShowFavIcon] = useState(false);
    const { setSelectedProduct } = useContext(ProductContext);
    const navigate = useNavigate();


    const conversionRate = 83; 
    const priceInINR = (product.price * conversionRate).toFixed(2);

    useEffect(() => {
        setIsShowFavIcon(window.location.pathname === "/shopnow" ? true : false);
    }, []);
    

    const handleOpenModal = () => {
    setIsOpenModal(true); 
    };

    const handleCloseModal = () => {
    setIsOpenModal(false);  
    };

    const handleStoreFavouriteProducts = (product) => {                
        setFavProducts([...favProducts, product.id]); 
        setIsFav((prev) => !prev);         
    };

    const handleNavigateToBuyProductPage = (product)=>{
        
        setSelectedProduct(product);
        navigate("/buy-product", { state: {product} });      
    }


  return (
    <div className="product-card-wrapper__outer">
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
                <button className="add-to-cart btn">ADD TO CART</button>
                <button className="buy-now btn" onClick={()=> handleNavigateToBuyProductPage(product)}>BUY NOW</button>
            </div>
            <div className="free-delivery-wrapper color-blue">Free Delivery</div>
        </div>
         
        {isOpenModal && <ProductDetailModal product={product} isOpen={isOpenModal} onClose={handleCloseModal} />}
    </div>

  );
}


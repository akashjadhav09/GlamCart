import  {React, useState} from "react";
import {MdFavorite, MdArrowOutward } from "react-icons/md";

import ProductDetailModal from "./ProductDetailPopup";
import '../componentCss/CardWidgetCss.css';

export default function ProductCard({ product }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [favProducts, setFavProducts] = useState([]);
    const [isFav, setIsFav] = useState(false);


    const conversionRate = 83; 
    const priceInINR = (product.price * conversionRate).toFixed(2);

    const handleOpenModal = () => {
    setIsOpenModal(true); 
    };

    const handleCloseModal = () => {
    setIsOpenModal(false);  
    };

    const handleStoreFavouriteProducts = (product) => {
        console.log("product.id ", product.id);
        
        setFavProducts([...favProducts, product.id]); 
        setIsFav((prev) => !prev); 
       
        favProducts.map((item) => {
            console.log(item)
        })
    };


  return (
    <div className="product-card-wrapper__outer">
        <div className="card-wrapper__inner">

            <div className="thumbnail-wrapper">
                <MdFavorite className={`like-btn ${isFav ? 'color-red' : 'color-white'}`} onClick={()=>handleStoreFavouriteProducts(product)}/>
                <img src={product.thumbnail} alt={product.title} className="product-image" />       
                <MdArrowOutward className="more-info-popup-btn" onClick={handleOpenModal}/>
            </div>
           
            <span className="product-name">{product.title}</span>

            <div className="product-detail-wrapper">
                <div className="price-discount-wrapper">
                    <p className="product-price">Price: {priceInINR}INR</p>
                    <p className="product-discount">{product.discountPercentage}% <span className="discoun-label">off</span></p>
                </div>

                <div className="hot-deal-wrapper">
                    {/* <span className="hot-deal-label">Hot Deal</span> */}
                    <span className="product-left-label">Only 2 left</span>
                </div>

                {/* <div className="rating-wrapper">
                    <span className="product-rating">⭐⭐⭐⭐⭐ {product.rating} / 5</span>
                </div> */}

                <div className="delivery-status-wrapper">
                    <span className="delivery-status-label">Free delivery</span>
                    <span className="add-to-cart-btn hot-deal-label">Add to cart</span>
                </div>
            </div>
        </div>

        {isOpenModal && <ProductDetailModal product={product} isOpen={isOpenModal} onClose={handleCloseModal} />}
        
    </div>

  );
}


import React, {useState} from "react";
import { MdClose,MdFavorite } from "react-icons/md";


import "../componentCss/ProductDetailPopupCss.css"; 

export default function ProductDetailModal({product, isOpen, onClose }) {

  if (!isOpen) return null; 

  const [selectedImgPath, setSelectedImgPath] = useState(null);

  const conversionRate = 83; 
  const priceInINR = (product.price * conversionRate).toFixed(0);

  
  const getClikedImagePath = (path)=>{
    setSelectedImgPath(path);
  }

  return (
    <div className="popup-wrapper-outer">          
        <div className="popup-wrapper-inner" >
            <div className="close-button-wrapper-outer">
                <div className="image-preview">Product Details</div>
                <div className="close-button-wrapper-inner" onClick={(e) => e.stopPropagation()}>
                    <MdClose className="close-button"  onClick={onClose} />                        
                </div>
            </div>   

            <div className="product-detail-wrapper__outer">
                <div className="multiple-image-wrapper">
                    {product.images.map((image, index)=>{
                        return(
                            <div key={index} className="small-image-wrapper">  
                                <img src={image} className="product-image-small" onClick={()=>getClikedImagePath(image)}/>      
                            </div>
                        )
                    })}    
                </div>
                                 
                <div className="product-image-wrapper large-image-wrapper">
                    <MdFavorite className="like-btn"/>
                    <img src={selectedImgPath ? selectedImgPath : product.thumbnail} alt={product.title} className="product-image" />      
                </div>

                <div className="product-detail-wrapper__inner">                 
                    <span className="product-title">{product.title}</span>

                    <p className="product-description">{product.description}</p>

                    <span className="special-price-label">Special Price</span>                    
                    <div className="price-dis-wrapper">
                        <p className="product-price">&#8377; {priceInINR}</p>
                        <p className="product-discount">{product.discountPercentage}% off</p>
                    </div>       

                    <p className="product-rating">{product.rating}⭐ <span className="review-label">Total {product.reviews.length} reviews.</span></p>
                    <p className="warranty-label">{product.warrantyInformation}</p> 

                     <div className="purchase-btn-wrapper">
                        <button className="add-to-cart btn">ADD TO CART</button>
                        <button className="buy-now btn">BUY NOW</button>
                    </div>

                </div>               
            </div>        
        </div>
    </div>
  );
}

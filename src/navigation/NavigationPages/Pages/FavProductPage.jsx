import { React, useContext, useState } from "react";

import { ProductContext } from "../../../context/ProductData";
import ToastNotification from '../../../widgets/components/ToastNotification';
import { convertPriceToRupees } from '../../../helper/Helper';

import './Css/FavProductPageCss.css';

function FavProductPage (){
    const { likedProducts } = useContext(ProductContext);
    const [toast, setToast] = useState(null);

    console.log("likedProducts ", likedProducts.length);    

    return(
        <div className="liked-products-wrapper">
            
            {toast && <ToastNotification message={toast} onClose={() => setToast(null)} isDeleted={true}/>}

            {likedProducts.map((product, index) => (
                <div key={index} className="liked-product-card">
                <div className="product-image">
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-pricing">
                    <span className="price">₹{convertPriceToRupees(product.price)}</span>
                    {product.discountPercentage > 0 && (
                        <span className="discount">{product.discountPercentage}% off</span>
                    )}
                    </div>
                    <button className="buy-now-btn">Buy Now</button>
                </div>
                </div>
            ))}
            </div>
    )
}

export default FavProductPage;
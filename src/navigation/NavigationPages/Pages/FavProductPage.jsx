import { React, useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai"; 


import { ProductContext } from "../../../context/ProductData";
import ToastNotification from '../../../widgets/components/ToastNotification';
import { convertPriceToRupees } from '../../../helper/Helper';

import './Css/FavProductPageCss.css';

function FavProductPage (){
    const { likedProducts, removeFromFavProduct } = useContext(ProductContext);
    const [toast, setToast] = useState(null);


    const handleDelete = (id) => {
        removeFromFavProduct(id);
        setToast('Removed from favourite list');
        setTimeout(() => setToast(null), 1000);
    }
    return(
        <>
            <div className="cart-label-wrapper">
                <h3>Your Wish List</h3>
                <h5>{likedProducts.length ? `You have ${likedProducts.length} items in wishlist` : 'Your wishlist is empty. Explore products now!'}</h5>
            </div>

            <div className="liked-products-wrapper">
            
            {toast && <ToastNotification message={toast} onClose={() => setToast(null)} isDeleted={true}/>}
            
            {likedProducts.map((product, index) => (
                <div key={index} className="liked-product-card">
                <div className="delete-icon" onClick={() => handleDelete(product.id)}>
                    <AiFillDelete />
                </div>

                <div className="fav-product-image">
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

        </>
        
    )
}

export default FavProductPage;
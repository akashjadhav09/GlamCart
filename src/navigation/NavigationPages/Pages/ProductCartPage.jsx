import { React, useContext } from "react";

import { ProductContext } from "../../../context/ProductData";
import './Css/ProductCartPage.css';

function CartPage (){
    const { cartProducts } = useContext(ProductContext);
    console.log("cartProducts ", cartProducts);
    
    
    return(
        <div className="cart-page-wrapper__outer">
            <div className="cart-page-wrapper__inner">
                <div className="cart-label-wrapper">
                    <h5>Shopping cart</h5>
                    <h6>You have 3 items in cart</h6>
                </div>
                <div className="product-cart__inner">
                    <div className="thumbnail-wrapper">
                        <img src="" />
                    </div>
                    <div className="product-desc">
                        <div className="product-title">Product Name</div>
                        <div className="product-title">Product Description</div>
                    </div>
                    <div className="product-delete-wrapper">
                        <div>Delete</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;
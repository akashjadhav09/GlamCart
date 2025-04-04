import { React, useContext } from "react";
import { AiFillDelete } from "react-icons/ai";


import { ProductContext } from "../../../context/ProductData";
import './Css/ProductCartPage.css';

function CartPage (){
    const { cartProducts, removeFromCart } = useContext(ProductContext);
    
    return(
        <div className="cart-page-wrapper__outer">
            <div className="cart-page-wrapper__inner">
                <div className="cart-label-wrapper">
                    <h3>Shopping cart</h3>
                    <h5>You have 3 items in cart</h5>
                </div>
                {cartProducts.map((product,index)=>{
                    return(
                    <div key={index} className="product-cart__inner">
                        <div className="thumbnail-wrapper">
                            <img src={product.thumbnail} />
                        </div>
                        <div className="cart-product-details">
                            <div className="product-title">{product.title}</div>
                            <div className="product-description">{product.description}</div>
                        </div>
                        <div className="product-delete-wrapper">
                        <AiFillDelete onClick={()=> removeFromCart(product.id)}/>
                        </div>
                    </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default CartPage;
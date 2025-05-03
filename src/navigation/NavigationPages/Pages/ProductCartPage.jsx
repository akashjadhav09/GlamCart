import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

import { ProductContext } from "../../../context/ProductData";
import ToastNotification from '../../../widgets/components/ToastNotification';

import './Css/ProductCartPage.css';

function CartPage (){
    const { cartProducts, removeFromCart } = useContext(ProductContext);
    const [toast, setToast] = useState(null);
    const { setSelectedProduct } = useContext(ProductContext);
    
    const navigate = useNavigate();

    function navigateToBuyNowPage(product){     
        setSelectedProduct(product);
        navigate("/buy-product", { state: {product} });
    }

    function handleExploreMoreProducts(){
        navigate("/home");
    }

    return(
        <div className="cart-page-wrapper__outer">
             
            {toast && <ToastNotification message={toast} onClose={() => setToast(null)} isDeleted={true}/>}

            <div className="cart-label-wrapper">
                <h3>Shopping Cart</h3>
                <h5>{cartProducts.length ? `You have ${cartProducts.length} items in cart` : 'Your cart is empty. Start shopping now!'}</h5>
            </div>

            {cartProducts && cartProducts.length > 0 ?
            (
                <div className="cart-page-wrapper__inner">
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
                            <MdShoppingCartCheckout onClick={()=> navigateToBuyNowPage(product)} />
                            <AiOutlineDelete onClick={() => {
                                removeFromCart(product.id);
                                setToast(`Removed from cart`);
                                setTimeout(() => setToast(null), 1000);
                                }} />                           
                        </div>
                    </div>
                    )
                })}
                
            </div>
            ) 
            :
            (<div className="product-explore-more-btn text-center m-4">
                <button className="explore-more-btn" onClick={()=> handleExploreMoreProducts()}>Fill Your Cart</button>
            </div>) }            
        </div>
    )
}

export default CartPage;

import { React, useContext, useState } from "react";

import { ProductContext } from "../../../context/ProductData";
import './Css/BuyProductPageCss.css';

function BuyProductPage () {
    const { selectedProduct } = useContext(ProductContext);
    const [selectedImgPath, setSelectedImgPath] = useState(null);

    console.log("selectedProduct ", selectedProduct);

    const getClikedImagePath = (path)=>{
        setSelectedImgPath(path);
    }
    
    return(
        <div className="buy-product-wrapper__outer">
            <div className="buy-product-wrapper__inner">
                <div className="product-image-wrapper">
                    <div className="product-thumbnails-wrapper">
                        {selectedProduct.images.map((image, index)=>{
                            return(
                                <div key={index} className="small-image-wrapper">  
                                    <img src={image} className="product-image-small" onClick={()=>getClikedImagePath(image)}/>      
                                </div>
                            )
                        })}
                    </div>
                    <div className="product-image__inner">
                    <img src={selectedImgPath ? selectedImgPath : selectedProduct.thumbnail} alt={selectedProduct.title} className="product-image" />  
                    </div>
                </div>

                
          

            <div className="wrapper__outer">
            <div className="product-description-wrapper">
                    <div className="product-title-wrapper">{selectedProduct.title}</div>
                    <div className="product-description-wrapper">{selectedProduct.description}</div>
                </div>

                <div className="product-billing-wrapper__outer">
                    <div className="product-billing-wrapper__inner">
                        <div className="product-count-wrapper"></div>
                        <div className="product-delivery-status-wrapper">
                            <div className="free-delivery-wrapper"></div>
                            <div className="return-status-wrapper"></div>
                        </div>
                    </div>

                    <div className="card-details-wrapper__outer">
                        <div className="card-label">Card Details</div>
                        <div className="card-type-wrapper">
                            <div className="master-card">Master</div>
                            <div className="visa-card">Visa</div>
                            <div className="rupay-card">Rupay</div>
                        </div>
                        <div className="card-details__inner">
                            <h5>Name on card</h5>
                            <input type="text" />

                            <h5>Card number</h5>
                            <input type="text" />

                            <div className="card-expiry-wrapper">
                                <h5>expiration Date</h5>
                                <input type="text" />

                                <h5>CVV</h5>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="total-cost__wrapper">
                            <h5>Total</h5>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default BuyProductPage;
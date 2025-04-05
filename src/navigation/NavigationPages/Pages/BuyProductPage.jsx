import { React, useContext, useState } from "react";

import { ProductContext } from "../../../context/ProductData";
import FooterSection from "./footer";

import './Css/BuyProductPageCss.css';

function BuyProductPage () {
    const { selectedProduct } = useContext(ProductContext);
    const [selectedImgPath, setSelectedImgPath] = useState(null);

    const conversionRate = 83; 
    const priceInINR = (selectedProduct.price * conversionRate).toFixed(2);

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
                   
                    <p className="product-rating">
                        {Array.from({ length: Math.round(selectedProduct.rating) }, (_, index) => (
                            <span key={index}>⭐</span>
                        ))}                         
                        <span className="review-label">Total {selectedProduct.reviews.length} reviews</span>
                        <span className="in-stock-label">{selectedProduct.availabilityStatus}</span>  
                    </p>
                   
                    <div className="product-price-wrapper">&#8377; {priceInINR}</div>
                                      
                    <div className="product-description-wrapper">{selectedProduct.description}</div>
                    
                                     
                    {/* <div className="brand-category-wrapper">
                        <span className="badge brand-label">{selectedProduct.brand}</span>
                        <span className="badge category-label">{selectedProduct.category}</span>
                    </div> */}


                    <div className="dimensions-card">
                        <h3>Product Dimensions</h3>
                        <p><strong>Height:</strong> {selectedProduct.dimensions.height} cm</p>
                        <p><strong>Width:</strong> {selectedProduct.dimensions.width} cm</p>
                        <p><strong>Weight:</strong> {selectedProduct.weight} kg/gm</p>
                        <h3>Warranty Information</h3>
                        <p><strong>Weight:</strong> {selectedProduct.warrantyInformation}</p>
                    </div>



                    <div className="product-info-card">
                        <div className="meta-info">
                            <p><strong>Created:</strong> {new Date(selectedProduct.meta.createdAt).toDateString()}</p>
                            <p><strong>Updated:</strong> {new Date(selectedProduct.meta.updatedAt).toDateString()}</p>
                        </div>
                        
                        <div className="shipping-info">
                            🚚 <strong>Shipped Within:</strong> {selectedProduct.shippingInformation}
                        </div>
                        
                        <div className="return-policy">
                            🔄 <strong>Return Policy:</strong> {selectedProduct.returnPolicy}
                        </div>
                    </div>

                  
                    {/* <div className="product-tags-wrapper">
                    {selectedProduct.tags.map((tag, index) => (
                        <span key={index} className="tag-label">{tag}</span>
                    ))}
                </div> */}


                    <div className="reviews-container">
                        <div className="review-heading-wrapper"><span className="review-heading">Consumer Evaluations</span></div>
                        <div className="review-wrapper">
                            {selectedProduct.reviews.length > 0 ? (
                            selectedProduct.reviews.map((review, index) => (
                                <div key={index} className="review-card">
                                <div className="review-header">
                                    <div className="avatar">
                                    {review.reviewerName.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="review-info">
                                    <p className="review-name">{review.reviewerName}</p>
                                    <p className="review-email">
                                        {review.reviewerEmail.replace(
                                        /(.{1}).*(@.*)/,
                                        "$1****$2"
                                        )}
                                    </p>
                                    </div>
                                </div>
                                <p className="review-comment">"{review.comment}"</p>
                                <p className="review-date">{new Date(review.date).toDateString()}</p>
                                </div>
                            ))
                            ) : (
                            <p className="no-reviews">No reviews available.</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="product-billing-wrapper__outer">
                    <div className="product-billing-wrapper__inner">
                        <div className="product-count-wrapper">
                            <h5>Select Count</h5>
                            <input type="number" />
                        </div>
                        <div className="btn-wrapper">
                            <button className="add-to-cart btn">ADD TO CART</button>
                            <button className="buy-now btn">BUY NOW</button>
                        </div>
                    </div>

                    <div className="card-details-wrapper__outer">
                        <div className="card-label">Card Details</div>
                        <div className="card-type-wrapper">
                            <div className="card master-card">Master</div>
                            <div className="card visa-card">Visa</div>
                            <div className="card rupay-card">Rupay</div>
                        </div>
                        <div className="card-details__inner">
                            <h5>Name on card</h5>
                            <input type="text" />

                            <h5>Card number</h5>
                            <input type="text" />

                                <h5>expiration Date</h5>
                                <input type="text" />
                            {/* <div className="card-expiry-wrapper"> */}

                                <h5>CVV</h5>
                                <input type="text" />
                            {/* </div> */}
                        </div>

                        <div className="total-cost__wrapper">
                            <h5>Total</h5>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <FooterSection/>
            
        </div>
    )
}

export default BuyProductPage;
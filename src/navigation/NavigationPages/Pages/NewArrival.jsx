import React from "react";

import ServiceCard from '../../../widgets/components/ServiceCard';
import './Css/NewArrivalPageCss.css';

export default function NewArrivalPage() {
    return (
        <div className="home-page-wrapper__outer">
            <div className="home-page-wrapper__inner">
                <div className="new-arrival-wrapper">
                    <span className="new-arrival-label">New Arrivals</span>
                </div>

                {/* Grid Layout */}
                <div className="new-arrival-grid">  
                    <div className="new-arrival-item-1 item">
                        <img 
                            src="https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png"
                            alt="new-arrival-product" 
                            className="product-image"
                        />
                        <div className="new-arrival-detail-wrapper">
                            <div className="text">Gucci Eau de</div>
                            <div className="description">Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine.consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences</div>
                        </div>
                    </div>          
                    <div className="new-arrival-item-2 item">
                        <img 
                            src="../../../../public/assets/images/cos-1.jpg"
                            alt="new-arrival-product" 
                            className="product-image"
                        />
                        <div className="new-arrival-detail-wrapper">
                            <div className="text">Red Lipstick</div>
                            <div className="description">The Red Lipstick is a classic and bold choice for adding a pop of color to your lips.</div>
                        </div>
                    </div>
                    <div className="new-arrival-item-3 item">
                        <img 
                            src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
                            alt="new-arrival-product" 
                            className="product-image"
                        />
                        <div className="new-arrival-detail-wrapper">
                            <div className="text">Powder Canister</div>
                            <div className="description">The Powder Canister is a finely milled setting powder designed to set makeup and control shine.</div>
                        </div>
                    </div>
                    <div className="new-arrival-item-4 item">
                        <img 
                            src="https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
                            alt="new-arrival-product" 
                            className="product-image"
                        />
                        <div className="new-arrival-detail-wrapper">
                            <div className="text">Chanel Coco Eau De</div>
                            <div className="description">Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood.</div>
                        </div>
                    </div>                    
                </div>
                <ServiceCard/>
            </div>
        </div>
    );
}

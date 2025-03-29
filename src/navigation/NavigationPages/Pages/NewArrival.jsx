import React from "react";

import './Css/NewArrivalPageCss.css';

export default function NewArrivalPage() {
    const newArrivalProducts = [
        { 
          image: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png", 
          text: "Powder Canister",
          description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine."
        },
        { 
          image: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png", 
          text: "Chanel Coco Eau De",
          description: "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood."
        },
        { 
          image: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png", 
          text: "Gucci Eau de",
          description: "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine."
        },
        { 
          image: "../../../../public/assets/images/cos-1.jpg", 
          text: "Gucci Eau de",
          description: "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine."
        }
    ];

    return (
        <div className="home-page-wrapper__outer">
            <div className="home-page-wrapper__inner">
                <div className="new-arrival-wrapper">
                    <span className="new-arrival-label">New Arrivals</span>
                </div>

                {/* Grid Layout */}
                <div className="new-arrival-grid">
                    {newArrivalProducts.map((product, index) => (
                        <div key={index} className="new-arrival-item">
                            <img 
                                src={product.image} 
                                alt="new-arrival-product" 
                                className="product-image"
                            />
                            <div className="new-arrival-detail-wrapper">
                                <div className="text">{product.text}</div>
                                <div className="description">{product.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

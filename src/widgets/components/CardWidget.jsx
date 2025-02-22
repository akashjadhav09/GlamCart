import React from "react";
import {MdAddCircle } from "react-icons/md";

import '../componentCss/CardWidgetCss.css';

export default function ProductCard({ product }) {

    const conversionRate = 83; // 1 USD = 83 INR (Example rate)
    const priceInINR = (product.price * conversionRate).toFixed(2); // Convert & format

    console.log("product ", product)
  return (
    <div className="product-card-wrapper__outer">
        <div className="card-wrapper__inner">

            <div className="thumbnail-wrapper">
                <img src={product.thumbnail} alt={product.title} className="product-image" />       
                <MdAddCircle className="like-btn"/>
            </div>
           
            <span className="product-name">{product.title}</span>

            <div className="product-detail-wrapper">
                <div className="price-discount-wrapper">
                    <p className="product-price">Price: {priceInINR}INR</p>
                    <p className="product-discount">{product.discountPercentage}% <span className="discoun-label">off</span></p>
                </div>

                <div className="hot-deal-wrapper">
                    <span className="hot-deal-label">Hot Deal</span>
                    <span className="product-left-label">Only 2 left</span>
                </div>

                <div className="rating-wrapper">
                    <span className="product-rating">⭐⭐⭐⭐⭐ {product.rating} / 5</span>
                </div>

                <div className="delivery-status-wrapper">
                    <span className="delivery-status-label">Free delivery</span>
                </div>
            </div>
        </div>
    </div>
  );
}


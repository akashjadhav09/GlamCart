import React from "react";

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
                <div className="like-btn">Like</div>
            </div>

            <div className="title-wrapper">
                <h3 className="product-name">{product.title}</h3>
            </div>

            <div className="price-discount-wrapper">
                <p className="product-price">{product.price}</p>
                <p className="product-discount">{product.discountPercentage}%</p>
            </div>

            <div className="hot-deal-wrapper">
                <p className="hot-deal-label">Hot Deal</p>
                <p className="product-left-label">Only 2 left</p>
            </div>

            <div className="rating-wrapper">
                <p className="product-rating">⭐⭐⭐⭐⭐ {product.rating} / 5</p>
            </div>

            <div className="delivery-status-wrapper">
                <p className="delivery-status-label">Free delivery</p>
            </div>

        </div>
    </div>
  );
}


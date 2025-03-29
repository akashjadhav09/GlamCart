import React, { useContext } from "react";

import { ProductContext } from "../../../context/ProductData";

import Carousel from "../../../widgets/components/CarouselWidget";
import ProductCard from "../../../widgets/components/CardWidget"; 
import "./Css/HomePageCss.css";

export default function HomePage() {
    const { productDetails } = useContext(ProductContext); 

    return (
        <div className="home-page-wrapper__outer">
            <div className="home-page-wrapper__inner">
                <Carousel className="carousel" />
                <h3 className="explore-products-text">Explore Products</h3>
                <div className="inital-product-wrapper">
                    {productDetails.products
                        .slice(0, 7)
                        .map((product, index) => (
                            <div key={product.id} className="product-cards">
                                <ProductCard product={product} />
                            </div>
                    ))}
                </div>
                <div className="footer-section">
                   <div className="footer-inner">
                        <h3 className="footer-section">footer section</h3>
                        <div className="footer-details">
                            <div className="about-us-section"> <span>ABOUT</span>
                                <div className="contact-us">Contact us</div>
                                <div className="aboute-us">About us</div>
                                <div className="stories">Glam Cart Stories</div>
                            </div>

                            <div className="group-companies-section"> <span>GROUP COMPANIES</span>
                                <div className="contact-us">Contact us</div>
                                <div className="aboute-us">About us</div>
                                <div className="stories">Glam Cart Stories</div>
                            </div>

                            <div className="help-section"> <span>HELP</span>
                                <div className="contact-us">Contact us</div>
                                <div className="aboute-us">About us</div>
                                <div className="stories">Glam Cart Stories</div>
                            </div>
                        </div>                        
                   </div>
                </div>
            </div>
        </div>
    );
}

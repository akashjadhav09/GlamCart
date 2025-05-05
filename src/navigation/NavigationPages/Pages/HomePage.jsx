import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ProductContext } from "../../../context/ProductData";
import Carousel from "../../../widgets/components/CarouselWidget";
import ProductCard from "../../../widgets/components/CardWidget"; 
import FooterSection from '../Pages/footer';
import ScrollToTop from '../../../widgets/components/ScrollToTop';

import "./Css/HomePageCss.css";

export default function HomePage() {
    const { productDetails } = useContext(ProductContext);
    const navigate = useNavigate();

    function handleExploreMoreProducts(){
        navigate("/shopnow");
    }

    return (
        <div className="home-page-wrapper__outer">
            <div className="home-page-wrapper__inner">
                <Carousel className="carousel" />
                <h3 className="explore-products-text"><span className="explore-product-label">Explore Products</span></h3>
                <div className="inital-product-wrapper">
                    {productDetails.products.slice(0, 8).map((product, _index) => (
                            <div key={product.id} className="product-cards">
                                <ProductCard product={product} />
                            </div>
                    ))}
                </div>
                <div className="explore-more-btn__wrapper">
                    <button className="explore-more-btn" onClick={()=> handleExploreMoreProducts()}>Explore More</button>
                </div>
                <FooterSection/>
                <ScrollToTop />
            </div>
        </div>
    );
}

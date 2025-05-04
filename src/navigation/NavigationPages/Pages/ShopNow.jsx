import React from "react";
import { useContext, useEffect, useState } from "react";


import { ProductContext } from "../../../context/ProductData";
import ProductCard from '../../../widgets/components/CardWidget';
import FooterSection from '../Pages/footer';
import ScrollToTop from '../../../widgets/components/ScrollToTop';

import './Css/ShopNowPageCSS.css';

export default function ShopNowPage(){

    const {productDetails, likedProducts} = useContext(ProductContext);
    const [alreadyLikedProductId, setAlreadyLikedProductId] = useState([]);

    useEffect(() => {
        const likedIds = likedProducts.map(item => item.id); 
        setAlreadyLikedProductId(likedIds); 
    }, []);

    return(
        <>
            <div className="home-page-wrapper__outer">
                <div className="home-page-wrapper__inner product-details__outer">
                    {productDetails.products.map((product, index) => {               
                        return (
                            <div key={index} className="product-cards">
                                <ProductCard key={product.id} product={product} alreadyLikedProductId={alreadyLikedProductId}/>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <ScrollToTop />
            <FooterSection />
        </>
    )
}
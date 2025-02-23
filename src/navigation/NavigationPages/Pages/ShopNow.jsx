import React from "react";
import { useContext } from "react";


import { ProductContext } from "../../../context/ProductData";
import ProductCard from '../../../widgets/components/CardWidget'

export default function ShopNowPage(){

    const {productDetails} = useContext(ProductContext);

    return(
        <>
            <div className="home-page-wrapper__outer">
                <div className="home-page-wrapper__inner">
        
                    {productDetails.products.map((product, index) => {               
                        return (
                            <div key={index} className="product-cards">
                                <ProductCard key={product.id} product={product} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
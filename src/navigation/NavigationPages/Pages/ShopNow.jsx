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
                    <h2>This is Shop Now Page</h2>
                    <h2>Product List</h2>
                    {productDetails.products.map((product, _index) => {               
                        return (
                            <ProductCard key={product.id} product={product} />
                        );
                    })}
                </div>
            </div>
        </>
    )
}
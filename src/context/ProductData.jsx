import { createContext, useState } from "react";

import productData from "../model/Data/productDetails.json"; 

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState(productData);
  const [selectedProduct, setSelectedProduct] = useState(null); // Store selected product

  return (
    <ProductContext.Provider value={{ productDetails, selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

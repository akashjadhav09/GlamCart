import { createContext, useState } from "react";

import productData from "../model/Data/productDetails.json"; 

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState(productData);

  return (
    <ProductContext.Provider value={{ productDetails }}>
      {children}
    </ProductContext.Provider>
  );
};

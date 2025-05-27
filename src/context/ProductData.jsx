import { createContext, useState } from "react";

import productData from "../model/Data/productDetails.json"; 

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState(productData);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [cartProducts, setCartProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [validUser, setValidUser] = useState([]);
  const [isSignOutPopupVisible, setIsSignOutPopupVisible] = useState(false);

  const addToCart = (product) => {
    const alreadyInCart = cartProducts.some((p) => p.id === product.id);
    if (!alreadyInCart) {
      setCartProducts((prev) => [...prev, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCartProducts((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const addToFavProduct = (product) => {
    const alreadyInFavProduct = likedProducts.some((p) => p.id === product.id);
    if (!alreadyInFavProduct) {
      setLikedProducts((prev) => [...prev, product]);
    }
  };

  const removeFromFavProduct = (productId) => {
    setLikedProducts((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  
  return (
    <ProductContext.Provider value={{ 
        productDetails, 
        selectedProduct, 
        setSelectedProduct, 
        cartProducts, 
        addToCart,
        removeFromCart,
        likedProducts,
        setLikedProducts,
        addToFavProduct,
        removeFromFavProduct,
        validUser, 
        setValidUser,
        isSignOutPopupVisible,
        setIsSignOutPopupVisible   
      }}>

      {children}      
    </ProductContext.Provider>
  );
};

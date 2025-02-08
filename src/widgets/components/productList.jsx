import { useContext } from "react";
import { ProductContext } from "../../context/ProductData";

const ProductList = () => {
  const { productDetails } = useContext(ProductContext);
    console.log("productDetails ", productDetails)
  return (
    <div>
      <h2>Product List</h2>
      {productDetails.products.map((product, _index) => {
        return (
            <li key={product.id}>
            {product.title}
            </li>
        );
        })}
    </div>
  );
};

export default ProductList;

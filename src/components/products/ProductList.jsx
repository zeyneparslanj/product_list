import React from "react";
import "./Products.scss";
import ProductCard from "./ProductCard";

export const ProductList = ({ products }) => {
  // console.log(products);
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      {/* {products.map(({ price, title, image, id }) => {
        return (
          <div key={id}>
            <div>
              <h3>{price}</h3>
            </div>
            <div>
              <img src={image} alt={title} />
            </div>
            <div>
              <h2>{title}</h2>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default ProductList;

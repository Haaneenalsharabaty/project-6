import React from "react";
import Product from "./Product";
import "./Product.css";
// import { useNavigate } from "react-router-dom";
function Main(props) {
  const { products, onAdd } = props;

  return (
    <div className="pet-item">
      <h2>products</h2>
      <div className="petshop-container">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </div>
  );
}
export default Main;

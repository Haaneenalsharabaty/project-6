import React from "react";
import "./Product.css";
// import { useNavigate } from "react-router-dom";

function Product(props) {
  // const navigate = useNavigate();
  // let logged = localStorage.getItem("logged_user");
  const { product, onAdd } = props;
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.info}</p>
      <div>{product.price}JD</div>
      <div className="card-button">
        <button onClick={() => onAdd(product)}>Add TO Cart</button>
      </div>
    </div>
  );
}

export default Product;

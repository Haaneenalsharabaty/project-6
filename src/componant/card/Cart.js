import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Product.css";
function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.26;
  const shippingPrice = itemsPrice > 30 ? 0 : 3;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const [formGroup, setFormGrroup] = useState();
  const [newPrice, setnewPrice] = useState("");
  const Change = (e) => {
    setFormGrroup(e.target.value);
    console.log(formGroup);
  };
  const apply = (e) => {
    e.preventDefault();

    if (formGroup === "PET50") {
      setnewPrice(totalPrice / 2);
    }
  };

  return (
    <div className="cart-continer">
      <h2>Cart Items</h2>
      <div className="cart-product">
        {cartItems.lenght === 0 ? <div>Cart Is Empty</div> : null}
        {cartItems.map((item) => (
          <div className="productId" key={item.id}>
            <div className="productName">{item.name}</div>
            <div className="btnCart">
              <button className="addRemove" onClick={() => onAdd(item)}>
                +
              </button>
              <div className="productPrie">
                {item.qty} * {item.price.toFixed(2)}JD
              </div>
              <button className="addRemove" onClick={() => onRemove(item)}>
                -
              </button>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <div className="input-code">
              <form onSubmit={apply}>
                <label htmlFor="code">Have promo code ?</label>
                <input type={"text"} name="code" onChange={Change} />{" "}
                <button type="submit">apply</button>
              </form>
            </div>

            <hr></hr>
            <div className="checkoutprice">
              <div className="cheakoutpricetitle">Items Price</div>
              <div className="cheakoutprice">{itemsPrice}JD</div>
            </div>
            <div className="checkoutTax">
              <div className="checkoutTaxtitle">Tax Price</div>
              <div className="checkoutTaxnumber">{taxPrice}JD</div>
            </div>
            <div className="checkoutshipping">
              <div className="checkoutshippingtitle">Shipping Price</div>
              <div className="checkoutshippingnumber">{shippingPrice}JD</div>
            </div>

            <div className="total">
              <div className="totaltitle">
                <strong>Total Price</strong>
              </div>

              <div className="totalnumber">
                <strong>{totalPrice}JD</strong>
              </div>

              <div className="dnumber">
                <strong>{newPrice}JD</strong>
              </div>
            </div>

            <hr />
            <div className="checkoutbtn">
              {localStorage.getItem("logged_user") && (
                <button
                  className="cart-checkout"
                  onClick={() => alert("Implement Checkout!")}
                >
                  Checkout
                </button>
              )}
              {!localStorage.getItem("logged_user") && (
                <p className="offline">
                  Kindly Login So you can complete the checkout{" "}
                  <Link to="/SignIn">
                    <span id="contSpan">Login</span>
                  </Link>
                </p>
              )}
              {/* <button
                className="cart-checkout"
                onClick={() => alert("Implement Checkout!")}
              >
                Checkout
              </button> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;

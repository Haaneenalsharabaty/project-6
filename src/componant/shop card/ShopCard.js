import React from "react";
import "./ShopCard.css";
import { Link } from "react-router-dom";
function ShopCard() {
  return (
    <div className="shopNowContiner">
      <h1 className="shopTitle">Shop now and get your discount</h1>

      <div className="shopnowImg">
        <img src="little-cute-puppy.jpg" alt="dogphoto" />
      </div>
      <div className="shopnow-text">
        <p>Git 50 % discount by using this code "PET50"</p>
        <Link to="/Shop">
          <button>Shop now</button>
        </Link>
      </div>
    </div>
  );
}

export default ShopCard;

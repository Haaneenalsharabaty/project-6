import "./App.css";
import NavBar from "./componant/NavBar/NavBar";
import Intro from "./componant/Intro/Intro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./componant/Login/SignIn";
import Footer from "./componant/footer/Footer";
import SignUp from "./componant/SignUp/SignUp";
import Testamonial from "./componant/testamonial/Testamonial";
import { Imgeslider } from "./componant/testamonial/Imgeslider";
import Petgrooming from "./componant/Pet Grooming/Petgrooming";
import UserProfile from "./componant/User Profile/UserProfile";
import ShopCard from "./componant/shop card/ShopCard";
import Data from "./componant/card/Data";
import Card from "./componant/card/Main";
import Cart from "./componant/card/Cart";
import { useState } from "react";
import AboutUs from "./componant/aboutUs/AboutUs";

function App() {
  const { products } = Data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product, e) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar countCartItems={cartItems.length} />

        <Routes>
          <Route
            exact
            path="/Intro"
            element={
              <>
                <Intro />
                <ShopCard />
                <Testamonial slide={Imgeslider} />
              </>
            }
          />
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/Petgrooming" element={<Petgrooming />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/UserProfile" element={<UserProfile />} />
          <Route
            exact
            path="/Shop"
            element={<Card onAdd={onAdd} products={products} />}
          />
          <Route
            exact
            path="/Cart"
            element={
              <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

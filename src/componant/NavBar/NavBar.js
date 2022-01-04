import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar(props) {
  const { countCartItems } = props;
  const [showNav, setShowNav] = useState(false);
  const click = (e) => {
    setShowNav(!showNav);
    console.log("haneen");
  };
  return (
    <nav className="Navbar">
      {" "}
      <div className="MbNavbar">
        <Link to="/Intro">
          <img src="/logo.jpg" alt="logo" />
        </Link>
        <button className="burger-menu">
          <i className="fas fa-bars" onClick={click}></i>
        </button>
      </div>
      <div className="Navbar-List">
        <ul id={showNav ? "hidden" : null}>
          <li>
            <Link to="/Intro">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Petgrooming">Pet Grooming</Link>
          </li>
        </ul>
      </div>
      <div className="Narbar-login-logout">
        <ul id={showNav ? "hiddenbtn" : null}>
          <Link to="/Cart">
            <li>
              <i class="fas fa-shopping-cart">{countCartItems}</i>
            </li>
          </Link>
          <li>
            {!localStorage.getItem("logged_user") && (
              <Link to="/SignIn">
                <button className="login-btn-header">Login</button>
              </Link>
            )}
          </li>
          <li>
            {localStorage.getItem("logged_user") && (
              <Link to="/UserProfile">
                {" "}
                <button className="userP">User Profile</button>
              </Link>
            )}
          </li>
          <li>
            {localStorage.getItem("logged_user") && (
              <Link to="/SignIn">
                <button
                  className="logout-btn-header"
                  onClick={() => {
                    localStorage.removeItem("logged_user");
                  }}
                >
                  Logout
                </button>
              </Link>
            )}
          </li>
          <li>
            {!localStorage.getItem("logged_user") && (
              <Link to="/SignUp">
                {" "}
                <button className="signup-btn-header">Signup</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

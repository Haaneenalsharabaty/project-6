import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const navigate = useNavigate();

  const [formGroup, setFormGrroup] = useState({
    email: "",
    password: "",
  });

  const Change = (e) => {
    const { name, value } = e.target;
    setFormGrroup({ ...formGroup, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let index;
    let flag = true;
    let Userss = [];
    Userss = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < Userss.length; i++) {
      if (
        formGroup.email === Userss[i].email &&
        formGroup.password === Userss[i].password
      ) {
        index = i;
        localStorage.setItem("logged_user", JSON.stringify(Userss[index]));
        // setLogged(localStorage.getItem("logged_user"));
        alert("welcome To Our website ");
        navigate("/Intro");

        return (flag = false);
      }
    }
    if (flag === true) {
      alert("your Password or Email is not correct ");
    }
  };

  return (
    <div className="form">
      <form className="login-form" onSubmit={onSubmit}>
        <h2>welcome {formGroup.name} </h2>
        <input
          type="text"
          id="login"
          className="login"
          name="email"
          value={formGroup.email}
          placeholder="login"
          required
          onChange={Change}
        />
        <input
          type="password"
          id="password"
          className="password"
          name="password"
          required
          value={formGroup.password}
          placeholder="password"
          onChange={Change}
        />
        <input type="submit" className="sumbit" value="Log In" />
        <div className="account">
          Don't Have an account?<Link to="/SignUp"> Sign up</Link>
        </div>
      </form>
    </div>
  );
}
export default SignIn;

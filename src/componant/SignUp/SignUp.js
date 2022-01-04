import React, { useState } from "react";
// import { Link } from "react-router-dom";// header component
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
function SignUp(props) {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [formGroup, setFormGrroup] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const register = (e) => {
    const { name, value } = e.target;
    setFormGrroup({ ...formGroup, [name]: value });
  };
  let isValidate;
  const validate = (e, values) => {
    e.preventDefault();

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (values.firstName.length <= 2) {
      errors.firstName = "First Name is too short!";
    }
    if (values.lastName.length <= 2) {
      errors.lastName = "Last Name is too short!";
    }
    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (values.phone.length < 10) {
      errors.phone = "phone Number must be more than 10 digit";
    }
    if (values.password.length <= 8) {
      errors.password = "Password must be more than 8 characters";
    }
    if (values.confPassword !== values.password) {
      errors.confPassword = "Password is not match";
    }
    setFormErrors(errors);
    if (
      values.phone.length <= 10 &&
      values.firstName.length > 2 &&
      values.lastName.length > 2 &&
      regex.test(values.email) &&
      values.password.length > 8 &&
      values.confPassword === values.password
    ) {
      console.log("test");
      isValidate = true;
      reg(e, errors);
    }
  };

  const reg = (e, errors) => {
    e.preventDefault();
    console.log(errors);
    let users = {
      fName: formGroup.firstName,
      lName: formGroup.lastName,
      phone: formGroup.phone,
      password: formGroup.password,
      email: formGroup.email,
    };
    let arr = [];

    console.log(users);
    let flag = true;
    if (localStorage.getItem("users")) {
      arr = JSON.parse(localStorage.getItem("users"));
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].email === formGroup.email) {
          alert("account is exist please go To login Page");
          navigate("/SignIn");

          return (flag = false);
        }
      }
      if (flag === true && isValidate === true) {
        arr.push(users);
        localStorage.setItem("users", JSON.stringify(arr));
        navigate("/SignIn");
      }
    } else if (isValidate === true) {
      arr.push(users);

      localStorage.setItem("users", JSON.stringify(arr));
      navigate("/SignIn");
    }
  };

  return (
    <div id="container">
      <h1 id="regTitle"> Registration </h1>
      <div id="inputCont">
        <br />
        <form
          onSubmit={(e) => validate(e, formGroup)}
          id="formreg"
          className="forReg"
        >
          <input
            value={formGroup.firstName}
            onChange={register}
            name="firstName"
            className="inputs"
            type={"text"}
            id="firstName"
            placeholder="  First Name"
            required
          ></input>
          <small className="errorMsg">{formErrors.firstName}</small>
          <input
            name="lastName"
            value={formGroup.lastName}
            onChange={register}
            className="inputs"
            type={"text"}
            id="lastName"
            placeholder="  Last Name"
            required
          ></input>{" "}
          <small className="errorMsg">{formErrors.lastName}</small>
          <br />
          <input
            name="email"
            value={formGroup.email}
            onChange={register}
            className="inputs"
            type={"text"}
            id="email"
            placeholder="  email"
            required
          ></input>
          <small className="errorMsg">{formErrors.email}</small>
          <br />
          <input
            name="phone"
            value={formGroup.phone}
            onChange={register}
            className="inputs"
            type={"text"}
            id="phoneNumber"
            placeholder="  Phone Number "
            required
          ></input>
          <small className="errorMsg">{formErrors.phone}</small>
          <br />
          <input
            name="password"
            value={formGroup.password}
            onChange={register}
            className="inputs"
            type={"password"}
            id="Password"
            placeholder="  Password"
            required
          ></input>
          <small className="errorMsg">{formErrors.password}</small>
          <br />
          <input
            name="confPassword"
            value={formGroup.confPassword}
            onChange={register}
            className="inputs"
            type={"password"}
            id="confPassword"
            placeholder="  Repeat Password "
            required
          ></input>
          <small className="errorMsg">{formErrors.confPassword}</small>
          <br />
          {/* <Link to={'/Intro'}> */}
          <button className="regSubmit">Submit</button>
          {/* </Link> */}
          <div className="card-footer" id="card-footer">
            <div className="account">
              Already have an account?<Link to="/SignIn"> Sign in</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;

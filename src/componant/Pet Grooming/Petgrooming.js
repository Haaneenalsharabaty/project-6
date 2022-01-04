import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Petgrooming.css";

function Petgrooming() {
  const navigate = useNavigate();
  let obj = { fName: "", lName: "", Email: "", phone: "", date: "", time: "" };
  let logged = JSON.parse(localStorage.getItem("logged_user"))
    ? JSON.parse(localStorage.getItem("logged_user"))
    : obj;

  const [formInfo, setFormInfo] = useState(logged);
  const change = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    let booking = {
      fName: formInfo.fName,
      petName: formInfo.petName,
      email: formInfo.email,
      phone: formInfo.phone,
      date: formInfo.date,
      time: formInfo.time,
    };
    let usersinfo = [];
    let flag = true;

    if (localStorage.getItem("booking")) {
      usersinfo = JSON.parse(localStorage.getItem("booking"));
      for (let i = 0; i < usersinfo.length; i++) {
        if (
          usersinfo[i].email === formInfo.email &&
          usersinfo[i].date === formInfo.date &&
          usersinfo[i].time === formInfo.time
        ) {
          alert("you Already Have an Appointment ");

          return (flag = false);
        }
      }
      if (flag === true) {
        usersinfo.push(booking);
        localStorage.setItem("booking", JSON.stringify(usersinfo));
        alert("Thank you...you complete Bookingx... see you soon");
        navigate("/Intro");
      }
    } else {
      usersinfo.push(booking);

      localStorage.setItem("booking", JSON.stringify(usersinfo));
      alert("Thank you...you complete Booking... see you soon");
      navigate("/Intro");
    }
  };
  return (
    <div className="bookcontainer">
      <h1 id="bookingTitle"> Pet Grooming Appointment </h1>
      <div id="inputCont">
        <br />

        <form className="formBooking" onSubmit={submit}>
          <input
            value={formInfo.fName}
            onChange={change}
            name="fName"
            className="fileds"
            type={"text"}
            id="firstName"
            placeholder="  Name"
            required
          ></input>

          <br />
          <input
            value={formInfo.petName}
            onChange={change}
            name="petName"
            className="fileds"
            type={"text"}
            id="petName"
            placeholder="  Pet Name"
            required
          ></input>

          <br />
          <input
            name="email"
            value={formInfo.email}
            onChange={change}
            className="fileds"
            type={"text"}
            id="email"
            placeholder="  email"
            required
            disabled
          ></input>
          <br />
          <input
            name="phone"
            value={formInfo.phone}
            onChange={change}
            className="fileds"
            type={"text"}
            id="phoneNumber"
            placeholder="  phone Number "
            required
          ></input>
          <br />
          <input
            name="date"
            value={formInfo.date}
            onChange={change}
            className="fileds"
            type={"date"}
            id="date"
            required
          ></input>
          <br />
          <input
            name="time"
            value={formInfo.time}
            onChange={change}
            className="fileds"
            type={"time"}
            id="time"
            required
          ></input>
          <br />
          {localStorage.getItem("logged_user") && (
            <button className="regSubmit">Submit</button>
          )}
          {!localStorage.getItem("logged_user") && (
            <p className="offline">
              Kindly Login So you can complete the booking{" "}
              <Link to="/SignIn">
                <span id="contSpan">Login</span>
              </Link>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Petgrooming;

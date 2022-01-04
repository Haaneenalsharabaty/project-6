import React, { useState } from "react";
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
export default function UserProfile() {
  const navigate = useNavigate();
  let obj = { fName: "", lName: "", Email: "", phone: "", petName: "" };
  let logged = JSON.parse(localStorage.getItem("logged_user"))
    ? JSON.parse(localStorage.getItem("logged_user"))
    : obj;
  const [userInfo, setUserInfo] = useState(logged);
  const [petInfo, setPetInfo] = useState({
    petAge: "",
    petKind: "",
    petName: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const change2 = (e) => {
    const { name, value } = e.target;
    setPetInfo({ ...petInfo, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    let pet_info = {
      petName: petInfo.petName,
      petAge: petInfo.petName,
      petKind: petInfo.petKind,
    };
    let petinfo = [];
    let flag = true;
    if (localStorage.getItem("pet_info")) {
      petinfo = JSON.parse(localStorage.getItem("pet_info"));
      for (let i = 0; i < petinfo.length; i++) {
        if (petinfo[i].petName !== petInfo.petName) {
          petinfo.petName = petInfo.petName;
          return (flag = false);
        }
      }
      if (flag === true) {
        petinfo.push(pet_info);
        localStorage.setItem("pet_info", JSON.stringify(petinfo));
        alert("Thank you Save your Informations");
        navigate("/Intro");
      }
    } else {
      petinfo.push(pet_info);

      localStorage.setItem("pet_info", JSON.stringify(petinfo));
      alert("Thank you Save your Informations");
      navigate("/Intro");
    }
  };

  return (
    <div className="User-Profile-continer">
      <h1 className="useTitle">User Profile</h1>
      <form className="user-form">
        <input
          className="user-inputs"
          name="fName"
          type={"text"}
          placeholder="First Name"
          required
          onChange={change}
          value={userInfo.fName}
        />
        <input
          className="user-inputs"
          name="lName"
          type={"text"}
          placeholder="Last Name"
          required
          onChange={change}
          value={userInfo.lName}
        />
        <input
          className="user-inputs"
          name="phone"
          type={"text"}
          placeholder="phone number"
          required
          onChange={change}
          value={userInfo.phone}
        />
        <input
          className="user-inputs"
          name="email"
          type={"text"}
          placeholder="email"
          disabled
          required
          onChange={change}
          value={userInfo.email}
        />
      </form>
      <form className="pet-form">
        <input
          className="pet-inputs"
          name="petName"
          type={"text"}
          placeholder="Your Pet Name"
          required
          onChange={change2}
          value={petInfo.petName}
        />

        <input
          className="pet-inputs"
          name="petAge"
          type={"text"}
          placeholder="your Pet age"
          required
          onChange={change2}
          value={petInfo.petAge}
        />

        <input
          className="pet-inputs"
          name="petKind"
          type={"text"}
          placeholder="your Pet Kind"
          required
          onChange={change2}
          value={petInfo.petKind}
        />
      </form>{" "}
      <button className="Info" onClick={submit}>
        Save
      </button>
    </div>
  );
}

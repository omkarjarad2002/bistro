import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { checkUser } from "../features/Checkingslice";

function SendOtp() {
  let navigate = useNavigate();

  const userDispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const SendOTP = async (e) => {
    console.log(user.email);
    e.preventDefault();

    const { email } = user;

    if (!email) {
      alert("Please enter Email first !");
      return;
    }

    const res = await axios.post(
      "http://localhost:4457/emailSend",
      {
        email,
      },
      {
        withCredentials: true,
        "Content-Type": "application/json",
      }
    );
    console.log(res);
    if (res.status === 200) {
      userDispatch(checkUser(res.data));
      alert("Otp sent successfully !! Please check Your Email !!");
      navigate("/resetpassword");
    } else {
      alert("ERROR");
    }
  };

  return (
    <div className="container otp__container mt-5">
      <div className="container  pt-3 pb-3 pb-2">
        <div className="FirstAboutBox d-flex">
          <div className="mb-3 otp__container__div  ps-2 d-flex ">
            <label htmlFor="validationDefault01" className="ps-2 mt-2">
              <h5>Email </h5>
            </label>
            <input
              type="text"
              className="form-control ms-2"
              autoComplete="off"
              id="validationDefault01"
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={handleInputs}
              required
            />
          </div>
        </div>
        <div className="d-flex pt-2 mt-2">
          <div className="ps-3">
            <button className="btn btn-danger " onClick={SendOTP}>
              Send Otp
            </button>
          </div>
          <div className="ps-3">
            <button className="btn btn-primary">
              <Link to="/">back</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendOtp;

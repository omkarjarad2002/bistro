import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function ResetPassword() {
  let navigate = useNavigate();
  const Check__User = useSelector((state) => state.check__user);

  const [user, setUser] = useState({
    otp: Check__User.Check__User.final__otp,
    otpcode: "",
    email: Check__User.Check__User.email,
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { otp, otpcode, email, password, cpassword } = user; 

    if (!otp || !otpcode || !email || !password || !cpassword) {
      alert("Invalid Credentials !");
      return;
    }

    const res = await axios.post(
      "http://localhost:4457/changePassword",
      {
        otp,
        otpcode,
        email,
        password,
        cpassword,
      },
      {
        withCredentials: true,
        "Content-Type": "application/json",
      }
    );
    if (res.status === 200) {
      alert("Password Changed Successfully !!");
      navigate("/register");
    } else if (res.status === 401) {
      alert("Invalid Otp !");
    } else if (res.status === 402) {
      alert("Otp expired !");
    } else {
      alert("ERROR");
    }
  };

  return (
    <div
      className="container resetpassword__container mt-5"
      style={{ backgroundColor: "grey", maxWidth: "600px", width: "100%" }}
    >
      <div className="container  pt-3 pb-3 pb-2">
        <div className="FirstAboutBox d-flex">
          <div
            className="mb-3  ps-2 d-flex "
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <label
              htmlFor="validationDefault01"
              className="ps-2 mt-2"
              style={{ maxWidth: "200px", width: "100%" }}
            >
              <p>Enter Otp :</p>
            </label>
            <input
              type="text"
              className="form-control ms-2"
              autoComplete="off"
              id="validationDefault01"
              name="otpcode"
              placeholder="Enter Otp"
              value={user.otpcode}
              onChange={handleInputs}
              required
            />
          </div>
        </div>

        <div className="FirstAboutBox d-flex">
          <div
            className="mb-3  ps-2 d-flex "
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <label
              htmlFor="validationDefault01"
              className="ps-2 mt-2"
              style={{ maxWidth: "200px", width: "100%" }}
            >
              <p>Enter new Password :</p>
            </label>
            <input
              type="text"
              className="form-control ms-2"
              autoComplete="off"
              id="validationDefault01"
              name="password"
              placeholder="Enter new password"
              value={user.password}
              onChange={handleInputs}
              required
            />
          </div>
        </div>
        <div className="FirstAboutBox d-flex">
          <div
            className="mb-3  ps-2 d-flex "
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <label
              htmlFor="validationDefault01"
              className="ps-2 mt-2"
              style={{ maxWidth: "200px", width: "100%" }}
            >
              <p>Enter Confirm Password :</p>
            </label>
            <input
              type="text"
              className="form-control ms-2"
              autoComplete="off"
              id="validationDefault01"
              name="cpassword"
              placeholder="Confirm new Password"
              value={user.cpassword}
              onChange={handleInputs}
              required
            />
          </div>
        </div>
        <div className="d-flex pt-2 mt-2">
          <div className="ps-3">
            <button className="btn btn-success " onClick={PostData}>
              Change Password
            </button>
          </div>
          <div className="ps-3">
            <button className="btn btn-primary">
              <Link to="/sendotp">back</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;

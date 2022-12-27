import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function EditProfile() {
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
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

    const { name, email, phone, password, cpassword } = user;

    const res = await fetch(
      `https://bistro-backend.onrender.com/updateuserdetails/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
          cpassword,
        }),
      }
    );

    const data = await res.json();
    if (data) {
      alert("SUCCESS");
    }
  };

  return (
    <div className="container pt-5">
      <h3>
        <Link style={{ color: "black", cursor: "initial" }} to="">
          Enter only those which you want to Update :)
        </Link>
      </h3>
      <div className="container1 container">
        <div className="contact__container">
          <form className="" method="POST">
            <div className="mb-3 pt-2 d-flex text-align-center align-items-center">
              <label htmlFor="validationDefault01">
                <i className="zmdi zmdi-account"></i>
              </label>
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                id="validationDefault01"
                name="name"
                placeholder="Edit name"
                value={user.name}
                onChange={handleInputs}
                required
              />
            </div>
            <hr />
            <div className="mb-3 pt-2 d-flex text-align-center align-items-center">
              <label htmlFor="name">
                <i className="zmdi zmdi-email"></i>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Edit email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
              />
            </div>
            <hr />
            <div className="mb-3 pt-2 d-flex text-align-center align-items-center">
              <label htmlFor="name">
                <i className="zmdi zmdi-phone"></i>
              </label>
              <input
                type="number"
                className="form-control"
                autoComplete="off"
                id="phone"
                name="phone"
                placeholder="Edit phone"
                value={user.phone}
                onChange={handleInputs}
              />
            </div>
            <hr />
            <div className="mb-3 pt-2 d-flex text-align-center align-items-center">
              <label htmlFor="name">
                <i className="zmdi zmdi-lock"></i>
              </label>
              <input
                type="password"
                className="form-control"
                autoComplete="off"
                id="password"
                name="password"
                placeholder="Update password"
                value={user.password}
                onChange={handleInputs}
              />
            </div>
            <hr />
            <div className="mb-3 pt-2 d-flex text-align-center align-items-center">
              <label htmlFor="name">
                <i className="zmdi zmdi-lock"></i>
              </label>
              <input
                type="password"
                className="form-control"
                autoComplete="off"
                id="cpassword"
                name="cpassword"
                placeholder="Updated Confirm password"
                value={user.cpassword}
                onChange={handleInputs}
              />
            </div>
            <hr />
          </form>
          <button className="btn btn-primary mb-3" onClick={PostData}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;

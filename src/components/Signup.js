import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/Userslice";
import { UserContext } from "../App";

function Signup() {
  let navigate = useNavigate();
  const userDispatch = useDispatch();
  const { state, dispatch } = useContext(UserContext);

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

    if (!name || !email || !phone || !password || !cpassword) {
      alert("Please enter all fields in the form !!");
      return;
    }
    const res = await fetch("http://localhost:4457/register", {
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
    });

    const data = await res.json();

    if (data.status === 422) {
      window.alert("Invalid Credentials !!");
    } else {
      window.alert("registration successfull");
      dispatch({ type: "USER", payload: true });

      userDispatch(addUser(res.data.userLogin));

      navigate("/");
    }
  };

  return (
    <div>
      <section className="section__height d-flex" id="contact">
        <div className="container1 container">
          <h2 className="pt-3 pb-3">Register :)</h2>
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
                  placeholder="Enter Your Name"
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
                  placeholder="Enter your Email"
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
                  placeholder="Enter your Number"
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
                  placeholder="Enter password"
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
                  placeholder="Confirm password"
                  value={user.cpassword}
                  onChange={handleInputs}
                />
              </div>
              <hr />
              <div className="d-grid pb-3  d-md-block">
                <button
                  className="btn btn-outline-success  p-2   rounded"
                  id="signup"
                  type="submit"
                  value="Submit"
                  role="button"
                  onClick={PostData}
                >
                  Register
                </button>
                <p>
                  Already have an account <Link to="">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;

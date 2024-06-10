import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../App";
import { addUser } from "../features/Userslice";

function Navbar() {
  const User = useSelector((state) => state.user);
  console.log(User);

  const userDispatch = useDispatch();

  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { id } = useParams();

  const loginUser = async (e) => {
    try {
      e.preventDefault();

      if (!email || !password) {
        return res.alert("Please enter a  valid credentials !!!");
      }

      const res = await axios.post(
        "http://localhost:4457/signin",
        {
          email,
          password,
        },
        {
          withCredentials: true,
          "Content-Type": "application/json",
        }
      );
      if (res.status === 200) {
        dispatch({ type: "USER", payload: true });

        userDispatch(addUser(res.data.userLogin));

        alert("Login successfully !!");
        navigate("/about");
      }
      if (res.status === 201) {
        dispatch({ type: "USER", payload: true });
        navigate("/admindashboard");
      }
      if (res.status === 202) {
        dispatch({ type: "USER", payload: true });

        navigate(`/restaurantdashboard/${res.data.reststaurantUser._id}`);
      }
    } catch (error) {
      alert("Invalid credentials 2 !!");
    }
  };

  useEffect(() => {
    const smallscreennav = document.querySelector(".smallscreennav");
    const nav = document.querySelector(".nav-links");

    smallscreennav.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
    });
    return () => {
      smallscreennav.removeEventListener("click", () => {});
    };
  }, []);

  //omkarjarad28@gmail.com
  //dispatch({type:"USER", payload:true})

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button
              type="button"
              className="btn mb-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              <Link to="" style={{ textDecoration: "none" }}>
                About Us
              </Link>
            </button>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Logout">Logout</Link>
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-center">
              <i
                className="zmdi zmdi-shopping-cart"
                style={{ color: "black" }}
              ></i>
              <button type="button" className="btn  ">
                <Link to="/cart">Cart</Link>
              </button>
            </div>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button
              type="button"
              className="btn mb-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              <Link to="" style={{ textDecoration: "none" }}>
                About Us
              </Link>
            </button>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
          <li>
            <button
              type="button"
              className="btn loginbtn"
              style={{ border: "1px solid black" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              <Link to="">Login</Link>
            </button>
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-center">
              <i
                className="zmdi zmdi-shopping-cart"
                style={{ color: "black" }}
              ></i>
              <button type="button" className="btn  ">
                <Link to="/cart">Cart</Link>
              </button>
            </div>
          </li>
        </>
      );
    }
  };

  return (
    <div>
      <nav className="shadowX">
        {/* <input type="checkbox" id="check" /> */}
        {/*          
        <label for="check" className="checkbtn">
          <button className="btn btn-primary" id="checkbutton"></button>
        </label> */}
        <label className="logo fs-1" style={{ fontFamily: "cursive" }}>
          Bistro
        </label>
        <div className="smallscreennav">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
          <div className="line5"></div>
        </div>

        <ul className="nav-links">
          <RenderMenu />
        </ul>
      </nav>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Login
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="email" className="col-form-label">
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="password" className="col-form-label">
                      Password:
                    </label>
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      autoComplete="off"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <p>
                      <Link style={{ color: "red" }} to={"/sendotp"}>
                        forgotten password ?
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  id="button"
                  Type="submit"
                  value="Submit"
                  role="button"
                  style={{ width: "100%" }}
                  onClick={loginUser}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

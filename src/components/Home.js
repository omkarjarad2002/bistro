import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

function Home() {
  const [value, setValue] = useState("India");
  const [Language, setLanguage] = useState("English");

  const handleChange = (event) => {
    setValue(event.target.value);
    setLanguage(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("Your Country is " + this.state.value);
    event.preventDefault();
  };

  return (
    <div className="card text-white home__div "> 
      <div className="card-img-overlay button__div d-grid gap-2 col-12   float-end">
        <div className="card-img-overlay button__div d-grid  ">
          <div className=" ">
            <button className="btn btn-danger btn-sm">
              <li>
                <Link to="/fooditems">Order Now</Link>
              </li>
            </button>
          </div>
        </div>
        <div className="card-img-overlay button__div  gap-2 mt-5">
          <div className=" ">
            <button className="btn btn-danger btn-sm">
              <li>
                <Link to="/addrestuarant">Add Restaurant</Link>
              </li>
            </button>
          </div>
        </div>
      </div>
      <div className="fooditems__container d-flex text-align-center pt-5 mt-5 pb-5 container ">
        <div className="card fooditems__card   mt-4 d-inline-flex ms-4 getabout2">
          <img
            src="https://images.unsplash.com/photo-1523529738216-242467d60007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyNTEzNTA4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            style={{ maxHeight: "300px", height: "100%" }}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="card fooditems__card d-flex mt-4 d-inline-flex ms-4 getabout2">
          <img
            src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            style={{ maxHeight: "300px", height: "100%" }}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="card fooditems__card d-flex mt-4 d-inline-flex ms-4 getabout2">
          <img
            src="https://images.unsplash.com/photo-1587206668283-c21d974993c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            style={{ maxHeight: "300px", height: "100%" }}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="card fooditems__card d-flex mt-4 d-inline-flex ms-4 getabout2">
          <img
            src="https://images.unsplash.com/photo-1559598467-8be25b6dc34f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8MTgyMDg0OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            style={{ maxHeight: "300px", height: "100%" }}
            className="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div className="container  bg-dark pt-5  mt-5 ">
        <div className="row">
          <div className="col-md-4">
            <h3>ADDRESS</h3>
            <p>Undawadi K.P (Banwadi)</p>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h3>OMKAR JARAD</h3>
            <p>+91-9373078258</p>
          </div>
        </div>
      </div>
      <div className="googlemap pt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.6702485081946!2d74.58735311468362!3d18.22507098758174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc30b2beff9e58b%3A0xc7743fa2c0e33a85!2sBaramati%20Airport!5e0!3m2!1sen!2sin!4v1643564383213!5m2!1sen!2sin"
          style={{
            width: "100%",
            height: "450px",
            border: "0",
            allowfullscreen: "",
            loading: "lazy",
          }}
        ></iframe>
      </div>
      <footer className="bg-dark border-box">
        <div className="container">
          <div className="FirstAboutBox d-flex">
            <div className="CountrySelectionForm pt-4 FillingInfo button">
              <form className="Form" onSubmit={handleSubmit}>
                <select value={value} onChange={handleChange}>
                  <option value="India">India</option>
                  <option value="Canada">Canada</option>
                  <option value="USA">USA</option>
                  <option value="Rassia">Rassia</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Australia">Australia</option>
                </select>
              </form>
            </div>
            <div className="LanguageSelectionForm pt-4 FillingInfo button">
              <form className="FormLanguase" onSubmit={handleSubmit}>
                <select value={value} onChange={handleChange}>
                  <option value="English">English</option>
                  <option value="Portugues">Portugues</option>
                  <option value="Polish">Polish</option>
                  <option value="Espanol">Espanol</option>
                  <option value="Italian">Italian</option>
                  <option value="Indonesian">Indonesian</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="about__last d-flex ps-5 ">
          <div className="col-md-3">
            <div className="AboutBox1">
              <ul>
                <h4>COMPANY</h4>
                <li>Who We Are</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Report Fraud</li>
                <li>Investor Relations</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="AboutBox1">
              <ul>
                <h4>FOR RESTAURANTS</h4>
                <li>Add restaurant</li>
                <li>---</li>
                <li>FOR ENTERPRISES</li>
                <li>Bistro for Work</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="AboutBox1">
              <ul>
                <h4>SOCIAL LINKS</h4>
                <h1>---</h1>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="AboutBox1">
              <ul>
                <h4>CONTACT</h4>
                <li>omkarjarad28@gmail.com</li>
                <li>+91-9373078258</li>
              </ul>
            </div>
          </div>
        </div>{" "}
        <hr className="hr"></hr>
        <div className="tag">
          <ul>
            <li>
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2022 © BISTRO™ Ltd. All
              rights reserved.
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;

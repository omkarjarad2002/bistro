import React, { useState } from 'react';

function Footer() {
    
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

  return <div>
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
        <div className="about__last d-flex ">
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
  </div>;
}

export default Footer;

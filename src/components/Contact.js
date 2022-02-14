import React, { useState } from "react";

function Contact() {

  const [user, setUser] = useState({
    name:"",email:"",phone:"",address:""
  })

  let name,value;

  const handleInputs =(e)=>{
    name = e.target.name;
    value=e.target.value;

    setUser({...user, [name]:value})
  }

  const FillData = async (e)=>{
    e.preventDefault();

    const {name, email, phone, address} = user;

    const res = await fetch("/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,address
      })
    })

    const data = await res.json();
  }
 

  return (
    <div>
      <section
        className="section__height d-flex align-items-center justify-content-center"
        id="contact"
      >
        <div className="container1 container">
          <h2 className='pt-3 pb-3 '>Contact :)</h2>
          <div className="contact__container">
            <form className="" method="post" action="/contact">
              <div className="mb-3 pt-2 d-flex text-align-center align-items-center">  
              <label htmlFor="name"><i className="zmdi zmdi-account"></i></label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleInputs}
                  placeholder="Enter Name" 
                /> 
              </div>
              <hr/>
              <div className="mb-3 pt-2 d-flex text-align-center align-items-center"> 
              <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleInputs}
                  placeholder="Enter Email" 
                /> 
              </div>
              <hr/>
              <div className="mb-3 pt-2 d-flex text-align-center align-items-center"> 
              <label htmlFor="phone"><i className="zmdi zmdi-phone-in-talk"></i></label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  onChange={handleInputs}
                  placeholder="Enter Number" 
                /> 
              </div> 
              <hr/>
              <div className="mb-3 pt-2 d-flex text-align-center "> 
              <label htmlFor="number"><i className="zmdi zmdi-pin"></i></label>
                <textarea
                  className="form-control"
                  id="address"
                  name="address"
                  onChange={handleInputs}
                  placeholder="Enter Address" 
                  rows="3"
                ></textarea> 
              </div>
              <hr/>
              <div className="d-grid pb-3  d-md-block">
                <button
                  className="btn btn-outline-success  p-2   rounded"
                  id="button"
                  type="submit"
                  value="Submit"
                  role="button"
                  onClick={FillData}
                >
                  Reach to Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

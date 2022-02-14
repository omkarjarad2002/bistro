import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import Spinner from "./Spinner"; 

function About() {
  const [aboutData, setData] = useState();
  const [loading, setLoading] = useState(false); 

  const navigate = useNavigate();

  const callAboutPage = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4457/get/about", {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setData(data);
      setLoading(false);

      if (!res.status === 200) {
        setLoading(false);
        throw new Error(res.error);
      }
      
    } catch (error) {
      navigate("/register");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

   if(loading){
     return <Spinner/>
   }
 
  return (
    <>
      <div className="container emp-profile pt-5"> 
        <form method="GET">
          <div className="row ">
            <div className="col-md-4">
              <div className="profile-img">
          
                <h1 style={{fontFamily:"cursive"}}>BISTRO</h1>
              </div>{" "}
            </div>
            <div className="col-md-6 ps-2">
              <div className="profile-head">
                <h5>{(aboutData?.name)?aboutData?.name:<Spinner/>}</h5> 

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active mt-5 mb-2"
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      href="#home"
                    >
                      About
                    </a>
                  </li> 
                </ul>
              </div>
            </div>
            <div className="col-md-2">
            <button className="btn btn-secondary btn-sm">
                <Link to={`/editProfile/${aboutData?._id}`}>
                  Edit Profile
                </Link>
              </button>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-4">
              <div className="profile-work">
                <div>
                  <button className="btn btn-primary"><Link to={`/UserOrderHistory/${aboutData?._id}`}>Check Order History</Link></button>
                </div>
                <br></br>
              </div>
            </div>
            <div className="col-md-8 pl-5  about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>{aboutData?._id}</p>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{aboutData?.name}</p>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{aboutData?.email}</p>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{aboutData?.phone}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h5>I am from profile</h5>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
} 

export default About;

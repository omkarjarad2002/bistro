import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserDetails() {
  const [OrderDetails, setOrderDetails] = useState([]);

  const getOrderDetails = async () => {
    try {
      const res = await fetch(
        `https://bistro-backend.onrender.com/get/UserDetails`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await res.json();
      setOrderDetails(data);
    } catch (error) {
      alert("Somethingwent wrong here !");
    }
  };

  useEffect(() => {
    getOrderDetails();
  });

  return (
    <div className="fooditems__container text-align-center pt-5 pb-5 container ">
      <h5 style={{ color: "purple" }}>Order History !</h5>

      {OrderDetails?.map((user) => (
        <div className="card d-flex mt-4 d-inline-flex ms-4 getabout2">
          <div className="card-body user__details__data__div">
            <h5 className="card-title user__details__data">
              Name : {user.name}
            </h5>
            <p className="card-title user__details__data">
              Email : {user.email}
            </p>
            <p className="card-title user__details__data">
              Phone No. : {user.phone}
            </p>
            <p className="card-title user__details__data">
              UserID : {user._id}
            </p>
            <p className="card-title user__details__data">
              Registration Date : {user.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserDetails;

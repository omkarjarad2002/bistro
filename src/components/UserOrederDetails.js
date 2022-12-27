import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

function UserOrederDetails() {
  const { id } = useParams();

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://bistro-backend.onrender.com/get/userOrederDetails/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await res.json();
      setUser(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Something went wrong !!");
    }
  };

  useEffect(() => {
    getUserDetails();
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="card d-flex mt-4 d-inline-flex ms-4 getabout2">
        <div className="card-body">
          <p className="card-title">Order ID : {user?.name}</p>
          <p className="card-title">Order ID : {user?.email}</p>
          <p className="card-title">Order ID : {user?.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default UserOrederDetails;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

function Fooditems() {
  const [loading, setLoading] = useState(false);

  const [restaurants, setRestaurant] = useState([]);

  const navigate = useNavigate();

  const getAllRestaurants = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4457/get/allrestaurants", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setRestaurant(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Restaurants are not awailable now !");
    }
  };

  useEffect(() => {
    getAllRestaurants();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="fooditems__container text-align-center pt-5 pb-5 container ">
      <h5 style={{ color: "purple" }}>Choose a restaurant near about you !</h5>

      {restaurants?.map((restaurant) => (
        <Link to={`/totalinfo/${restaurant._id}`}>
          <div className="card fooditems__card d-flex mt-4 d-inline-flex ms-4 getabout2">
            <img
              src={`http://localhost:4457/uploads/${restaurant.file}`}
              style={{ maxHeight: "250px", height: "100%" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{restaurant.name}</h5>
              <p className="card-title">{restaurant.address}</p>
              <p className="card-title">{restaurant.items}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Fooditems;

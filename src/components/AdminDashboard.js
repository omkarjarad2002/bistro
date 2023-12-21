import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Spinner from "./Spinner";

function AdminDashboard() {
  let i = 1;

  const [restaurants, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <>
      <div>
        <button className="mt-5 ms-2 btn btn-success ">
          <Link to={"/getUsersDetails"}>Check Users</Link>
        </button>
      </div>

      <table className="table mt-5 table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            {/* <th scope="col">Restaurants ID</th> */}
            <th scope="col">Restaurants Name</th>
            {/* <th scope="col">Restaurants item</th> */}
            <th scope="col">Date</th>
            <th scope="col">Admin</th>
          </tr>
        </thead>
        {restaurants?.map((restaurant) => (
          <tbody>
            <tr>
              <th scope="row">{i++}</th>
              {/* <th scope="row">{restaurant._id}</th> */}
              <td>{restaurant.name}</td>
              {/* <td>{restaurant.items}</td> */}
              <td>{restaurant.date}</td>
              <div className="form-check form-switch">
                <button className="btn btn-primary btn-sm">
                  <Link to={`/restaurantdashboard/${restaurant._id}`}>GO</Link>
                </button>
              </div>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default AdminDashboard;

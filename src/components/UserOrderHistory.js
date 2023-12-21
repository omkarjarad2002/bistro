import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "./Spinner";

function UserOrderHistory() {
  const { id } = useParams();

  const [orders, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllCartOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:4457/get/userOrders/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setOrder(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Orders Data Not Found !");
    }
  };

  useEffect(() => {
    getAllCartOrders();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="fooditems__container text-align-center pt-5 pb-5 container ">
      <h3>
        <Link style={{ color: "black", cursor: "initial" }} to="">
          Order History
        </Link>
      </h3>

      {orders.map((order) => (
        <div className="card   d-flex mt-4 d-inline-flex ms-4 getabout2">
          <div className="card-body">
            <p className="card-title">
              <Link to={`/totalinfo/${order?.restaurantID}`}>
                Restaurant ID : {order?.restaurantID}
              </Link>
            </p>
            <p className="card-title">Order ID : {order?._id}</p>
            <p className="card-title">Order TotalPrice : {order?.totalPrice}</p>
            <p className="card-title">Order Address : {order?.UserAddress}</p>
            <p className="card-title" style={{ color: "red" }}>
              Order Status : {order?.orderStatus}
            </p>
            <p className="card-title" style={{ color: "green" }}>
              Note : {order?.reason}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserOrderHistory;

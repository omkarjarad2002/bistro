import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "./Spinner";

function OrderHistory() {
  const [value, setValue] = useState("orderplaced");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("Your Country is " + this.state.value);
    event.preventDefault();
  };

  const { id } = useParams();

  const [orders, setOrder] = useState([]);

  const getAllCratOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:4457/get/cartOrders/${id}`, {
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
    getAllCratOrders();
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

      {orders?.map((order) => (
        <div className="card   d-flex mt-4 d-inline-flex ms-4 getabout2">
          <div className="card-body">
            <p className="card-title">Order ID : {order._id}</p>
            <p className="card-title">
              <Link to={`/userOrederDetails/${order.UserID}`}>
                User ID : {order.UserID}
              </Link>{" "}
            </p>
            <p className="card-title">Order Address : {order.UserAddress}</p>
            <p className="card-title">Order Date : {order.date}</p>
          </div>

          <button className="btn btn-primary btn-sm">
            <Link to={`/orderHistory__next/${order?._id}`}>Update Status</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;

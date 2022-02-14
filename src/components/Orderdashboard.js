import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { addUser } from "../features/Userslice";
import { totalPrice } from "../features/Cartslice";
import { addRestaurantUser } from "../features/RestaurantUserSlice";

function Orderdashboard() {
  const User = useSelector((state) => state.user);

  const RestaurantUser = useSelector((state) => state.restaurantuser);

  const { products: cartproducts, totalPrice } = useSelector(
    (state) => state.cart
  );
  const Razorpay = useRazorpay();
 

  const [userAddress, setAddress] = useState("");

  const OrderAddressApi=async()=>{
    
    const newOrder = {
      UserAddress:userAddress,
      UserID:User.User._id,
      totalPrice,
      restaurantID:RestaurantUser.RestaurantUser,
    } 

    const response = await fetch("http://localhost:4457/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    const data = await response.json();

  }
 

  const handlePayment = useCallback(async () => {  

    
    const order = await fetch("http://localhost:4457/razorPayment", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await order.json();

    const options = {
      key: "rzp_test_gYyWEU6sKcZ2Lk",
      amount: res.amount,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: res.id.order_IrVrqVFbNirkZp,
      handler: (res) => {
        if(!res){
          return;
        }else{
          OrderAddressApi();
        }
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay, userAddress]);

  return (
    <div>
      <div className="container d-flex flex-wrap pt-5 pb-5">
        {cartproducts.map(({ product, quantity, _id }) => (
          <div className="col-4 pt-5 ms-4">
            <div
              className="card mb-3 "
              style={{ maxWidth: "600px", border: "1px solid white" }}
            >
              <a className="pt-2 ms-3" style={{ color: "green" }}>
                Bill Details
              </a>
              <hr></hr>
              <div className="row">
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex pt-0">
                      <p className="col-sm-10 col-form-label">Item Name</p>
                      <p htmlFor="quentity" className="col-sm-2 col-form-label">
                        :
                      </p>

                      <p className="pt-2 col-md-8"> {product?.name}</p>
                    </div>

                    <div className="d-flex pt-2">
                      <p className=" col-sm-10 col-form-label">
                        Total No. of Items
                      </p>
                      <p className=" col-sm-2 col-form-label">:</p>

                      <p className="pt-2 col-md-8">{quantity}</p>
                    </div>
                    <div className="d-flex pt-2">
                      <p className=" col-sm-10 col-form-label">Item discount</p>
                      <p className=" col-sm-2 col-form-label">:</p>

                      <p className="pt-2 col-md-8">10%</p>
                    </div>
                    <div className="d-flex pt-2">
                      <p className="  col-sm-10 col-form-label">
                        Taxes and Charges
                      </p>
                      <p className="  col-sm-2 col-form-label">:</p>

                      <p className="pt-2 col-md-8">Rs.13.98</p>
                    </div>
                    <div className="d-flex pt-2">
                      <p className=" col-sm-10 col-form-label">Item total</p>
                      <p className=" col-sm-2 col-form-label">:</p>

                      <p className="pt-2 col-md-8">
                        {quantity * product?.price + 13.98}
                      </p>
                    </div>
                    <hr></hr>
                    <div className="d-flex pt-2">
                      <h5 className="  col-sm-10 col-form-label">TO PAY</h5>
                      <h5 className="  col-sm-2 col-form-label">:</h5>
                      <h5 className="pt-2 col-md-8" style={{ float: "right" }}>
                        Rs.{quantity * product?.price + 13.98 - 10}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex pt-2" style={{ border: "1px solid green" }}>
              <p
                htmlFor="quentity"
                className="ms-4 col-form-label"
                style={{ color: "green" }}
              >
                You have saved ₹10 on the bill !
              </p>
            </div>
            <div
              className="d-flex  btn-success mt-2"
              style={{ border: "1px solid green" }}
            ></div>
          </div>
        ))}
      </div>

      <div className="container   pt-5 pb-5">
        <h5 className="ms-3">Enter Delivery Address</h5>
        <div class="form-floating">
          <form className="" method="POST">
            <div className="d-flex pt-3">
              <i class="zmdi zmdi-home mt-4 ms-3"></i>
              <textarea
                type="text"
                className="form-control"
                autoComplete="off"
                id="UserAddress"
                name="UserAddress"
                placeholder="Please leave address here..."
                value={userAddress}
                onChange={(e)=>(setAddress(e.target.value))}
              />
            </div>
          </form>
        </div>
      </div>


      <div>
        <button
          className="btn mt-4 btn-success"
          onClick={handlePayment}
          style={{ maxWidth: "200px", width: "100%", float: "right" }}
        >
          PROCEED TO PAY
          <i class="zmdi zmdi-arrow-right ms-3" style={{ color: "white" }}></i>
        </button>
      </div>
    </div>
  );
}

export default Orderdashboard;

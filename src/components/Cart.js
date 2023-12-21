import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { incrementQuantity } from "../features/Cartslice";
import { decrementQuantity } from "../features/Cartslice";
import { clearCart } from "../features/Cartslice";
import { UserContext } from "../App";

function Cart() {
  const amount = useSelector((state) => state.amount);
  const { state } = useContext(UserContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products: cartproducts, totalPrice } = useSelector(
    (state) => state.cart
  );
  const { id } = useParams();

  const incrementProductQuantity = (product) => {
    dispatch(incrementQuantity(product._id));
  };

  const decrementProductQuantity = (product) => {
    dispatch(decrementQuantity(product._id));
  };

  const clearcart = () => {
    dispatch(clearCart());
  };

  const checkUser = (e) => {
    if (state) {
      navigate("/orderdashboard");
    } else {
      navigate("/register");
      alert("Please Register/Login First !");
    }
  };

  return (
    <div className="container pt-3 ">
      <h2>Shopping Cart</h2>
      <button
        className="btn btn-danger mt-3 ms-2"
        onClick={() => {
          clearcart();
        }}
      >
        Clear Cart
      </button>
      <hr />
      {cartproducts.map(({ product, quantity, _id }) => (
        <div className="d-flex pt-4 ">
          <div className="col-7 productCart">
            <div
              className="card mb-3 "
              style={{ maxWidth: "1000px", border: "1px solid white" }}
            >
              <div className="row g-0  ">
                <div className="col-md-5">
                  <img
                    src={`http://localhost:4457/uploads/${product?.file}`}
                    className="img-fluid rounded-start"
                    alt="..."
                    name="file"
                    style={{
                      maxWidth: "200px",
                      width: "100%",
                      maxHeight: "200px",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{product?.name}</h5>

                    <div className="d-flex pt-3">
                      <h4
                        htmlFor="quentity"
                        className="col-sm-6 col-form-label"
                      >
                        Quantity :
                      </h4>
                      <h4 className="pt-1">{quantity}</h4>
                    </div>
                    <button
                      className="btn btn-success mt-3 ms-2"
                      onClick={() => {
                        incrementProductQuantity(product);
                      }}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-success mt-3 ms-2"
                      onClick={() => {
                        decrementProductQuantity(product);
                      }}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-primary mt-3 ms-2"
                      onClick={checkUser}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="card-body">
                    <h5 style={{ float: "right" }}>Rs.{product?.price}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <br />
    </div>
  );
}

export default Cart;

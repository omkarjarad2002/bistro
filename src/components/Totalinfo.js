import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"; 
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/actionCreator";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addProduct } from "../features/Cartslice";
import { addRestaurantUser } from "../features/RestaurantUserSlice";
import Spinner from './Spinner';

function Totalinfo() {
  const [loading, setLoading] = useState(false);
  const RestaurantUser = useSelector((state) => state.restaurantuser);

  console.log(RestaurantUser);

  const userDispatch = useDispatch();

  const { products: cartproducts, totalPrice } = useSelector(
    (state) => state.cart
  );
  console.log(cartproducts);

  const amount = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const { takeamount } = bindActionCreators(actionCreators, dispatch);

  const addProductToCart = (product) => {
    dispatch(addProduct({ product, quantity: 1 }));
  };
 
  const [userData, setUserData] = useState();

  const { id } = useParams();
  userDispatch(addRestaurantUser(id));

  const navigate = useNavigate();

  const callAboutPage = async () => {
    setLoading(true)
    let i = 0;
    try {
      const res = await fetch(`http://localhost:4457/get/restaurant/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data);
      setLoading(false)

      if (!res.status === 200) {
        setLoading(false)
        throw new Error(res.error);
      }
    } catch (error) {
      setLoading(false)
    }
  };

  const [products, setProduct] = useState();

  const getAllProducts = async () => {
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:4457/get/allproducts/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      });

      const productdata = await res.json();
      setProduct(productdata);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  useEffect(() => {
    callAboutPage();
    getAllProducts();
  }, []);

  if(loading){
    return <Spinner/>
  }

  return (
    <div className="fooditems__container text-align-center pt-5 pb-5 container ">
      <figure className="text-center">
        <blockquote className="blockquote">
          <h1
            className="text-align-center ps-5 display-1"
            style={{ color: "purple" }}
          >
            {userData?.name}
          </h1>
        </blockquote>
        <figcaption className="blockquote-footer">
          <cite title="Source Title">{userData?.email}</cite>
        </figcaption>
      </figure>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{ maxHeight: "500px", height: "100%" }}
        >
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/photos/chickpea-hummus-bowl-closeup-with-pita-flatbread-dipping-isolated-on-picture-id1323443868?b=1&k=20&m=1323443868&s=170667a&w=0&h=eijZOSiIh50JRokQIzG_E-vxXd1Tf5BxA_PRHsHIdeY="
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/photos/man-smiles-while-picking-up-curbside-order-picture-id1318003130?b=1&k=20&m=1318003130&s=170667a&w=0&h=-FmEqD46sbBYRSG9I6vPYWdEB95JSqXEQT0hcuLkmsc="
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="pt-5">Items</h2>

      <div className="container product__container d-grid">
        {products?.map((product) => (
          <div className="card product__card">
            <div className=" imageContainer">
              <img
                src={`http://localhost:4457/uploads/${product.file}`}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="d-flex veg__nonveg__div">
              <div className="name__div">
                <h5 className="card-title p-4">{product.name}</h5>
              </div>
              <div
                className={
                  product.type == "veg" ? "type__div__veg" : "type__div__nonveg"
                }
              >
                <button className="">{product.type}</button>
              </div>
            </div>
            <p className="card-text">
              <small className="text-Active p-4">
                Price : ${product.price}
              </small>
            </p>
            <button
              className="btn btn-danger btn-sm"
              style={{ float: "bottom" }}
              onClick={() => {
                addProductToCart(product);
              }}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Totalinfo;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom"; 
import Spinner from './Spinner';


function Restaurantdashboard() {
  const [userData, setUserData] = useState();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();

  const changeImage = (e) => {
    const files = e.target.files;

    if (!files) {
      return;
    }

    const file = files[0];
    setFile(file);
  };
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    file: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setProduct({ ...product, [name]: value });
  };

  const uploadImage = async () => {
    const formdata = new FormData();
    formdata.append("file", file);
    const res = await axios.post("http://localhost:4457/uploadfile", formdata);
    return res;
  };

  const PostData = async (e) => {
    e.preventDefault();
    const file = await uploadImage();

    const { name, price, quentity, type } = product;

    const res = await fetch("http://localhost:4457/addnewproduct", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        name,
        price,
        quentity,
        type,
        file: file.data.file.filename,
        restaurantID: userData?._id,
      }),
    });

    const data = await res.json();

    if (!data) {
      console.log("ERROR");
    } else {
      alert("New Product Added Successfully !");
      window.location.reload();
    }
  };

  const callAboutPage = async () => {
    setLoading(true)
    try {
      const res = await fetch(
        `http://localhost:4457/get/info/restaurant/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await res.json();
      setUserData(data);
      setLoading(false)

      if (!res.status === 200) {
        setLoading(false)
        throw new Error(res.error);
      }
    } catch (error) {
      setLoading(false)
      alert("ERROR");
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
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Products</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{userData?._id}</th>
            <td>{userData?.name}</td>
            <td>{userData?.email}</td>
            <td>{userData?.items}</td>
          </tr>
        </tbody>
      </table>

      {/*form for items addition */}
      <form className="container restodashboard pt-5">
        <div className="mb-3 row">
          <label htmlFor="product" className="col-sm-1 col-form-label">
            Product :
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              name="name"
              autoComplete="off"
              onChange={handleInputs}
              className="form-control"
              id="product"
            />
          </div>
          <label htmlFor="price" className="col-sm-1 col-form-label">
            Price :
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              autoComplete="off"
              name="price"
              onChange={handleInputs}
              className="form-control"
              id="price"
            />
          </div>
          <label htmlFor="quentity" className="col-sm-1 col-form-label">
            Quentity :
          </label>
          <div className="col-sm-3">
            <input
              type="Number"
              autoComplete="off"
              name="quentity"
              onChange={handleInputs}
              className="form-control"
              id="quentity"
            />
          </div>
          <label htmlFor="type" className="col-sm-1 col-form-label  pt-4">
            Type :
          </label>
          <div className="col-sm-3 pt-4">
            <input
              type="text" 
              name="type"
              onChange={handleInputs}
              className="form-control"
              placeholder="veg/nonveg"
              id="type"
            />
          </div>
          <label htmlFor="file" className="col-sm-1 col-form-label  pt-4">
            Image :
          </label>
          <div className="col-sm-3 pt-4">
            <input
              type="file"
              autoComplete="off"
              name="file"
              onChange={changeImage}
              className="form-control"
              id="file"
            />
          </div>
        </div>
        <button className="col-sm-2 btn mt-5 btn-success">
          <Link to={`/restaurantproducts/${id}`}>CHECK PRODUCTS</Link>{" "}
        </button>
        <button className="col-sm-2 btn mt-5 btn-danger">
          <Link to={`/orderHistory/${id}`}>CHECK ORDER HISTORY</Link>{" "}
        </button>
        <button className="col-sm-2 mt-5 btn btn-primary" onClick={PostData}>
          ADD PRODUCT
        </button>
      </form>
    </>
  );
}

export default Restaurantdashboard;

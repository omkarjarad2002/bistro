import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

function UpdateProduct() {
  const [file, setFile] = useState();
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const changeImage = (e) => {
    const files = e.target.files;

    const file = files[0];
    setFile(file);
  };

  const [product, setProduct] = useState({
    name: "",
    price: "",
    quentity: "",
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

  const PostData = async () => {
    const file = await uploadImage();

    const { name, price, quentity } = product;

    const res = await fetch(`http://localhost:4457/updateproduct/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        name,
        price,
        quentity,
        file: file.data.file.filename,
      }),
    });

    const data = await res.json();

    if (!data) {
      console.log("ERROR");
    } else {
      alert("Product upadated successfully !");
      window.location.reload();
    }
  };

  const DeleteProduct = async () => {
    try {
      const res = await fetch(`http://localhost:4457/updateproduct/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const callproductdata = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:4457/updateproduct/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setProductData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    callproductdata();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {/*form for product updation */}
      <form className="container restodashboard pt-5">
        <div className="mb-3 row">
          <label htmlhtmlFor="product" className="col-sm-1 col-form-label">
            Title :
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              placeholder={productData?.name}
              onChange={handleInputs}
              name="name"
              autoComplete="off"
              className="form-control"
              id="product"
            ></input>
          </div>
          <label htmlhtmlFor="price" className="col-sm-1 col-form-label">
            Price :
          </label>
          <div className="col-sm-3">
            <input
              type="number"
              placeholder={productData?.price}
              onChange={handleInputs}
              autoComplete="off"
              name="price"
              className="form-control"
              id="price"
            />
          </div>
          <label htmlhtmlFor="quentity" className="col-sm-1 col-form-label">
            Quentity :
          </label>
          <div className="col-sm-3">
            <input
              type="number"
              placeholder={productData?.quentity}
              onChange={handleInputs}
              autoComplete="off"
              name="quentity"
              className="form-control"
              id="quentity"
            />
          </div>
          <label htmlhtmlFor="file" className="col-sm-1 col-form-label pt-4">
            Image :
          </label>
          <div className="col-sm-3 pt-4">
            <input
              type="file"
              autoComplete="off"
              onChange={changeImage}
              name="file"
              className="form-control"
              id="file"
            />
          </div>
        </div>
        <button className="col-sm-2 btn btn-primary">
          <Link to="/restaurantproducts">CHECK PRODUCTS</Link>{" "}
        </button>
        <button className="col-sm-2 btn btn-danger" onClick={DeleteProduct}>
          REMOVE PRODUCT
        </button>
        <button className="col-sm-2 btn btn-success" onClick={PostData}>
          UPDATE PRODUCT
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;

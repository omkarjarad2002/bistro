import React, { useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom"
import Spinner from './Spinner';

function Restaurantproduct() {

    const {id} = useParams();
    const [products, setProduct] = useState(); 
    const [loading, setLoading] = useState(false);

    const getAllProducts = async ()=>{
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:4457/get/allproducts/${id}`,{
                method:"GET",
                headers:{
                    "Content-type":"application/json",
                },
                credentials:"include"
            })

            const data = await res.json();
            setProduct(data);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
        
    }

    useEffect(()=>{
        getAllProducts();
      },[])

    if(loading){
        return <Spinner/>
    };
  return <div className='container pb-5 pt-5'> 
  <div className='container pb-5 pt-5 ms-1'>
  <button className="col-sm-2 btn btn-warning"><Link to={`/restaurantdashboard/${id}`}>ADD NEW PRODUCT</Link> </button>
  </div>
  <div> 
  { products ?.map(product=>(    
        <div className="card products_card  d-grid mt-4 d-inline-flex ms-3 getabout2">
        <img  src={`http://localhost:4457/uploads/${product.file}`}  style={{maxHeight:"200px", height:"100%"}} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Product Name  :  {product.name}</h5>  
            <p className="card-title">Product price  :  {product.price}</p>   
            <p className="card-title">Quentity  :  {product.quentity}</p>   
        </div>
        <div> 
            <button className='btn btn-primary btn-sm me-2'><Link to={`/updateproduct/${product?._id}`}>EDIT PRODUCT INFORMATION</Link> </button>
        </div>   
        </div>   
      ))}
  </div>
 
  </div>;
}

export default Restaurantproduct;

import React, { useState } from "react";
import { useParams } from "react-router-dom";

function OrderHistory__next() {
  const { id } = useParams();
  const [getvalue, setValue] = useState("orderplaced");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  
  const [getreason, setReason] = useState({
    reason:""
  })

  let name,value;

  const handleInputs = (e)=>{ 
    name = e.target.name;
    value = e.target.value

    setReason({...getreason, [name]:value})
  }

  const UpdateOrderStatus = async () => {

    const { reason } = getreason; 
    if(!reason){
        alert("NO NOTE")
    }


    const response = await fetch(`http://localhost:4457/updateStatus/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        updateStatus: getvalue,
        reason
      }),
    });

    const data = await response.json();
    if (response.status == 200) {
      alert("Status updated successfully !");
    }
  };
  return (
    <div
      className="container mt-5"
      style={{ backgroundColor: "grey", maxWidth: "500px", width: "100%" }}
    >
      <div className="container  pt-5 pb-5 pb-2">
        <div className="FirstAboutBox d-flex">
          <div className="CountrySelectionForm  button pt-2">
            <form className="Form">
              <select value={value} onChange={handleChange}>
                <option value="order placed" style={{ color: "green" }}>
                  Placed
                </option>
                <option value="order confirmed" style={{ color: "green" }}>
                  Confirm
                </option>
                <option value="order in process..." style={{ color: "blue" }}>
                  Order in Process
                </option>
                <option value="order done!" style={{ color: "green" }}>
                  Order done
                </option>
                <option value="order deliverd!" style={{ color: "green" }}>
                  Order Delivered
                </option>
                <option style={{ color: "red" }} value="order cancelled">
                  Order Cancelled
                </option>
              </select>
            </form>
          </div>
          <div className="mb-3 pt-2 ps-5 d-flex text-align-center align-items-center">
            <label htmlFor="validationDefault01"> 
            <h5>Note </h5>
            </label>
            <textarea
            style={{maxHeight:"400px", height:"100%", minHeight:"100px"}}
              type="text"
              className="form-control ms-2"
              autoComplete="off"
              id="validationDefault01"
              name="reason"
              placeholder="If order cancelled.Then why cancelled?"
                value={getreason.reason}
                onChange={handleInputs}
              required
            />
          </div> 
        </div>
          <button className="btn btn-success " onClick={UpdateOrderStatus}>
            Update
          </button>
      </div>
    </div>
  );
}

export default OrderHistory__next;

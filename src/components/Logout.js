import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../App";

function Logout() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const callLogoutPage = async () => {
    try {
      const res = await fetch("http://localhost:4457/logout", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      if (data) {
        dispatch({ type: "USER", payload: false });
        navigate("/register");
      }
    } catch (err) {
      alert("Some Error Occured !");
    }
  };

  useEffect(() => {
    callLogoutPage();
  });

  return (
    <>
      <h1>Logout Page</h1>
    </>
  );
}

export default Logout;

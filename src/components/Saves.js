import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Saves() {
  const [user, setUser] = useState([]);

  // GETTING ALL THE USERS
  useEffect(() => {
    axios
      .get("http://localhost:5000/auth")
      .then((res) => {
        // setUser(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h3>This is your information</h3>
    </div>
  );
}

export default Saves;

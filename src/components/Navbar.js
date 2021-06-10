import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import UserContext from "../components/auth/Login";
import LogOutBtn from "./auth/LogOutBtn";
import NewListing from "../components/NewListing";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  const username = useContext(UserContext);

  function toggleDark(e) {
    document.querySelector("body").style.background = "#181818";
    document.getElementById("light-btn").style.display = "block";
    e.target.style.display = "none";
    document.querySelector("*").style.color = "#fff";
  }
  function toggleLight(e) {
    document.querySelector("body").style.background = "#fff";
    document.getElementById("dark-btn").style.display = "block";
    e.target.style.display = "none";
    document.querySelector("*").style.color = "#000";
  }

  return (
    <div className="nav">
      <Link to="/">Home</Link>
      {loggedIn === false || loggedIn === undefined ? (
        <section>
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
        </section>
      ) : (
        <section>
          <Link to="/saves">Saves</Link>
          <Link to="/new-listing">Add Listing</Link>
          <LogOutBtn />
        </section>
      )}

      <button id="dark-btn" onClick={toggleDark}>
        DARK
      </button>
      <button id="light-btn" onClick={toggleLight}>
        LIGHT
      </button>
    </div>
  );
}

export default Navbar;

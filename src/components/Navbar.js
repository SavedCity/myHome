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
      <Link className="home-link" to="/">
        Home
      </Link>
      {loggedIn === false || loggedIn === undefined ? (
        <section>
          <Link className="saves-link" to="/login">
            Saves
          </Link>
          <Link className="add-link" to="/login">
            Add Listing
          </Link>
          <Link className="login-link" to="/login">
            Log in / Register
          </Link>
        </section>
      ) : (
        <section>
          <Link className="saves-link" to="/saves">
            Saves
          </Link>
          <Link className="add-link" to="/new-listing">
            Add Listing
          </Link>
          <LogOutBtn />
        </section>
      )}

      <button id="dark-btn" onClick={toggleDark}>
        DARK
      </button>
      <button id="light-btn" onClick={toggleLight}>
        LIGHT
      </button>
      <Link to="/">
        <div className="nav-logo-div">
          <img
            className="nav-logo-house"
            src="https://www.pngrepo.com/download/29024/home-symbol.png"
          />
          <h2 className="nav-logo-name">myHome</h2>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;

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

  window.onscroll = () => {
    let nav = document.querySelector(".nav");

    // NAV BAR ON SCROLL CHANGES CSS
    if (window.scrollY < 90) {
      nav.classList.remove("scroll");
    } else {
      nav.classList.add("scroll");
    }
  };

  return (
    <div className="nav">
      <Link className="home-link" to="/">
        Home
      </Link>
      <div className="dropdown">
        <button className="dropbtn">
          Location <i class="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link className="drop-link" to="/TX">
            Texas
          </Link>
          <Link className="drop-link" to="/FL">
            Florida
          </Link>
          <Link className="drop-link" to="/SC">
            South Carolina
          </Link>
          <Link className="drop-link" to="/NC">
            North Carolina
          </Link>
          <Link className="drop-link" to="/GA">
            Georgia
          </Link>
          <Link className="drop-link" to="/LA">
            Lousiana
          </Link>
          <Link className="drop-link" to="/VA">
            Virginia
          </Link>
        </div>
      </div>
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

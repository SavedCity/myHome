import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";

function Home() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const { userInfo, getUserInfo, loggedIn } = useContext(AuthContext);
  const username = userInfo && loggedIn ? userInfo.username : "";

  function renderData() {
    axios
      .get("https://home-decor-backend.herokuapp.com/house")
      .then((res) => {
        setData(res.data);
        showSlides();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    renderData();
    // setUser(userInfo);
  }, []);

  let tx = 0;
  data.forEach((e) => {
    if (e["location"] === "TX") {
      tx++;
    }
  });

  let fl = 0;
  data.forEach((e) => {
    if (e["location"] === "FL") {
      fl++;
    }
  });

  let sc = 0;
  data.forEach((e) => {
    if (e["location"] === "SC") {
      sc++;
    }
  });

  let nc = 0;
  data.forEach((e) => {
    if (e["location"] === "NC") {
      nc++;
    }
  });

  let ga = 0;
  data.forEach((e) => {
    if (e["location"] === "GA") {
      ga++;
    }
  });

  let la = 0;
  data.forEach((e) => {
    if (e["location"] === "LA") {
      la++;
    }
  });

  let va = 0;
  data.forEach((e) => {
    if (e["location"] === "VA") {
      va++;
    }
  });

  var slideIndex = 0;

  function showSlides() {
    var i;
    var slides = document.getElementById("homeSlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); //
  }

  return (
    <div>
      <div class="home-slideshow-container">
        <div id="homeSlides fade">
          <img
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="house"
          />
        </div>
        <div id="homeSlides fade">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="house"
          />
        </div>
        <div id="homeSlides fade">
          <img
            src="https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80"
            alt="house"
          />
        </div>
      </div>

      <div className="home-links">
        <Link to="/TX">Texas</Link>
        <h2>{tx} listing(s)</h2>
        <Link to="/FL">Florida</Link>
        <h2>{fl} listing(s)</h2>
        <Link to="/SC">South Carolina</Link>
        <h2>{sc} listing(s)</h2>
        <Link to="/NC">North Carolina</Link>
        <h2>{nc} listing(s)</h2>
        <Link to="/GA">Georgia</Link>
        <h2>{ga} listing(s)</h2>
        <Link to="/LA">Lousiana</Link>
        <h2>{la} listing(s)</h2>
        <Link to="/VA">Virginia</Link>
        <h2>{va} listing(s)</h2>
      </div>
      <h1>{username}</h1>
    </div>
  );
}

export default Home;

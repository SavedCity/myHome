import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";

function Home() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const { userInfo, getUserInfo, loggedIn, view, setView } = useContext(
    AuthContext
  );
  const username = userInfo && loggedIn ? userInfo.username : "";
  // const [stopSlideshow, setStopSlideshow] = useState(false);
  // const slideImages = [
  //   "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  //   "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  //   "https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
  //   "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
  //   "https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  //   "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  //   "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  // ];
  // const [currentSlide, setCurrentSlide] = useState(slideImages[0]);

  // function slides(array) {
  //   for (var i = 0; i < array.length - 1; i++) {
  //     if (i === array.length - 1) {
  //       setCurrentSlide(array[0]);
  //       i = 0;
  //     } else {
  //       setTimeout(() => {
  //         setCurrentSlide(array[i]);
  //
  //         console.log(i);
  //       }, 3300);
  //     }
  //   }
  // }

  function renderData() {
    axios
      .get("https://home-decor-backend.herokuapp.com/house")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    renderData();
    // slides(slideImages);

    showSlides();
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
    var slides = document.getElementsByClassName("homeSlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active";
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3300);
  }

  return (
    <div>
      <div className="home-slideshow-container">
        <div className="homeSlides homeFade">
          <img
            className="home-slideshow-img"
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="house"
          />
        </div>
        <div className="homeSlides homeFade">
          <img
            className="home-slideshow-img"
            src="https://images.unsplash.com/photo-1464146072230-91cabc968266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="house"
          />
        </div>
        <div className="homeSlides homeFade">
          <img
            className="home-slideshow-img"
            src="https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80"
            alt="house"
          />
        </div>
        <div className="homeSlides homeFade">
          <img
            className="home-slideshow-img"
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80"
            alt="house"
          />
        </div>
        <div className="homeSlides homeFade">
          <img
            className="home-slideshow-img"
            src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="house"
          />
        </div>
        <div className="homeSlides homeFade">
          <img
            className="home-slideshow-img"
            src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
            alt="house"
          />
        </div>
        <div className="homeSlides homeFade">
          <img
            className="home-slideshow-img"
            src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="house"
          />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
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

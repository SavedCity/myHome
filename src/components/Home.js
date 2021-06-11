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

  // const username = userInfo && loggedIn ? userInfo.username : "";
  // const [stopSlideshow, setStopSlideshow] = useState(false);
  const images = [
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
    "https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  ];
  const randomImage = Math.floor(Math.random() * images.length);
  console.log(randomImage, images[randomImage]);
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

    // showSlides();
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

  // var slideIndex = 0;
  //
  // function showSlides() {
  //   var i;
  //   var slides = document.getElementsByClassName("homeSlides");
  //   var dots = document.getElementsByClassName("dot");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {
  //     slideIndex = 1;
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //
  //   dots[slideIndex - 1].className += " active";
  //   slides[slideIndex - 1].style.display = "block";
  //   setTimeout(showSlides, 3300);
  // }

  return (
    <div>
      <div className="home-img-div">
        <div>
          <h1>START YOUR HOME SEARCH HERE</h1>
        </div>
        <div className="home-div">
          <img
            className="home-slideshow-img"
            src={(randomImage, images[randomImage])}
            alt="house"
          />
        </div>
        <section>
          <h2>
            TOP OF THE CLASS LISTINGS IN OUR{" "}
            <span style={{ borderBottom: "1px solid" }}>SOUTHERN</span> STATES
          </h2>
        </section>
      </div>
      {/*<div className="home-slideshow-container">
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
      </div>*/}

      <div className="home-links">
        <div>
          <h1>Texas</h1>
          <Link to="/TX">
            <img
              className="home-images"
              src="https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2018/01/austin-texas.jpg?fit=1024%2C684&ssl=1"
            />
          </Link>
          <h2>{tx} listing(s)</h2>
        </div>

        <div>
          <h1>Florida</h1>
          <Link to="/FL">
            <img
              className="home-images"
              src="https://i1.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/05/miami-fl.jpg?fit=1024%2C684&ssl=1"
            />
          </Link>
          <h2>{fl} listing(s)</h2>
        </div>

        <div>
          <h1>South Carolina</h1>
          <Link to="/SC">
            <img
              className="home-images"
              src="https://oceananniesresorts.com/wp-content/uploads/2019/10/Myrtle-Beach-Bachelorette-Party.jpg"
            />
          </Link>
          <h2>{sc} listing(s)</h2>
        </div>

        <div>
          <h1>North Carolina</h1>
          <Link to="/NC">
            <img
              className="home-images"
              src="https://www.nationsonline.org/gallery/USA/City-of-Asheville-North-Carolina.jpg"
            />
          </Link>
          <h2>{nc} listing(s)</h2>
        </div>

        <div>
          <h1>Georgia</h1>
          <Link to="/GA">
            <img
              className="home-images"
              src="https://res.cloudinary.com/wegowordpress/images/f_auto,q_auto/v1573095081/shutterstock_733175515_umz7ji/shutterstock_733175515_umz7ji.jpg"
            />
          </Link>
          <h2>{ga} listing(s)</h2>
        </div>

        <div>
          <h1>Lousiana</h1>
          <Link to="/LA">
            <img
              className="home-images"
              src="https://www.pncpa.com/userfiles/insights/photodune-16436296-lousiana-state-capitol.jpg"
            />
          </Link>
          <h2>{la} listing(s)</h2>
        </div>

        <div>
          <h1>Virginia</h1>
          <Link to="/VA">
            <img
              className="home-images"
              src="https://business.directenergy.com/-/media/blog/article/2019/virginia-tn.ashx?h=700&la=en&w=1000"
            />
          </Link>
          <h2>{va} listing(s)</h2>
        </div>
      </div>
      <div className="footer">
        <div>
          <h2>Andy Checo</h2>
          <a href="https://www.linkedin.com/in/andy-checo/">LinkedIn</a>
          <a href="https://github.com/savedcity/">Github</a>
        </div>
        <div>
          <Link to="/">
            <div className="foot-logo-div">
              <img
                className="nav-logo-house"
                src="https://www.pngrepo.com/download/29024/home-symbol.png"
              />
              <h2 className="nav-logo-name">myHome</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

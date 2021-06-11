import React, { useState, useEffect, useContext } from "react";
import Edit from "./Edit";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function View(props) {
  const [listing, setListing] = useState([]);
  const listingId = props.match.params._id;
  const [loadingData, setLoadingData] = useState(false);
  const { loggedIn } = useContext(AuthContext);

  const history = useHistory();

  function renderData() {
    setLoadingData(true);
    axios
      .get("https://home-decor-backend.herokuapp.com/house/" + listingId)
      .then((res) => {
        setListing(res.data);
        setLoadingData(false);
        showSlides(slideIndex);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    renderData();
  }, []);

  var slideIndex = 1;

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  async function remove(event) {
    await axios.delete(
      "https://home-decor-backend.herokuapp.com/house/" + event.target.value
    );
    history.push("/" + listing.location);
    renderData();
  }

  return (
    <div className="view-container">
      {!loadingData ? (
        <>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <div class="numbertext">1 / 5</div>
              <img
                className="image-view"
                src={listing.image}
                alt={listing.location}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://www.norfolknavalhousing.com/media/com_posthousing/images/nophoto.png";
                }}
              />
            </div>

            <div className="mySlides fade">
              <div class="numbertext">2 / 5</div>
              <img
                className="image-view"
                src={listing.image2}
                alt={listing.location}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://www.norfolknavalhousing.com/media/com_posthousing/images/nophoto.png";
                }}
              />
            </div>

            <div className="mySlides fade">
              <div class="numbertext">3 / 5</div>
              <img
                className="image-view"
                src={listing.image3}
                alt={listing.location}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://www.norfolknavalhousing.com/media/com_posthousing/images/nophoto.png";
                }}
              />
            </div>

            <div className="mySlides fade">
              <div class="numbertext">4 / 5</div>
              <img
                className="image-view"
                src={listing.image4}
                alt={listing.location}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://www.norfolknavalhousing.com/media/com_posthousing/images/nophoto.png";
                }}
              />
            </div>

            <div className="mySlides fade">
              <div class="numbertext">5 / 5</div>
              <img
                className="image-view"
                src={listing.image5}
                alt={listing.location}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://www.norfolknavalhousing.com/media/com_posthousing/images/nophoto.png";
                }}
              />
            </div>

            <a
              className="prev"
              onClick={function plusSlides() {
                showSlides((slideIndex += -1));
              }}
            >
              &#10094;
            </a>
            <a
              className="next"
              onClick={function plusSlides() {
                showSlides((slideIndex += 1));
              }}
            >
              &#10095;
            </a>
          </div>

          <div className="show-details">
            <h2>${listing.price}</h2>
            <h3>{listing.bd} bedrooms</h3>
            <h3>{listing.ba} bathrooms</h3>
            <h3>{listing.sqft} sqft.</h3>
            <h4>
              {listing.address} {listing.city} <br /> {listing.location}{" "}
              {listing.zipcode}
            </h4>
            <h3> Built in {listing.yb}</h3>
          </div>
          {loggedIn ? (
            <>
              <Edit house={listing} renderData={renderData} />
              <button className="delete" value={listing._id} onClick={remove}>
                DELETE
              </button>
            </>
          ) : null}
        </>
      ) : (
        <div>
          <div id="loading" className="loading"></div>
          <img
            className="house"
            src="https://www.pngrepo.com/download/29024/home-symbol.png"
          />
        </div>
      )}
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

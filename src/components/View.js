import React, { useState, useEffect } from "react";
import Edit from "./Edit";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function View(props) {
  const [listing, setListing] = useState([]);
  const listingId = props.match.params._id;
  const [loadingData, setLoadingData] = useState(false);

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
    <div>
      {!loadingData ? (
        <>
          <div className="top-info-div">
            {listing.active === "active" ? (
              <section className="status">
                <div className="active-status"></div>
                <h4 className="house-active">Active</h4>
              </section>
            ) : (
              <section className="status">
                <div className="inactive-status"></div>
                <h4 className="house-inactive">Inactive</h4>
              </section>
            )}

            {listing.active === "active" ? (
              <p className="house-listedby">
                Contact {listing.listedBy} about this home
              </p>
            ) : null}
          </div>
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

          <h2>{listing.price}</h2>
          <p>{listing.bd} bedrooms</p>
          <p>{listing.ba} bathrooms</p>
          <p>{listing.sqft} sqft.</p>
          <p>
            {listing.address} {listing.city}, {listing.location}{" "}
            {listing.zipcode}
          </p>
          <p> Built in {listing.yb}</p>
          <button value={listing._id} onClick={remove}>
            DELETE
          </button>
          <Edit house={listing} renderData={renderData} />
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
    </div>
  );
}

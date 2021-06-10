import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Edit from "../Edit";

function Florida() {
  const [florida, setFlorida] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  function renderData() {
    setLoadingData(true);
    axios
      .get("https://home-decor-backend.herokuapp.com/house")
      .then((res) => {
        setFlorida(res.data);
        setLoadingData(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    renderData();
  }, []);

  return (
    <div className="main-container">
      <h1>Florida Homes</h1>
      {!loadingData ? (
        <div className="houses">
          {florida
            .filter((array) => array.location.includes("FL"))
            .map((house, key) => (
              <div key={key} className="house-container-outer">
                <div className="top-info-div">
                  {house.active === "active" ? (
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

                  {house.active === "active" ? (
                    <p className="house-listedby">
                      Contact {house.listedBy} about this home
                    </p>
                  ) : null}
                </div>

                <Link
                  to={{
                    pathname: "/view/" + house._id,
                    house: { house },
                    renderData: { renderData },
                  }}
                >
                  <div key={house._id} className="house-container">
                    <img
                      className="house-img"
                      src={house.image}
                      alt={house.location}
                    />

                    <div className="info">
                      <h1 className="house-price">${house.price}</h1>
                      <p className="house-bd">{house.bd} bedrooms</p>
                      <p className="house-ba">{house.ba} bathrooms</p>
                      <p className="house-sqft">{house.sqft} sqft.</p>
                      <p className="house-address">
                        {house.address} {house.city}, <br /> {house.location}{" "}
                        {house.zipcode}
                      </p>
                      <p className="house-yb"> Built in {house.yb}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
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

export default Florida;

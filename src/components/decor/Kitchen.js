import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Kitchen() {
  const [kitchen, setKitchen] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setLoadingData(true);
    axios
      .get("https://home-decor-backend.herokuapp.com/home")
      .then((res) => {
        setKitchen(res.data);
        setLoadingData(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main-container">
      <h1>Kitchen</h1>
      {!loadingData ? (
        <div className="items">
          {kitchen
            .filter((array) => array.room.includes("kitchen"))
            .map((item) => (
              <div key={item._id} className="item-container">
                <img className="item-img" src={item.image} alt={item.name} />
                <div className="info">
                  <h1 className="item-name">{item.name}</h1>
                  <h4 className="item-color">{item.color}</h4>
                  <h2 className="item-style">{item.style}</h2>
                  <h4 className="item-material">{item.material}</h4>
                </div>
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
      <Link to="/">BACK</Link>
    </div>
  );
}

export default Kitchen;

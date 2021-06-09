import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Living_Room() {
  const [livingRoom, setLivingRoom] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setLoadingData(true);
    axios
      .get("https://home-decor-backend.herokuapp.com/home")
      .then((res) => {
        setLivingRoom(res.data);
        setLoadingData(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Living Room</h1>
      {!loadingData ? (
        <div className="items">
          {livingRoom
            .filter((array) => array.room.includes("living room"))
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
          <div className="loading"></div>
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

export default Living_Room;

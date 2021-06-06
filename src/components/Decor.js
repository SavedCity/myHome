import React, { useState, useEffect } from "react";
import axios from "axios";

function Decor() {
  const [decor, setDecor] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setLoadingData(true);
    axios
      .get("https://home-decor-backend.herokuapp.com/home")
      .then((res) => {
        setDecor(res.data);
        setLoadingData(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {!loadingData ? (
        <>
          <h3>All of the decoration items are on this page!</h3>
          {decor.map((item) => (
            <div key={item.id}>{item.culture}</div>
          ))}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Decor;

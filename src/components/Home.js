import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

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

  return (
    <div>
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
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  return (
    <div>
      <div className="home-links">
        <Link to="/TX">Texas</Link>
        <Link to="/FL">Florida</Link>
        <Link to="/SC">South Carolina</Link>
        <Link to="/NC">North Carolina</Link>
        <Link to="/GA">Georgia</Link>
        <Link to="/LA">Lousiana</Link>
        <Link to="/VA">Virginia</Link>
      </div>
    </div>
  );
}

export default Home;

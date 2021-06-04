import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LogOutBtn from "./auth/LogOutBtn";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);

  return (
    <div>
      <Link to="/">myHome</Link>
      <br />
      {loggedIn === true ? (
        <>
          <Link to="/myBoard">myBoard</Link>
          <LogOutBtn />
        </>
      ) : null}

      {loggedIn === false ? (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Log In</Link>
        </>
      ) : null}
    </div>
  );
}

export default Navbar;

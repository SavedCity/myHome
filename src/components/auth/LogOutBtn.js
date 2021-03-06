import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    // await axios.get("http://localhost:5000/auth/logout");
    await axios.get("https://home-decor-backend.herokuapp.com/auth/logout");
    await getLoggedIn();
    history.push("/");
  }

  return (
    <span className="logout-link" onClick={logOut}>
      Log out
    </span>
  );
}

export default LogOutBtn;

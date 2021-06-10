import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [userInfo, setUserInfo] = useState(null);
  const [username, setAuthUsername] = useState("");

  async function getLoggedIn() {
    // const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");
    const loggedInRes = await axios.get(
      "https://home-decor-backend.herokuapp.com/auth/loggedIn"
    );
    setLoggedIn(loggedInRes.data);
  }

  async function getUserInfo() {
    const data = { username: username };
    const loggedInUserRes = await axios.post(
      "https://home-decor-backend.herokuapp.com/auth/getUserInfo",
      data
    );
    setUserInfo(loggedInUserRes.data);
  }

  function setLoginUser(user) {
    setAuthUsername(user);
  }

  useEffect(() => {
    getLoggedIn();
    getUserInfo();
  }, []);

  useEffect(() => {
    if (loggedIn && username !== "") {
      getUserInfo();
    }
  }, [loggedIn]);

  return (
    <AuthContext.Provider
      value={{ loggedIn, getLoggedIn, setLoginUser, userInfo, getUserInfo }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };

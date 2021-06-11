import axios from "axios";
import React, { useContext, useState, createContext } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Navbar from "../../components/Navbar";

export const UserContext = createContext();

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn, setLoginUser, setView } = useContext(AuthContext);

  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        username,
        password,
      };

      // await axios.post("http://localhost:5000/auth/login", loginData);
      await axios.post(
        "https://home-decor-backend.herokuapp.com/auth/login",
        loginData
      );

      setLoginUser(username);
      await getLoggedIn();
      history.push({
        pathname: "/",
        state: {
          response: loginData,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Log in to your account</h1>
      <form onSubmit={login}>
        <div className="login-div">
          <label>Username</label>
          <input
            className="login-inputs"
            type="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label>Password</label>
          <input
            className="login-inputs"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit">LOG IN</button>
          <h4>
            Don't have an account?{" "}
            <Link style={{ marginLeft: "5px" }} to="/register">
              {" "}
              Sign Up
            </Link>
          </h4>
        </div>
      </form>
    </div>
  );
}

export default Login;

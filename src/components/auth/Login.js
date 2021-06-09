import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Navbar from "../../components/Navbar";

export const UserContext = React.createContext();

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
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

      console.log(username);

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
    <div>
      <h1>Log in to your account</h1>
      <form onSubmit={login}>
        <input
          type="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Log in</button>
      </form>
      <h4>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </h4>
      <UserContext.Provider value={username}>
        {props.children}
      </UserContext.Provider>
    </div>
  );
}

export default Login;

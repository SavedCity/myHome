import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        username,
        password,
        passwordVerify,
      };

      // await axios.post("http://localhost:5000/auth/", registerData);
      await axios.post(
        "https://home-decor-backend.herokuapp.com/auth",
        registerData
      );
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Register a new account</h1>
      <form onSubmit={register}>
        <div className="login-div">
          <label>Username</label>
          <input
            className="login-inputs"
            type="Username"
            placeholder="username"
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
          <label>Verify password</label>
          <input
            className="login-inputs"
            type="password"
            placeholder="Verify password"
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
          />
          <button type="submit">Register</button>
          <h4>
            Have an account?{" "}
            <Link style={{ marginLeft: "5px" }} to="/login">
              Login
            </Link>
          </h4>
        </div>
      </form>
    </div>
  );
}

export default Register;

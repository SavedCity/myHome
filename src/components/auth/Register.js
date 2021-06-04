import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

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

      await axios.post("http://localhost:3000/user", registerData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Register a new account</h1>
      <form onSubmit={register}>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Username"
          value={username}
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
          value={password}
        />
        <input
          onChange={(e) => {
            setPasswordVerify(e.target.value);
          }}
          type="password"
          placeholder="Verify your password"
          value={passwordVerify}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

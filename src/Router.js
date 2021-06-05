import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AuthContext from "./context/AuthContext";
import Home from "./components/Home";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <h1>myHome</h1>
          <Home />
        </Route>
        <Route path="/myBoard">
          <h1>myBoard</h1>
        </Route>
        {loggedIn === false ? (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        ) : null}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

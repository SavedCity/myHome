import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/Navbar";
import AuthContext from "./context/AuthContext";
import Home from "../src/components/Home";
import Saves from "../src/components/Saves";
// import Living_Room from "../src/components/decor/Living_Room";
// import Kitchen from "../src/components/decor/Kitchen";
// import Dining_Room from "../src/components/decor/Dining_Room";
// import Bedroom from "../src/components/decor/Bedroom";
import Texas from "../src/components/location/Texas";
import Florida from "../src/components/location/Florida";
import South_Carolina from "../src/components/location/South_Carolina";
import North_Carolina from "../src/components/location/North_Carolina";
import Georgia from "../src/components/location/Georgia";
import Louisiana from "../src/components/location/Louisiana";
import Virginia from "../src/components/location/Virginia";
import New_Listing from "../src/components/NewListing";
import View from "../src/components/View";
import Edit from "../src/components/Edit";
import UserContext from "../src/components/auth/Login";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/view/:_id" component={View} />

        <Route path="/TX" component={Texas} />

        <Route path="/FL" component={Florida} />

        <Route path="/SC" component={South_Carolina} />

        <Route path="/NC" component={North_Carolina} />

        <Route path="/GA" component={Georgia} />

        <Route path="/LA" component={Louisiana} />

        <Route path="/VA" component={Virginia} />

        {loggedIn === false && (
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        )}
        {loggedIn === true && (
          <Switch>
            <Route path="/saves">
              <h1>My Saves</h1>
              <Saves />
            </Route>
            <Route path="/new-listing" component={New_Listing} />
          </Switch>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

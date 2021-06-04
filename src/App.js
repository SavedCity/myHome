import React from "react";
import Router from "./Router";
import axios from "axios";
import { AuthConextProvider } from "./context/AuthContext";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <AuthConextProvider>
        <Router />
      </AuthConextProvider>
    </div>
  );
}

export default App;

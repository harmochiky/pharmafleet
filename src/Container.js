import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

function Container() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default Container;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";

axios.defaults.baseURL = "http://localhost:5000";

function Container() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default Container;

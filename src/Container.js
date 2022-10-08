import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import AuthRoutes from "./auto_routes";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import SidePanel from "./components/Home/SidePanel";

axios.defaults.baseURL = "http://localhost:5000/pharmafleet/us-central1/api";

const mapStateToProps = (state) => {
  return {
    authenticated: state.core.authenticated,
  };
};

function Container({ authenticated }) {
  if (authenticated) {
    return (
      <Router>
        <div className="app-wrapper">
          <SidePanel />
          <AuthRoutes />
        </div>
      </Router>
    );
  }
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default connect(mapStateToProps, null)(Container);

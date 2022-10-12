import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import AuthRoutes from "./auto_routes";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import SidePanel from "./components/Home/SidePanel";
import JwtDecode from "jwt-decode";
import { getUserData } from "./store/actions/actions";
import Cookies from "universal-cookie";
import store from "./store/store";

const cookies = new Cookies();

axios.defaults.baseURL = "http://localhost:5000/pharmafleet/us-central1/api";
axios.defaults.headers.common["cookies"] = JSON.stringify(cookies.getAll());

const mapStateToProps = (state) => {
  return {
    authenticated: state.core.authenticated,
  };
};

// const mapDipatchToProps = (dispatch) => {
//   return {
//     getUserData: (token) => dispatch(getUserData(token)),
//   };
// };

const token = cookies.get("pf_at");

if (token && token !== "undefined") {
  store.dispatch(getUserData(token));
}

function Container({ authenticated }) {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default connect(mapStateToProps, null)(Container);

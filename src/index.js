import React from "react";
import ReactDOM from "react-dom/client";

import Container from "./Container";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import reportWebVitals from "./reportWebVitals";

import "./assets/css/vendor/ecicons.min.css";
import "./assets/css/plugins/slick.min.css";
import "./assets/css/plugins/animate.css";
import "./assets/css/plugins/bootstrap.css";

// import "./assets/scss/layout/footer.css";

import "./assets/css/home.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/p_f.css"
// import "./assets/scss/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Container />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();

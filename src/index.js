import React from "react";
import ReactDOM from "react-dom/client";

import Container from "./Container";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import reportWebVitals from "./reportWebVitals";

//styling
import "./assets/css/bootstrap.min.css";
import "./assets/css/main.css";

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

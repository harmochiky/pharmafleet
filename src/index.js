import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./Container";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

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

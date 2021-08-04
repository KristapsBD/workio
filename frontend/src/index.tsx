import React from "react";
import ReactDOM from "react-dom";

import "./styles/css/normalize.css";

import App from "./App";
import { GlobalStyle } from "./styles";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);

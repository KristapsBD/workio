import React from "react";
import ReactDOM from "react-dom";

import "./firebase";
import "./styles/css/normalize.css";

import App from "./App";
import { GlobalStyle } from "./styles";
import FirebaseAuthProvider from "./context/auth";

ReactDOM.render(
  <>
    <GlobalStyle />
    <FirebaseAuthProvider>
      <App />
    </FirebaseAuthProvider>
  </>,
  document.getElementById("root")
);

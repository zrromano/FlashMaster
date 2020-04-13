import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Firebase, { FirebaseContext } from "./components/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

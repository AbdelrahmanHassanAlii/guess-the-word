import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//game-name
export const gameName = `Guess The Word`;
document.title = gameName;

//game-options
export const numberOfTries = 6;
export const numberOfLettersPerTry = 6;

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";

import WeatherApp from "./WeatherApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
  rootElement
);

import React from "react";
import SearchCity from "./SearchCity";

import GitHubLink from "./GitHubLink.js";

import "./styles.css";

export default function WeatherApp() {
  return (
    <div className="container">
      <div className="WeatherApp">
        <h1 className="HeaderMainTitle">All Around The World</h1>

        <SearchCity defaultCity="New York" />
      </div>
      <GitHubLink />
    </div>
  );
}

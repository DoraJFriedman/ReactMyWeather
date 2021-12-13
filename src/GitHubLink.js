import React from "react";
import "./GitHubLink.css";

export default function GitHubLink() {
  return (
    <div>
      <span id="link-github">
        {" "}
        <a
          href="https://github.com/DoraJFriedman/ReactMyWeatherApp"
          rel="noreferrer"
          target="_blank"
        >
          Open-source code on Github.
        </a>{" "}
        Hosted by Netlify. By Dora J. Friedman.
      </span>
    </div>
  );
}

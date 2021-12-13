import React, { useState } from "react";
import "./CurrentInfo.css";
import ThreeHourForecast from "./ThreeHourForecast.js";
import SixDayForecast from "./SixDayForecast.js";

import WeatherIcon from "./WeatherIcon.js";

export default function CurrentInfo(props) {
  let [unit, setUnit] = useState("metric");

  function setToImperial(event) {
    event.preventDefault();
    //let fahrenheit = Math.round((props.temperature * 9) / 5 + 32);
    setUnit("imperial");
  }

  function setToMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  //onClick={()=>ref.current.searchTemperatureFahrenheit()}

  if (unit === "metric") {
    let wind = Math.round(props.wind * 3.6);

    return (
      <div id="current-info">
        <div className="row">
          <div className="col" id="city-current-info">
            <br />
            <br />
            <h2 className="city">{props.city}</h2>
            <br />
            <br />
            <div className="current-time-weather">
              <span className="current-day-and-time">{props.date}</span>
              <br />
              <br />
              <span id="description"> {props.description} </span> <br />
              <WeatherIcon iconCode={props.icon} />
            </div>
            <div id="current-temperture">
              <span id="tempe">{props.temperature}°</span>{" "}
              <span id="celsius-farenheit-smaller-size">
                <span id="celsius" className="active">
                  C |
                </span>{" "}
                <a href="/" id="fahrenheit" onClick={setToImperial}>
                  F
                </a>
              </span>
            </div>
          </div>

          <div className="col" id="more-detailed-info">
            <div className="container">
              <div className="row" id="more-detailed-info-center">
                <div className="col-12">
                  <span id="feel"> Feels like: {props.feel}% </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="high"> High of: {props.high}% </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="low"> Low of: {props.low}% </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="humidity"> Humidity: {props.humidity}% </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="wind"> Wind: {wind} km/h </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="cloud"> Cloudiness: {props.cloud}% </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="visibility">Visibility: {props.visibility} m</span>
                </div>
                <br />
                <div className="col-12">
                  <span id="pressure">
                    {" "}
                    Air Pressure: {props.pressure} hPa{" "}
                  </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="sunrise"> Sunrise: {props.sunrise} </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="sunset"> Sunset: {props.sunset} </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ThreeHourForecast
          city={props.city}
          unit={unit}
          lat={props.lat}
          lon={props.lon}
        />

        <SixDayForecast lat={props.lat} lon={props.lon} unit={unit} />
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.temperature * 9) / 5 + 32);
    let feel = Math.round((props.feel * 9) / 5 + 32);
    let hi = Math.round((props.high * 9) / 5 + 32);
    let lo = Math.round((props.low * 9) / 5 + 32);
    let mph = Math.round((props.wind * 3.6) / 1.609);
    let displaymph = `${mph} mph`;

    return (
      <div id="current-info">
        <div className="row">
          <div className="col" id="city-current-info">
            <br />
            <br />
            <h2 className="city">{props.city}</h2>
            <br />
            <br />
            <div className="current-time-weather">
              <span className="current-day-and-time">{props.date}</span>
              <br />
              <br />
              <span id="description"> {props.description} </span> <br />
              <WeatherIcon iconCode={props.icon} />
            </div>

            <div id="current-temperture">
              <span id="tempe">{fahrenheit}°</span>{" "}
              <span id="celsius-farenheit-smaller-size">
                <a href="/" id="celsius" onClick={setToMetric}>
                  C |
                </a>{" "}
                <span href="/" id="fahrenheit" className="active">
                  F
                </span>
              </span>
            </div>
          </div>

          <div className="col" id="more-detailed-info">
            <div className="container">
              <div className="row" id="more-detailed-info-center">
                <div className="col-12">
                  <span id="feel"> Feels like: {feel}% </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="high"> High of: {hi}% </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="low"> Low of: {lo}% </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="humidity"> Humidity: {props.humidity}% </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="wind"> Wind: {displaymph} </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="cloud"> Cloudiness: {props.cloud}% </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="visibility">Visibility: {props.visibility} m</span>
                </div>
                <br />
                <div className="col-12">
                  <span id="pressure">
                    {" "}
                    Air Pressure: {props.pressure} hPa{" "}
                  </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="sunrise"> Sunrise: {props.sunrise} </span>
                </div>
                <br />
                <div className="col-12">
                  <span id="sunset"> Sunset: {props.sunset} </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ThreeHourForecast
          city={props.city}
          unit={unit}
          lat={props.lat}
          lon={props.lon}
        />

        <SixDayForecast lat={props.lat} lon={props.lon} unit={unit} />
      </div>
    );
  }
}

import React, { useState } from "react";
import axios from "axios";
import "./SixDayForecast.css";
import WeatherIcon from "./WeatherIcon.js";

export default function SixDayForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let apiKey = "";

  function convertDtToDays(dt) {
    let date = new Date(dt * 1000);
    let daysFunc = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = daysFunc[date.getUTCDay()];
    return day;
  }

  function convertToFahrenheit(temp) {
    let fahrenheit = Math.round((temp * 9) / 5 + 32);
    return fahrenheit;
  }

  function searchForecast(event) {
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
    axios.get(apiUrlForecast).then(readForecast);
    /*console.log(apiUrlForecast);*/
  }

  function readForecast(response) {
    console.log(response.data.lat);
    console.log(response.data.lon);
    setForecast(response.data);
    setLoaded(true);
  }

  if (
    loaded &&
    props.lat === forecast.lat &&
    props.lon === forecast.lon &&
    props.unit === "metric"
  ) {
    return (
      <div className="six-day-forecast">
        <h2 className="forecast-title">Weekly Forecast</h2>

        <div className="row" id="six-day-forecast">
          {forecast.daily.slice(0, 6).map(function (forecastItem) {
            return (
              <div className="col-12" id="col-temp">
                <span className="time">
                  {" "}
                  {convertDtToDays(
                    forecastItem.dt + forecast.timezone_offset
                  )}{" "}
                </span>
                <br />
                <div className="icon">
                  <WeatherIcon iconCode={forecastItem.weather[0].icon} />
                </div>
                <div className="degree">
                  <span className="smaller-numbers" id="numbers-maximum">
                    {" "}
                    {Math.round(forecastItem.temp.max)}°
                  </span>
                  |
                  <span className="smaller-numbers" id="numbers-minimum">
                    {" "}
                    {Math.round(forecastItem.temp.min)}°{" "}
                  </span>
                </div>

                <div className="week-weather">
                  <div className="humid">
                    <span className="humidity">
                      {" "}
                      Humidity: {Math.round(forecastItem.humidity)}%{" "}
                    </span>
                  </div>
                  <br />

                  <div className="pop">
                    <span className="pop">
                      {" "}
                      Precipitation: {Math.round(forecastItem.pop * 100)}%{" "}
                    </span>
                  </div>
                  <br />
                  <div className="winds">
                    <span className="winds">
                      {" "}
                      Wind: {Math.round(forecastItem.wind_speed * 3.6)} km/h
                    </span>
                  </div>
                  <br />
                  <div className="dew">
                    <span className="dew">
                      {" "}
                      Dew point: {Math.round(forecastItem.dew_point)}°
                    </span>
                  </div>
                  <br />
                  <div className="uv">
                    <span className="uvi">
                      {" "}
                      UV Index: {Math.round(forecastItem.uvi)} of 10{" "}
                    </span>
                  </div>
                  <br />
                  <div className="moon">
                    <span className="moon">
                      {" "}
                      Moon phase: {forecastItem.moon_phase}
                    </span>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (
    loaded &&
    props.lat === forecast.lat &&
    props.lon === forecast.lon &&
    props.unit === "imperial"
  ) {
    return (
      <div className="six-day-forecast">
        <h2 className="forecast-title">Weekly Forecast</h2>

        <div className="row" id="six-day-forecast">
          {forecast.daily.slice(0, 6).map(function (forecastItem) {
            return (
              <div className="col-12" id="col-temp">
                <span className="time">
                  {" "}
                  {convertDtToDays(
                    forecastItem.dt + forecast.timezone_offset
                  )}{" "}
                </span>
                <br />
                <div className="icon">
                  <WeatherIcon iconCode={forecastItem.weather[0].icon} />

                  <div className="degree">
                    <span className="smaller-numbers" id="numbers-maximum">
                      {" "}
                      {convertToFahrenheit(Math.round(forecastItem.temp.max))}°
                    </span>
                    |
                    <span className="smaller-numbers" id="numbers-minimum">
                      {" "}
                      {convertToFahrenheit(
                        Math.round(forecastItem.temp.min)
                      )}°{" "}
                    </span>
                  </div>
                </div>
                <div className="week-weather">
                  <div className="humdity">
                    <span className="humidity">
                      {" "}
                      Humidity: {Math.round(forecastItem.humidity)}%{" "}
                    </span>
                  </div>
                  <br />
                  <div className="pop">
                    <span className="pop">
                      {" "}
                      Precipitation: {Math.round(forecastItem.pop * 100)}%{" "}
                    </span>
                  </div>
                  <br />
                  <div className="winds">
                    <span className="winds">
                      {" "}
                      Wind:{" "}
                      {Math.round((forecastItem.wind_speed * 3.6) / 1.609)} mph
                    </span>
                  </div>
                  <br />
                  <div className="dew">
                    <span className="dew">
                      {" "}
                      Dew point:{" "}
                      {Math.round((forecastItem.dew_point * 9) / 5 + 32)}°
                    </span>
                  </div>
                  <br />
                  <div className="uv">
                    <span className="uvi">
                      {" "}
                      UV Index: {Math.round(forecastItem.uvi)} of 10{" "}
                    </span>
                  </div>
                  <br />
                  <div className="moon">
                    <span className="moon">
                      {" "}
                      Moon phase: {forecastItem.moon_phase}
                    </span>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    searchForecast();
    return "";
  }
}

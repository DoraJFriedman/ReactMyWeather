import React, { useState } from "react";
import axios from "axios";
import "./ThreeHourForecast.css";
import WeatherIcon from "./WeatherIcon.js";

export default function ThreeHoursForecastOneDay(props) {
  let [infoThreeHours, setInfoThreeHours] = useState(null);
  let [loaded, setLoaded] = useState(false);

  let apiKey = "";

  function convertDtToHours(dt) {
    let day = new Date(dt * 1000);
    let dayHour = day.getUTCHours();
    let dayMinutes = day.getUTCMinutes();
    if (dayHour < 10) {
      dayHour = `0${dayHour}`;
    } else {
      dayHour = `${dayHour}`;
    }

    if (dayMinutes < 10) {
      dayMinutes = `0${dayMinutes}`;
    } else {
      dayMinutes = `${dayMinutes}`;
    }

    let timeMinutesHour = `${dayHour}:${dayMinutes}`;

    return timeMinutesHour;
  }

  function convertToFahrenheit(temp) {
    let fahrenheit = Math.round((temp * 9) / 5 + 32);
    return fahrenheit;
  }

  function searchTemperature(event) {
    let apiUrlThreeHoursTemp = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlThreeHoursTemp).then(displayTempEveryThreeHours);
    console.log(apiUrlThreeHoursTemp);
  }
  function displayTempEveryThreeHours(response) {
    console.log(response.data);
    setInfoThreeHours(response.data);
    setLoaded(true);
  }

  if (
    loaded &&
    props.lat === infoThreeHours.city.coord.lat &&
    props.lon === infoThreeHours.city.coord.lon &&
    props.unit === "metric"
  ) {
    return (
      <div className="detailed-information">
        <h2 className="weather-throughout-the-day"> Hourly Temperature </h2>

        <div className="row" id="detailed-information">
          {infoThreeHours.list.slice(0, 6).map(function (infoThreeHoursitem) {
            return (
              <div className="col-12" id="col-temp">
                <span className="time">
                  {" "}
                  {convertDtToHours(
                    infoThreeHoursitem.dt + infoThreeHours.city.timezone
                  )}{" "}
                </span>
                <br />
                <div className="icon">
                  <WeatherIcon iconCode={infoThreeHoursitem.weather[0].icon} />
                </div>
                <div className="degree">
                  <span className="smaller-numbers" id="numbers-maximum">
                    {" "}
                    {Math.round(infoThreeHoursitem.main.temp_max)}°
                  </span>
                  |
                  <span className="smaller-numbers" id="numbers-minimum">
                    {" "}
                    {Math.round(infoThreeHoursitem.main.temp_min)}°{" "}
                  </span>
                </div>

                <div className="week-weather">
                  <div className="humid">
                    <span className="humidity">
                      {" "}
                      Humidity: {Math.round(
                        infoThreeHoursitem.main.humidity
                      )}%{" "}
                    </span>
                  </div>
                  <br />
                  <div className="pop">
                    <span className="pop">
                      {" "}
                      Precipitation: {Math.round(
                        infoThreeHoursitem.pop * 100
                      )}%{" "}
                    </span>
                  </div>
                  <br />
                  <div className="winds">
                    <span className="winds">
                      {" "}
                      Wind: {Math.round(
                        infoThreeHoursitem.wind.speed * 3.6
                      )}{" "}
                      km/h
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
    props.lat === infoThreeHours.city.coord.lat &&
    props.lon === infoThreeHours.city.coord.lon &&
    props.unit === "imperial"
  ) {
    return (
      <div className="detailed-information">
        <h2 className="weather-throughout-the-day"> Hourly Temperature </h2>

        <div className="row" id="detailed-information">
          {infoThreeHours.list.slice(0, 6).map(function (infoThreeHoursitem) {
            return (
              <div className="col-12" id="col-temp">
                <span className="time">
                  {" "}
                  {convertDtToHours(
                    infoThreeHoursitem.dt + infoThreeHours.city.timezone
                  )}{" "}
                </span>
                <br />
                <div className="icon">
                  <WeatherIcon iconCode={infoThreeHoursitem.weather[0].icon} />
                </div>
                <div className="degree">
                  <span className="smaller-numbers" id="numbers-maximum">
                    {" "}
                    {convertToFahrenheit(
                      Math.round(infoThreeHoursitem.main.temp_max)
                    )}
                    °
                  </span>
                  |
                  <span className="smaller-numbers" id="numbers-minimum">
                    {" "}
                    {convertToFahrenheit(
                      Math.round(infoThreeHoursitem.main.temp_min)
                    )}
                    °{" "}
                  </span>
                </div>

                <div className="week-weather">
                  <div className="humid">
                    <span className="humidity">
                      {" "}
                      Humidity: {Math.round(
                        infoThreeHoursitem.main.humidity
                      )}%{" "}
                    </span>
                  </div>
                  <br />
                  <div className="pop">
                    <span className="pop">
                      {" "}
                      Precipitation: {Math.round(
                        infoThreeHoursitem.pop * 100
                      )}%{" "}
                    </span>
                  </div>
                  <br />
                  <div className="winds">
                    <span className="winds">
                      {" "}
                      Wind:{" "}
                      {Math.round(
                        (infoThreeHoursitem.wind.speed * 3.6) / 1.609
                      )}{" "}
                      mph
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
    searchTemperature();
    return "";
  }
}

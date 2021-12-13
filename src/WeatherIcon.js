import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  let weatherIcon = {
    "01d": `CLEAR_DAY`,
    "02d": `PARTLY_CLOUDY_DAY`,
    "03d": `CLOUDY`,
    "04d": `CLOUDY`,
    "09d": `RAIN`,
    "10d": `RAIN`,
    "11d": `RAIN`,
    "13d": `SNOW`,
    "50d": `FOG`,
    "01n": `CLEAR_NIGHT`,
    "02n": `PARTLY_CLOUDY_NIGHT`,
    "03n": `CLOUDY`,
    "04n": `CLOUDY`,
    "09n": `RAIN`,
    "10n": `RAIN`,
    "11n": `RAIN`,
    "13n": `SNOW`,
    "50n": `FOG`
  };

  return (
    <div>
      <ReactAnimatedWeather
        icon={weatherIcon[props.iconCode]}
        color={"#650EA3"}
        size={45}
        animate={true}
      />
    </div>
  );
}

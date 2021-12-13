import React from "react";
import "./SpecialCities.css";

export default function SpecialCities(props) {
  function Kolkata(event) {
    event.preventDefault();
    props.searchCity("Kolkata");
  }

  function Beijing(event) {
    event.preventDefault();
    props.searchCity("Beijing");
  }

  function London(event) {
    event.preventDefault();
    props.searchCity("London");
  }

  function Paris(event) {
    event.preventDefault();
    props.searchCity("Paris");
  }

  function Barcelona(event) {
    event.preventDefault();
    props.searchCity("Barcelona");
  }

  function Nairobi(event) {
    event.preventDefault();
    props.searchCity("Nairobi");
  }

  return (
    <div className="container">
      <div className="row extra-space">
        <div className="col-xl-2 col-lg-2 col-md-4 col-4">
          <button
            type="button"
            className="city-per-continent-buttons"
            id="Kolkata"
            value="Kolkata"
            onClick={Kolkata}
          >
            {" "}
            Kolkata{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-2 col-md-4 col-4">
          <button
            type="button"
            className="city-per-continent-buttons"
            id="Beijing"
            value="Beijing"
            onClick={Beijing}
          >
            {" "}
            Beijing{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-2 col-md-4 col-4">
          <button
            className="city-per-continent-buttons"
            id="London"
            onClick={London}
          >
            {" "}
            London{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-2 col-md-4 col-4">
          <button
            className="city-per-continent-buttons"
            id="Paris"
            onClick={Paris}
          >
            {" "}
            Paris{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-2 col-md-4 col-4">
          <button
            className="city-per-continent-buttons"
            id="Barcelona"
            onClick={Barcelona}
          >
            {" "}
            Barcelona{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-2 col-md-4 col-4">
          <button
            className="city-per-continent-buttons"
            id="Nairobi"
            onClick={Nairobi}
          >
            {" "}
            Nairobi{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

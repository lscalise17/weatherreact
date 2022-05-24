import React from "react";
import WeatherTemp from "./WeatherTemp.js";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1 id="city">{props.data.city}</h1>
      <ul>
        <li id="update">
          <FormattedDate date={props.data.date} />
        </li>
        <hr />
      </ul>
      <div id="weather-condition" className="text-capitalize">
        {props.data.description}
      </div>
      <div className="row">
        <div className="col-8">
          <div className="clearfix temp">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div class="float-left">
              <strong id="temp">
                <WeatherTemp celsius={props.data.temperature} />
              </strong>
            </div>
          </div>
        </div>
        <div class="col-3">
          <ul>
            <li>Wind: {Math.round(props.data.wind)} km/hr</li>
            <li>Humidity: {props.data.humidity} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

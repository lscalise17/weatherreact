import React, { useState, useEffect } from "react";
import WeatherForecastDays from "./WeatherForecastDays";
import axios from "axios";
import "./App.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "247901f5cf32f02ac75b3bd33daf80d0";
    let longitude = props.coordinate.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="WeatherForecasr">
        <div className="row">
          <div className="col">
            <WeatherForecastDays data={forecast[0]} />
          </div>
          <div className="col">
            <WeatherForecastDays data={forecast[1]} />
          </div>
          <div className="col">
            <WeatherForecastDays data={forecast[2]} />
          </div>
          <div className="col">
            <WeatherForecastDays data={forecast[3]} />
          </div>
          <div className="col">
            <WeatherForecastDays data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
  }
}

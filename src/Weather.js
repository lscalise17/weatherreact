import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "WeatherInfo.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
  }
  setWeatherData({
    ready: true,
    date: new Date(response.data.dt * 1000),
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    city: response.data.name,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
  });
}

function search() {
  const apiKey = "24b1214eb68b8300c01d9bbaea27619f";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  axios.get(apiurl).then(handleResponse);
}
function handleSubmit(event) {
  event.prevenetDefault();
  search();
}
function handleCityChange(event) {
  setCity(event.target.value);
}
if (weatherData.ready) {
  return (
    <div className="Description">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search a City..."
              id="search-text-input"
              sixe="25"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              class="btn btn-primary"
              id="search-btn"
            />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
    </div>
  );
} else {
  search();
  return "loading";
}

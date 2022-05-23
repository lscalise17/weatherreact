import React, from "react"
import WeatherTemp from "./WeatherTemp.js"
import FormattedDate from "./FormattedDate.js"

export default function WeatherInfo(props){
    return(
        <div className="weatherInfo">
            <h1 id="city">{props.data.city}</h1>
            <ul>
                <li id="update"> 
                <FormattedDate date={props.data.date} />

                </li>
                <hr/>
            </ul>
            <div id="weather-condition" className="text-capitalize">
                {props.data.description}

            </div>
            
        </div>
        

    )
}

import "./weatherForecastForAWeek.scss";
import React from "react";

export default function WeatherForecastForAWeek({cityName, weatherData}) {
    return (
        <div className="weatherForecastForAWeek">
            <h1>
                Forecast for a week
            </h1>
            <div className="footer">
                <span>
                    The weather data displayed on this website is provided by
                    <a href="https://openweathermap.org"> OpenWeather (TM)</a> under the
                    <a href="https://creativecommons.org/licenses/by-sa/4.0/"> Creative Commons Attribution-ShareAlike 4.0 International licence (CC BY-SA 4.0)</a>.
                    Data and database are open and licensed by <a href="https://opendatacommons.org/licenses/odbl/"> Open Data Commons Open Database License (ODbL)</a>.
                </span>
            </div>
        </div>
    );
}
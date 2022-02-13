import "./weatherForecastForAWeek.scss";
import React from "react";
import {getProbabilityOfPrecipitationIcon, getRainIcon, getWeatherIcon, getWindDirectionIcon} from "../../IconsUtils";

export default function WeatherForecastForAWeek({cityName, weatherData}) {
    return (
        <div className="weatherForecastForAWeek">
            <div className="contentContainer">
                {[...Array(7)].map((x, dayID) =>
                    <div className="dayContainer">
                        <div className="dateContainer">
                            <h1>
                                {weatherData[dayID]["dateLocal"]["day"] < 10 ? 0 : ""}{weatherData[dayID]["dateLocal"]["day"]}
                            </h1>
                            <h1>
                                {weatherData[dayID]["dateLocal"]["month"] < 10 ? 0 : ""}{weatherData[dayID]["dateLocal"]["month"]}
                            </h1>
                        </div>
                        {getWeatherIcon(weatherData[dayID]["weatherIcon"], "weatherIcon" + dayID)}
                        {getProbabilityOfPrecipitationIcon(weatherData[dayID]["probabilityOfPrecipitation"], "probabilityOfPrecipitationIcon" + dayID)}
                        {getRainIcon(weatherData[dayID]["rain"], "rainIcon" + dayID)}
                        {getWindDirectionIcon(weatherData[dayID]["wind_deg"], "windIcon" + dayID)}

                    </div>
                )}
                <div className="footer">
                    <span>
                        The weather data displayed on this website is provided by
                        <a href="https://openweathermap.org"> OpenWeather (TM)</a> under the
                        <a href="https://creativecommons.org/licenses/by-sa/4.0/"> Creative Commons Attribution-ShareAlike 4.0 International licence (CC BY-SA 4.0)</a>.
                        Data and database are open and licensed by <a href="https://opendatacommons.org/licenses/odbl/"> Open Data Commons Open Database License (ODbL)</a>.
                    </span>
                </div>
            </div>
        </div>
    );
}
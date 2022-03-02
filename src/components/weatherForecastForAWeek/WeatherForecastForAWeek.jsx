import "./weatherForecastForAWeek.scss";
import React from "react";
import {getProbabilityOfPrecipitationIcon, getRainIcon, getWeatherIcon, getWindDirectionIcon} from "../../IconsUtils";

function weekdayNumberToString(weekdayNumber) {
    switch (weekdayNumber) {
        case 0:
            return "Sun";
        case 1:
            return "Mon";
        case 2:
            return "Tue";
        case 3:
            return "Wed";
        case 4:
            return "Thu";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
        default:
            return "?";
    }
}

export default function WeatherForecastForAWeek({weatherData}) {
    return (
        <div className="weatherForecastForAWeek">
            <div className="contentContainer">
                {[...Array(7)].map((x, dayID) =>
                    <div className="dayContainer" key={dayID}>
                        <div className="dateContainer">
                            <div className="dateDay">
                                <h3>
                                    {weatherData[dayID]["dateLocal"]["day"] < 10 ? 0 : ""}{weatherData[dayID]["dateLocal"]["day"]}.
                                </h3>
                            </div>
                            <div className="weekday">
                                <h3>
                                    {weekdayNumberToString(weatherData[dayID]["dateLocal"]["weekday"])}
                                </h3>
                            </div>
                        </div>
                        <div className="mainWeatherContainer">
                            <div className="mainWeatherIconContainer">
                                {getWeatherIcon(weatherData[dayID]["weatherIcon"], "weatherIcon" + dayID)}
                            </div>
                            <div className="temperatureContainer">
                                <div className="temperatureDataContainer">
                                    <div className="maxTemperature">
                                        {weatherData[dayID]["maxTemperature"]}
                                    </div>
                                    <div className="minTemperature">
                                        {weatherData[dayID]["minTemperature"]}
                                    </div>
                                    <div className="unit">
                                        °C
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="weatherDetailsContainer">
                            <div className="detailsContainer">
                                {getWindDirectionIcon(weatherData[dayID]["windDirection"], "windIcon" + dayID)}
                                <div className="data">
                                    {weatherData[dayID]["windSpeed"]}
                                </div>
                                <div className="unit">
                                    km/h
                                </div>
                            </div>
                            <div className="detailsContainer">
                                {getProbabilityOfPrecipitationIcon(weatherData[dayID]["probabilityOfPrecipitation"], "probabilityOfPrecipitationIcon" + dayID)}
                                <div className="data">
                                    {weatherData[dayID]["probabilityOfPrecipitation"]}
                                </div>
                                <div className="unit">
                                    %
                                </div>
                            </div>
                            <div className="detailsContainer">
                                {getRainIcon(weatherData[dayID]["amountOfPrecipitation"], "rainIcon" + dayID)}
                                <div className="data">
                                    {weatherData[dayID]["amountOfPrecipitation"]}
                                </div>
                                <div className="unit">
                                    mm
                                </div>
                            </div>
                        </div>
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
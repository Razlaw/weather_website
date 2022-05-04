import "./weatherForecastForAWeek.scss";

import React from "react";

import {getProbabilityOfPrecipitationIcon, getRainIcon, getWeatherIcon, getWindDirectionIcon} from "../../utils/iconsUtils";

function weekdayNumberToString(weekdayNumber) {
    switch (weekdayNumber) {
        case 0:
            return "So";
        case 1:
            return "Mo";
        case 2:
            return "Di";
        case 3:
            return "Mi";
        case 4:
            return "Do";
        case 5:
            return "Fr";
        case 6:
            return "Sa";
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
                        Wetterdaten bereitgestellt durch
                        <a href="https://openweathermap.org"> OpenWeather&trade;</a>
                    </span>
                </div>
            </div>
        </div>
    );
}
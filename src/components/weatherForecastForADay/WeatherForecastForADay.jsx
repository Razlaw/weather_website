import "./weatherForecastForADay.scss";
import HourOfDayListItem from "../hourOfDayListItem/HourOfDayListItem";
import React from "react";
import PlotForADay from "../plotForADay/PlotForADay";
import {getProbabilityOfPrecipitationIcon, getRainIcon, getWeatherIcon, getWindDirectionIcon} from "../../IconsUtils";

export default function WeatherForecastForADay({dayId, weatherData, currentHour, hourOfSunrise, hourOfSunset, slideID, firstVisit}) {
    const dayToDisplay = dayId === 0 ? "Heute" : "Morgen";
    const date = (weatherData[0]["dateLocal"]["day"] < 10 ? "0" : "") + weatherData[0]["dateLocal"]["day"].toString() +
        "." + (weatherData[0]["dateLocal"]["month"] < 10 ? "0" : "") + weatherData[0]["dateLocal"]["month"].toString();

    return (
        <div className="weatherForecastForADay">
            <div className="contentContainer">
                <div className="dayDisplay">
                    <h1>
                        {dayToDisplay}, {date}
                    </h1>
                </div>
                <div className="forecast">
                    <div className="hoursOfDay">
                        <ul>
                            {[...Array(24)].map((x, hourOfDay) =>
                                <HourOfDayListItem
                                    key={hourOfDay}
                                    time={hourOfDay}
                                    active={currentHour === hourOfDay}
                                    sunrise={hourOfSunrise}
                                    sunset={hourOfSunset}
                                    firstVisit={firstVisit}
                                />
                            )}
                        </ul>
                        <div className="emptySpace"/>
                    </div>
                    <div className="forecastPlot">
                        <div className="plotsContainer">
                            <div
                                className={"temperatureAndWindPlotContainer " + (firstVisit && "firstVisit")}
                                style={{transform: `translateX(-${slideID * 100}%)`}}
                            >
                                <PlotForADay
                                    dayID={dayId}
                                    plotID={"temperature"}
                                    currentHour={currentHour}
                                    weatherData={weatherData}
                                    dataKey={"temperature"}
                                    plotKey={"temperature"}
                                    unit={"°C"}
                                    sunrise={hourOfSunrise}
                                    sunset={hourOfSunset}
                                    getIconFunction={getWeatherIcon}
                                    iconKey={"weatherIcon"}
                                    requestedMinimumValue={0}
                                    requestedMinimalValueRange={20}
                                />
                                <PlotForADay
                                    dayID={dayId}
                                    plotID={"wind"}
                                    currentHour={currentHour}
                                    weatherData={weatherData}
                                    dataKey={"windSpeed"}
                                    plotKey={"windSpeed"}
                                    unit={"km/h"}
                                    sunrise={hourOfSunrise}
                                    sunset={hourOfSunset}
                                    getIconFunction={getWindDirectionIcon}
                                    iconKey={"windDirection"}
                                    requestedMinimumValue={0}
                                    requestedMinimalValueRange={25}
                                />
                            </div>
                            <div
                                className={"rainPlotContainer " + (firstVisit && "firstVisit")}
                                style={{transform: `translateX(${(1 - slideID) * 100}%)`}}
                            >
                                <PlotForADay
                                    dayID={dayId}
                                    plotID={"probabilityOfPrecipitation"}
                                    currentHour={currentHour}
                                    weatherData={weatherData}
                                    dataKey={"probabilityOfPrecipitation"}
                                    plotKey={"probabilityOfPrecipitation"}
                                    unit={"%"}
                                    sunrise={hourOfSunrise}
                                    sunset={hourOfSunset}
                                    getIconFunction={getProbabilityOfPrecipitationIcon}
                                    iconKey={"probabilityOfPrecipitation"}
                                    requestedMinimumValue={0}
                                    requestedMinimalValueRange={100}
                                />
                                <PlotForADay
                                    dayID={dayId}
                                    plotID={"rain"}
                                    currentHour={currentHour}
                                    weatherData={weatherData}
                                    dataKey={"amountOfPrecipitation"}
                                    plotKey={"amountOfPrecipitation"}
                                    unit={"mm"}
                                    sunrise={hourOfSunrise}
                                    sunset={hourOfSunset}
                                    getIconFunction={getRainIcon}
                                    iconKey={"amountOfPrecipitation"}
                                    requestedMinimumValue={0}
                                    requestedMinimalValueRange={1.5}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slideIndicator">
                    <span className={slideID === 0 ? "slideIndicatorItem active" : "slideIndicatorItem passive"}/>
                    <span className="spaceBetween"/>
                    <span className={slideID === 1 ? "slideIndicatorItem active" : "slideIndicatorItem passive"}/>
                </div>
            </div>
        </div>
    );
}

import "./weatherForecastForADay.scss";
import HourOfDayListItem from "../hourOfDayListItem/HourOfDayListItem";
import React from "react";
import PlotForADay from "../plotForADay/PlotForADay";

export default function WeatherForecastForADay({dayId, weatherData, currentHour, hourOfSunrise, hourOfSunset, slideID}) {
    const dayToDisplay = dayId === 0 ? "Today" : "Tomorrow";

    return (
        <div className="weatherForecastForADay">
            <div className="contentContainer">
                <div className="dayDisplay">
                    <h1>
                        {dayToDisplay}
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
                                />
                            )}
                        </ul>
                    </div>
                    <div className="forecastPlot">
                        <div className="plotsContainer">
                            <div className="temperatureAndWindPlotContainer" style={{transform: `rotateY(${slideID * 0.25}turn)`}} >
                                <PlotForADay
                                    dayID={dayId}
                                    plotID={"temperature"}
                                    currentHour={currentHour}
                                    weatherData={weatherData}
                                    dataKey={"temperature"}
                                    plotKey={"temperatureForPlot"}
                                    unit={"°C"}
                                    sunrise={hourOfSunrise}
                                    sunset={hourOfSunset}
                                />
                                <PlotForADay
                                    dayID={dayId}
                                    plotID={"wind"}
                                    currentHour={currentHour}
                                    weatherData={weatherData}
                                    dataKey={"wind_speed"}
                                    plotKey={"wind_speed"}
                                    unit={"km/h"}
                                    sunrise={hourOfSunrise}
                                    sunset={hourOfSunset}
                                />
                            </div>
                            <div className="rainPlotContainer" style={{transform: `rotateY(${(slideID - 1) * 0.25}turn)`}}>
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
                                />
                                <PlotForADay
                                    dayID={dayId}
                                    plotID={"rain"}
                                    currentHour={currentHour}
                                    weatherData={weatherData}
                                    dataKey={"rain_1h"}
                                    plotKey={"rain_1h"}
                                    unit={"mm"}
                                    sunrise={hourOfSunrise}
                                    sunset={hourOfSunset}
                                    decimalPrecision={1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

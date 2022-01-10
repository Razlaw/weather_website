import "./weatherForecastForADay.scss";
import HourOfDayListItem from "../hourOfDayListItem/HourOfDayListItem";
import React from "react";
import PlotForADay from "../plotForADay/PlotForADay";

export default function WeatherForecastForADay({dayToDisplay, weatherData}) {
    const today = new Date();
    const currentHour = today.getHours();

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
                                />
                            )}
                        </ul>
                    </div>
                    <div className="forecastPlot">
                        <PlotForADay currentHour={currentHour} weatherData={weatherData}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

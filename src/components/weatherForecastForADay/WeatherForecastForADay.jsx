import "./weatherForecastForADay.scss";
import HourOfDayListItem from "../hourOfDayListItem/HourOfDayListItem";
import React from "react";

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
                        <h1>
                            Plot
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

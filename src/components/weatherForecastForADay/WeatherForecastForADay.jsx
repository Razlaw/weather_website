import "./weatherForecastForADay.scss";
import HourOfDayListItem from "../hourOfDayListItem/HourOfDayListItem";
import React from "react";

export default function WeatherForecastForADay({cityName, weatherData}) {
    const today = new Date();
    const currentHour = today.getHours();

    return (
        <div className="weatherForecastForADay">
            <div className="hoursOfDay">
                <h1>
                    Today
                </h1>
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
                    {cityName}
                </h1>
            </div>
        </div>
    );
}

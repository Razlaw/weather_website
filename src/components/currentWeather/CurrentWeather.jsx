import "./currentWeather.scss";
import TimeOfDayListItem from "../timeOfDayListItem/TimeOfDayListItem";
import React from "react";

export default function CurrentWeather({cityName, weatherData}) {
    const today = new Date();
    const currentHour = today.getHours();

    return (
        <div className="forecastWrapper">
            <div className="left">
                <h1>
                    Today
                </h1>
                <ul>
                    {[...Array(24)].map((x, hourOfDay) =>
                        <TimeOfDayListItem
                            key={hourOfDay}
                            time={hourOfDay}
                            active={currentHour === hourOfDay}
                        />
                    )}
                </ul>
            </div>
            <div className="right">
                <h1>
                    {cityName}
                </h1>
            </div>
        </div>
    );
}

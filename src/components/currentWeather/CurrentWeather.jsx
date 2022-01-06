import "./currentWeather.scss";
import TimeOfDayListItem from "../timeOfDayListItem/TimeOfDayListItem";
import React, {useState} from "react";

    const today = new Date();
    const currentHour = today.getHours();

export default function CurrentWeather({weatherData}) {
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
        </div>
    );
}

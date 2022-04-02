import "./plotForADay.scss";
import React from 'react';
import OutlinePlot from "../outlinePlot/OutlinePlot";
import DataListItem from "../dataListItem/DataListItem";

export default function PlotForADay({
                                        dayID,
                                        plotID,
                                        currentHour,
                                        weatherData,
                                        dataKey,
                                        plotKey,
                                        unit,
                                        sunrise,
                                        sunset,
                                        getIconFunction,
                                        iconKey,
                                        requestedMinimumValue = undefined,
                                        requestedMinimalValueRange = undefined
                                    }) {
    return (
        <div className="plotAndDataContainer">
            <div className="iconContainer">
                <ul>
                    {[...Array(24)].map((x, hourOfDay) =>
                        getIconFunction(weatherData[hourOfDay][iconKey], hourOfDay)
                    )}
                </ul>
                <div className="emptySpace"/>
            </div>
            <div className="dataContainer">
                <ul>
                    {[...Array(24)].map((x, hourOfDay) =>
                        <DataListItem
                            key={hourOfDay}
                            data={weatherData[hourOfDay][dataKey]}
                            time={hourOfDay}
                            active={currentHour === hourOfDay}
                            sunrise={sunrise}
                            sunset={sunset}
                        />
                    )}
                </ul>
                <div className="unitContainer">
                    {unit}
                </div>
            </div>
            <div className="plotContainer">
                <OutlinePlot
                    dayID={dayID}
                    plotID={plotID}
                    currentHour={currentHour}
                    weatherData={weatherData}
                    dataKey={plotKey}
                    requestedMinimumValue={requestedMinimumValue}
                    requestedMinimalValueRange={requestedMinimalValueRange}
                />
                <div className="emptySpace"/>
            </div>
        </div>
    );
}

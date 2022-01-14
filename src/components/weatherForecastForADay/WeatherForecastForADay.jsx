import "./weatherForecastForADay.scss";
import HourOfDayListItem from "../hourOfDayListItem/HourOfDayListItem";
import React, {useEffect, useState} from "react";
import PlotForADay from "../plotForADay/PlotForADay";

export default function WeatherForecastForADay({dayToDisplay, weatherData}) {
    const today = new Date();
    const currentHour = today.getHours();

    const [currentSlide, setCurrentSlide] = useState(0);
    const [temperatures, setTemperatures] = useState( [{"temp": 0, "tempForPlot": 1}]);

    const handleClick = (direction)=>{
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3 - 1) :
            setCurrentSlide(currentSlide < 3 - 1 ? currentSlide + 1 : 0);
    };

    // Workaround: recharts draws bars with positive and negative values into different directions.
    //  I didn't find a way to change the behaviour to draw all bars into one direction - setting the bottom
    //  value of the bars as its called in matplotlib. This workaround shifts all values into a range starting
    //  from the value 1 if at least one element is negative. The shifted values as used for plotting while the
    //  original values are used for the labels of the bars.
    useEffect(() => {
        let roundedTemperatureArray = new Array(0);
        for(let i = 0; i < weatherData.length; i++) {
            let roundedTemperature = Math.round(weatherData[i]["temp"]);
            roundedTemperatureArray.push(roundedTemperature);
        }

        let lowestTemperature = Math.min(...roundedTemperatureArray);
        let temperatureArrayForPlot = roundedTemperatureArray.map( function(value) {
            return value - (lowestTemperature - 1);
        } );

        let temperatureArray = new Array(0);
        for(let i = 0; i < weatherData.length; i++) {
            temperatureArray[i] = {"temp": roundedTemperatureArray[i], "tempForPlot": temperatureArrayForPlot[i]};
        }
        setTemperatures(temperatureArray);
    }, [weatherData]);

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
                        <h1 className="left" onClick={() => handleClick("left")}>L</h1>
                        <div className="plotContainer">
                            <div className="tempPlot" style={{transform: `rotateY(${currentSlide * 0.25}turn)`}} >
                                <PlotForADay currentHour={currentHour} weatherData={temperatures} unit={"°C"}/>
                            </div>
                            <div className="windPlot" style={{transform: `rotateY(${(currentSlide-2) * 0.25}turn)`}}>
                                <PlotForADay currentHour={currentHour} weatherData={temperatures} unit={"m/s"}/>
                            </div>
                            <div className="rainPlot" style={{transform: `rotateY(${(currentSlide-1) * 0.25}turn)`}}>
                                <PlotForADay currentHour={currentHour} weatherData={temperatures} unit={"mm"}/>
                            </div>
                        </div>
                        <h1 className="right" onClick={() => handleClick("right")}>R</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

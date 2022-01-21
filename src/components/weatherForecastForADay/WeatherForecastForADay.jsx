import "./weatherForecastForADay.scss";
import HourOfDayListItem from "../hourOfDayListItem/HourOfDayListItem";
import React, {useEffect, useRef, useState} from "react";
import PlotForADay from "../plotForADay/PlotForADay";

export default function WeatherForecastForADay({dayToDisplay, weatherData}) {
    const today = new Date();
    const currentHour = today.getHours();

    const [currentSlide, setCurrentSlide] = useState(0);
    const [temperatures, setTemperatures] = useState( [{"temp": 0, "tempForPlot": 1}]);

    const touchStartPosition = useRef([0, 0]);
    const touchEndPosition = useRef([0, 0]);

    function setTouchStartPosition(e) {
        touchStartPosition.current = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
        touchEndPosition.current = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
    }

    function setMouseStartPosition(e) {
        e.preventDefault();
        touchStartPosition.current = [e.clientX, e.clientY];
        touchEndPosition.current = [e.clientX, e.clientY];
    }

    function setTouchCurrentPosition(e) {
        touchEndPosition.current = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
    }

    function setMouseCurrentPosition(e) {
        touchEndPosition.current = [e.clientX, e.clientY];
    }

    function scrollOnVerticalSwipe() {
        const swipeVectorX = touchEndPosition.current[0] - touchStartPosition.current[0];
        const swipeVectorY = touchEndPosition.current[1] - touchStartPosition.current[1];
        const isSwipingHorizontally = Math.abs(swipeVectorX) > Math.abs(swipeVectorY);
        const isSwipingRight = swipeVectorX > 50 && isSwipingHorizontally;
        const isSwipingLeft = swipeVectorX < -50 && isSwipingHorizontally;

        if (isSwipingLeft) {
            setCurrentSlide(currentSlide < 3 - 1 ? currentSlide + 1 : 0);
        }

        if (isSwipingRight) {
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3 - 1)
        }
    }

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
        <div
            className="weatherForecastForADay"
            onTouchStart={touchStartEvent => setTouchStartPosition(touchStartEvent)}
            onTouchMove={touchMoveEvent => setTouchCurrentPosition(touchMoveEvent)}
            onTouchEnd={() => scrollOnVerticalSwipe()}
            onMouseDown={mouseDownEvent => setMouseStartPosition(mouseDownEvent)}
            onMouseMove={mouseMoveEvent => setMouseCurrentPosition(mouseMoveEvent)}
            onMouseUp={() => scrollOnVerticalSwipe()}
        >
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
                    </div>
                </div>
            </div>
        </div>
    );
}

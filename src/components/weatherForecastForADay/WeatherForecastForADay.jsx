import "./weatherForecastForADay.scss";
import HourOfDayListItem from "../hourOfDayListItem/HourOfDayListItem";
import React, {useRef, useState} from "react";
import PlotForADay from "../plotForADay/PlotForADay";

export default function WeatherForecastForADay({dayId, weatherData, currentHour, hourOfSunrise, hourOfSunset}) {
    const dayToDisplay = dayId === 0 ? "Today" : "Tomorrow";

    const numberOfSlides = 2;
    const [currentSlide, setCurrentSlide] = useState(0);

    const touchStartPosition = useRef([0, 0]);
    const touchEndPosition = useRef([0, 0]);

    function setTouchStartPosition(e) {
        e.preventDefault();
        touchStartPosition.current = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
        touchEndPosition.current = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
    }

    function setMouseStartPosition(e) {
        e.preventDefault();
        touchStartPosition.current = [e.clientX, e.clientY];
        touchEndPosition.current = [e.clientX, e.clientY];
    }

    function setTouchCurrentPosition(e) {
        e.preventDefault();
        touchEndPosition.current = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
    }

    function setMouseCurrentPosition(e) {
        touchEndPosition.current = [e.clientX, e.clientY];
    }

    function scrollOnVerticalSwipe(e) {
        e.preventDefault();
        const swipeVectorX = touchEndPosition.current[0] - touchStartPosition.current[0];
        const swipeVectorY = touchEndPosition.current[1] - touchStartPosition.current[1];
        const isSwipingHorizontally = Math.abs(swipeVectorX) > Math.abs(swipeVectorY);
        const isSwipingRight = swipeVectorX > 50 && isSwipingHorizontally;
        const isSwipingLeft = swipeVectorX < -50 && isSwipingHorizontally;

        if (isSwipingLeft) {
            setCurrentSlide(currentSlide < numberOfSlides - 1 ? currentSlide + 1 : 0);
        }

        if (isSwipingRight) {
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : numberOfSlides - 1)
        }
    }

    return (
        <div
            className="weatherForecastForADay"
            onTouchStart={touchStartEvent => setTouchStartPosition(touchStartEvent)}
            onTouchMove={touchMoveEvent => setTouchCurrentPosition(touchMoveEvent)}
            onTouchEnd={(pointerEndEvent) => scrollOnVerticalSwipe(pointerEndEvent)}
            onMouseDown={mouseDownEvent => setMouseStartPosition(mouseDownEvent)}
            onMouseMove={mouseMoveEvent => setMouseCurrentPosition(mouseMoveEvent)}
            onMouseUp={(pointerEndEvent) => scrollOnVerticalSwipe(pointerEndEvent)}
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
                                    sunrise={hourOfSunrise}
                                    sunset={hourOfSunset}
                                />
                            )}
                        </ul>
                    </div>
                    <div className="forecastPlot">
                        <div className="plotsContainer">
                            <div className="temperatureAndWindPlotContainer" style={{transform: `rotateY(${currentSlide * 0.25}turn)`}} >
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
                            <div className="rainPlotContainer" style={{transform: `rotateY(${(currentSlide-1) * 0.25}turn)`}}>
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

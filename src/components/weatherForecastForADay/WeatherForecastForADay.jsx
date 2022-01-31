import "./weatherForecastForADay.scss";
import HourOfDayListItem from "../hourOfDayListItem/HourOfDayListItem";
import React, {useRef, useState} from "react";
import PlotForADay from "../plotForADay/PlotForADay";

export default function WeatherForecastForADay({dayToDisplay, weatherData, currentHour}) {
    const [currentSlide, setCurrentSlide] = useState(0);

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
                            <div className="temperaturePlot" style={{transform: `rotateY(${currentSlide * 0.25}turn)`}} >
                                <PlotForADay
                                    currentHour={currentHour}
                                    weatherData={weatherData}
                                    dataKey={"temperatureForPlot"}
                                    plotKey={"temperature"}
                                    unit={"°C"}/>
                            </div>
                            <div className="windPlot" style={{transform: `rotateY(${(currentSlide-2) * 0.25}turn)`}}>
                                <PlotForADay
                                    currentHour={currentHour}
                                    weatherData={weatherData}
                                    dataKey={"wind_speed"}
                                    plotKey={"wind_speed"}
                                    unit={"m/s"}/>
                            </div>
                            <div className="rainPlot" style={{transform: `rotateY(${(currentSlide-1) * 0.25}turn)`}}>
                                <PlotForADay
                                    currentHour={currentHour}
                                    weatherData={weatherData}
                                    dataKey={"rain_1h"}
                                    plotKey={"rain_1h"}
                                    unit={"mm"}
                                    decimalPrecision={1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

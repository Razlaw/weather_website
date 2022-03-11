import "./weatherForecastDisplay.scss";
import React, {useEffect, useState} from "react";
import WeatherForecastForADay from "../weatherForecastForADay/WeatherForecastForADay";
import WeatherForecastForAWeek from "../weatherForecastForAWeek/WeatherForecastForAWeek";
import {ScrollSnap2D} from "../../utils";
import {useNavigate, useParams} from "react-router-dom";
import {getWeatherData} from "../../data";

export default function WeatherForecastDisplay({updateCityName}) {
    const [currentSlidePosition, handleTouchStart, scrollOnSwipe] = ScrollSnap2D(2, 3);

    const navigate = useNavigate();

    const {lat, lon, cityName} = useParams();
    const [weatherData, updateWeatherData] = useState();

    const fetchWeather = async (lat, lon) => {
        try {
            const localWeatherData = await getWeatherData(lat, lon);

            updateCityName(cityName);
            updateWeatherData(localWeatherData);
        } catch (error) {
            console.log("Failed to fetch weather data");
            console.log(error);
            updateCityName(cityName);
            updateWeatherData();
            navigate("/failed_fetch");
        }
    };

    useEffect(() => {
        fetchWeather(lat, lon);
    }, [lat, lon]);

    useEffect(() => {
        document.addEventListener('visibilitychange', () => {
            if(document.visibilityState === "visible") {
                fetchWeather(lat, lon);
            }
        });
    }, []);

    if(weatherData === undefined) {
        return (
            <div className="loadingData">
                <h1>Loading data.</h1>
            </div>
        );
    }

    return (
        <div
            className="sections"
            onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
            onTouchMove={touchMoveEvent => scrollOnSwipe(touchMoveEvent)}
        >
            <div className="container" style={{transform: `translateY(-${currentSlidePosition.y * 100}%)`}}>
                <WeatherForecastForADay
                    dayId={0}
                    weatherData={weatherData.hourly.slice(0, 24)}
                    currentHour={weatherData["currentHour"]}
                    hourOfSunrise={weatherData["hoursOfSunrise"][0]}
                    hourOfSunset={weatherData["hoursOfSunset"][0]}
                    slideID={currentSlidePosition.x}
                />
            </div>
            <div className="container" style={{transform: `translateY(${(1 - currentSlidePosition.y) * 100}%)`}}>
                <WeatherForecastForADay
                    dayId={1}
                    weatherData={weatherData.hourly.slice(24, 48)}
                    currentHour={weatherData["currentHour"]}
                    hourOfSunrise={weatherData["hoursOfSunrise"][1]}
                    hourOfSunset={weatherData["hoursOfSunset"][1]}
                    slideID={currentSlidePosition.x}
                />
            </div>
            <div className="container" style={{transform: `translateY(${(2 - currentSlidePosition.y) * 100}%)`}}>
                <WeatherForecastForAWeek weatherData={weatherData.daily}/>
            </div>
        </div>
    );
}
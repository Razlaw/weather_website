import "./weatherForecastDisplay.scss";

import React, {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate, useParams} from "react-router-dom";

import LoadingAnimation from "../../components/loadingAnimation/LoadingAnimation";
import WeatherForecastForADay from "./../../components/weatherForecastForADay/WeatherForecastForADay";
import WeatherForecastForAWeek from "./../../components/weatherForecastForAWeek/WeatherForecastForAWeek";

import {getWeatherData} from "../../utils/data";
import {ScrollSnap2D} from "../../utils/utils";

export default function WeatherForecastDisplay({updateCityName, areCookiesAccepted}) {
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const [currentSlidePosition, handleTouchStart, scrollOnSwipe] = ScrollSnap2D(2, 3);

    // Website shows a different animation on first visit, giving a new user visual cues for website's functions
    // These cue animations take some seconds, which can be saved once the user knows what's where
    const firstVisit = cookies.selectedCityName === undefined;

    const navigate = useNavigate();

    const {lat, lon, cityName} = useParams();
    const [weatherData, updateWeatherData] = useState();
    const [numberOfForceReloads, setNumberOfForceReloads] = useState(0);

    const fetchWeather = async (lat, lon) => {
        try {
            const localWeatherData = await getWeatherData(lat, lon);

            updateCityName(cityName);
            if (areCookiesAccepted) {
                setCookie('selectedCityName', cityName, {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
                setCookie('lat', lat, {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
                setCookie('lon', lon, {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
            }
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
    }, [lat, lon, numberOfForceReloads]);

    const onVisibilityChange = () => {
        if (document.visibilityState === "visible") {
            fetchWeather(lat, lon);
        }
    };

    useEffect(() => {
        document.addEventListener("visibilitychange", onVisibilityChange);
        return () => document.removeEventListener("visibilitychange", onVisibilityChange);
    }, []);

    if (weatherData === undefined) {
        return (
            <LoadingAnimation/>
        );
    }

    // When website is installed as PWA, sometimes cached data is used instead of current data on visibility change,
    // although data should be reloaded. Reloading when the first entry of the data does not correspond to data at
    // midnight is a workaround until this behaviour is fixed or I have enough insight to know how to provide a
    // proper fix.
    if (weatherData.hourly[0].hourLocal !== 0) {
        console.error("Weather data does not start at midnight. Reloading.");
        if(numberOfForceReloads < 2) {
            setNumberOfForceReloads(numberOfForceReloads + 1);
        }
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
                    firstVisit={firstVisit}
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
                    firstVisit={firstVisit}
                />
            </div>
            <div className="container" style={{transform: `translateY(${(2 - currentSlidePosition.y) * 100}%)`}}>
                <WeatherForecastForAWeek weatherData={weatherData.daily}/>
            </div>
        </div>
    );
}
import "./app.scss";
import React, {useEffect, useRef, useState} from "react";
import {useCookies} from 'react-cookie';
import CitySearchBar from "./components/citySearchBar/CitySearchBar";
import WeatherForecastForADay from "./components/weatherForecastForADay/WeatherForecastForADay";
import WeatherForecastForAWeek from "./components/weatherForecastForAWeek/WeatherForecastForAWeek";
import {getWeatherData} from "./data"
import {MaxWindowInnerHeight, ScrollSnap2D} from "./utils"

function App() {
    // The maximal inner height of the window, being used as the minHeight of the App to prevent a resize of the
    // components when the Android keyboard is opened - which leads to a smaller inner height.
    const maxWindowInnerHeight = MaxWindowInnerHeight();

    const [currentSlidePosition, handleTouchStart, scrollOnSwipe] = ScrollSnap2D(2, 3);

    const [cookies, setCookie, removeCookie] = useCookies(['cityName']);

    const cityName = useRef(cookies.cityName ? cookies.cityName : "");
    const [weatherData, updateWeatherData] = useState();
    const [triedToFetchData, updateTriedToFetchData] = useState(false);

    const reloadWeather = async (e) => {
        e.preventDefault();
        await fetchWeather();
    };

    /**
     * Fetch weather forecast from OpenWeatherMap (OWM)
     *
     * If fetch is successful, the current city name is saved in the cookies, so the user doesn't need to specify
     * it again on reload.
     * Otherwise the city name entry in the cookies is removed and the forecast data is deleted to show the user
     * that the forecast is not available.
     */
    const fetchWeather = async () => {
        try {
            const localWeatherData = await getWeatherData(cityName.current);

            setCookie('cityName', cityName.current, {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
            updateWeatherData(localWeatherData);
        } catch (error) {
            console.log("Failed to fetch weather data");
            console.log(error);
            removeCookie("cityName", {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
            updateWeatherData();
        }

        if(triedToFetchData === false) {
            updateTriedToFetchData(true);
        }
    };

    // Fetch weather on first render if city name is already defined in cookies
    useEffect(() => {
        if (cookies.cityName) {
            fetchWeather();
        }
    }, []);

    useEffect(() => {
        document.addEventListener('visibilitychange', () => {
            if(document.visibilityState === "visible" && cityName.current !== "") {
                fetchWeather();
            }
        });
    }, []);

    return (
        <div className="App" style={{minHeight : `${maxWindowInnerHeight}px`}}>
            <div className="websiteContent">
                <CitySearchBar cityName={cityName} reloadWeather={reloadWeather}/>
                {weatherData === undefined ? (
                    <div className="noData">
                        {triedToFetchData === false ? (
                            <h1>Search for a city name.<br/>Get the weather forecast.</h1>
                        ) : (
                            <h1>Failed to get weather data.<br/>Try another city.</h1>
                            )
                        }
                    </div>
                ) : (
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
                )}
            </div>
        </div>
    );
}

export default App;

import "./app.scss";
import React, {useEffect, useRef, useState} from "react";
import {useCookies} from 'react-cookie';
import CitySearchBar from "./components/citySearchBar/CitySearchBar";
import WeatherForecastForADay from "./components/weatherForecastForADay/WeatherForecastForADay";
import WeatherForecastForAWeek from "./components/weatherForecastForAWeek/WeatherForecastForAWeek";
import {getWeatherData} from "./data"
import {VerticalScrollSnap} from "./utils"

function App() {
    const [currentSlideId, handleTouchStart, scrollOnVerticalSwipe] = VerticalScrollSnap(3);

    const [cookies, setCookie, removeCookie] = useCookies(['cityName']);

    const [cityName, updateCityName] = useState(cookies.cityName ? cookies.cityName : "");
    const [weatherData, updateWeatherData] = useState();
    const triedToFetchData = useRef(false);

    const reloadWeather = async (e) => {
        e.preventDefault();
        await fetchWeather();
    };

    /* Fetch weather forecast from OpenWeatherMap (OWM)
    *
    * If fetch is successful, the current city name is saved in the cookies, so the user doesn't need to specify
    * it again on reload.
    * Otherwise the city name entry in the cookies is removed and the forecast data is deleted to show the user
    * that the forecast is not available.
    */
    const fetchWeather = async () => {
        try {
            triedToFetchData.current = true;

            const localWeatherData = await getWeatherData(cityName);

            setCookie('cityName', cityName, {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
            updateWeatherData(localWeatherData);
        } catch (error) {
            console.log("Failed to fetch weather data");
            console.log(error);
            removeCookie("cityName", {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
            updateWeatherData();
        }
    };

    // Fetch weather on first render if city name already defined in cookies
    useEffect(() => {
        if (cookies.cityName) {
            fetchWeather();
        }
    }, []);

    return (
        <div className="App">
            <div className="websiteContent">
                <CitySearchBar cityName={cityName} updateCityName={updateCityName} reloadWeather={reloadWeather}/>
                {weatherData === undefined ? (
                    <div className="noData">
                        {triedToFetchData.current === false ? (
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
                        onTouchMove={touchMoveEvent => scrollOnVerticalSwipe(touchMoveEvent)}
                    >
                        <div className="container" style={{transform: `translateY(-${currentSlideId * 100}%)`}}>
                            <WeatherForecastForADay dayToDisplay="Today" weatherData={weatherData.hourly.slice(0, 24)}/>
                        </div>
                        <div className="container" style={{transform: `translateY(${(1 - currentSlideId) * 100}%)`}}>
                            <WeatherForecastForADay dayToDisplay="Tomorrow" weatherData={weatherData.hourly.slice(24, 48)}/>
                        </div>
                        <div className="container" style={{transform: `translateY(${(2 - currentSlideId) * 100}%)`}}>
                            <WeatherForecastForAWeek cityName={cookies.cityName} weatherData={weatherData}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;

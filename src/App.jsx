import "./app.scss";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useCookies} from 'react-cookie';
import CitySearchBar from "./components/citySearchBar/CitySearchBar";
import WeatherForecastForADay from "./components/weatherForecastForADay/WeatherForecastForADay";
import WeatherForecastForAWeek from "./components/weatherForecastForAWeek/WeatherForecastForAWeek";

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartPosition = useRef([0, 0]);
    const isAwaitingScroll = useRef(false);

    /* Saves starting point of touch to check for a vertical scroll on swipe. */
    function handleTouchStart(e) {
        touchStartPosition.current = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
        isAwaitingScroll.current = true;
    }

    /* Checks for a vertical swipe and scrolls into according direction.
    *
    * isAwaitingScroll is used to block further scrolling if swipe continues longer than scroll animation.
    */
    function scrollOnVerticalSwipe(e) {
        if (isAwaitingScroll.current) {
            const touchCurrentPosition = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
            const swipeVectorX = touchCurrentPosition[0] - touchStartPosition.current[0];
            const swipeVectorY = touchCurrentPosition[1] - touchStartPosition.current[1];
            const isSwipingVertically = Math.abs(swipeVectorX) < Math.abs(swipeVectorY);
            const isSwipingDown = swipeVectorY > 0 && isSwipingVertically;
            const isSwipingUp = swipeVectorY < 0 && isSwipingVertically;

            if (isSwipingUp) {
                setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : currentSlide);
                isAwaitingScroll.current = false;
            }

            if (isSwipingDown) {
                setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide)
                isAwaitingScroll.current = false;
            }
        }
    }

    const [cookies, setCookie, removeCookie] = useCookies(['cityName']);

    const [cityName, updateCityName] = useState(cookies.cityName ? cookies.cityName : "");
    const [weatherData, updateWeatherData] = useState();

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
            // Since OWM one call api accepts latitude and longitude coordinates only, we first fetch the current
            // weather - containing the coordinates - using the city name and fetch the forecast using the coordinates.
            const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`);
            const lat = currentWeather.data.coord.lat;
            const lon = currentWeather.data.coord.lon;
            const exclude = "current,minutely,alerts"
            const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${process.env.REACT_APP_API_KEY}`);
            setCookie('cityName', cityName, {path: '/', secure: true, sameSite: "strict"});
            console.log(forecast)
            updateWeatherData(forecast.data);
        } catch (error) {
            console.log("Failed to fetch weather data");
            console.log(error.response.data.error);
            removeCookie("cityName", {path: '/', secure: true, sameSite: "strict"});
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
                        <h1>No weather data to display.</h1>
                        <h1>Try another city.</h1>
                    </div>
                ) : (
                    <div
                        className="sections"
                        onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
                        onTouchMove={touchMoveEvent => scrollOnVerticalSwipe(touchMoveEvent)}
                    >
                        <div className="container" style={{transform: `translateY(-${currentSlide * 100}%)`}}>
                            <WeatherForecastForADay dayToDisplay="Today" weatherData={weatherData.hourly.slice(0, 24)}/>
                        </div>
                        <div className="container" style={{transform: `translateY(${(1 - currentSlide) * 100}%)`}}>
                            <WeatherForecastForADay dayToDisplay="Tomorrow" weatherData={weatherData.hourly.slice(24, 48)}/>
                        </div>
                        <div className="container" style={{transform: `translateY(${(2 - currentSlide) * 100}%)`}}>
                            <WeatherForecastForAWeek cityName={cookies.cityName} weatherData={weatherData}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;

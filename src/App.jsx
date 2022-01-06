import "./app.scss";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useCookies} from 'react-cookie';
import CitySearchBar from "./components/citySearchBar/CitySearchBar";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import WeatherForecastForAWeek from "./components/weatherForecastForAWeek/WeatherForecastForAWeek";

function App() {
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
            <CitySearchBar cityName={cityName} updateCityName={updateCityName} reloadWeather={reloadWeather}/>
            {weatherData === undefined ? (
                <div className="noData">
                    <h1>No weather data to display.</h1>
                    <h1>Try another city.</h1>
                </div>
            ) : (
                <div className="sections">
                    <CurrentWeather cityName={cookies.cityName} weatherData={weatherData}/>
                    <CurrentWeather cityName={cookies.cityName} weatherData={weatherData}/>
                    <WeatherForecastForAWeek cityName={cookies.cityName} weatherData={weatherData}/>
                </div>
            )}
            <div className="footer">
                <span>
                    The weather data displayed on this website is provided by
                    <a href="https://openweathermap.org"> OpenWeather (TM)</a> under the
                    <a href="https://creativecommons.org/licenses/by-sa/4.0/"> Creative Commons Attribution-ShareAlike 4.0 International licence (CC BY-SA 4.0)</a>.
                    Data and database are open and licensed by <a href="https://opendatacommons.org/licenses/odbl/"> Open Data Commons Open Database License (ODbL)</a>.
                </span>
            </div>
        </div>
    );
}

export default App;

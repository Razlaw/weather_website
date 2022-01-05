import "./app.scss";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useCookies} from 'react-cookie';
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import CitySelection from "./components/citySelection/CitySelection";

function App() {
    const [cookies, setCookie, removeCookie] = useCookies(['cityName']);

    const [cityName, updateCityName] = useState(cookies.cityName ? cookies.cityName : "");
    const [weatherData, updateWeatherData] = useState();

    const reloadWeather = async (e) => {
        e.preventDefault();
        await fetchWeather();
    };

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`);
            setCookie('cityName', cityName, {path: '/', secure: true, sameSite: "strict"});
            updateWeatherData(response.data);
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
            <span></span>
            <CitySelection cityName={cityName} updateCityName={updateCityName} reloadWeather={reloadWeather}/>
            {weatherData === undefined ? (
                <h1>No weather data to display</h1>
            ) : (
                <CurrentWeather weatherData={weatherData}/>
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

import "./app.scss";

import React, {useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";

import CitySearchBar from "./components/citySearchBar/CitySearchBar";
import Home from "./components/home/Home";
import ErrorPage from "./components/errorPage/ErrorPage";
import FailedFetch from "./components/failedFetch/FailedFetch";
import WeatherForecastDisplay from "./components/weatherForecastDisplay/WeatherForecastDisplay";

import {MaxWindowInnerHeight} from "./utils"
import axios from "axios";

function App() {
    // The maximal inner height of the window, being used as the minHeight of the App to prevent a resize of the
    // components when the Android keyboard is opened - which leads to a smaller inner height.
    const maxWindowInnerHeight = MaxWindowInnerHeight();

    const navigate = useNavigate();

    const [cityName, updateCityName] = useState("");

    const updateWeatherOnEvent = async (e) => {
        e.preventDefault();
        await updateWeather(cityName);
    };

    const updateWeather = async (cityName) => {
        try {
            const cityLocation = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${process.env.REACT_APP_API_KEY}`);
            const lat = cityLocation.data[0].lat;
            const lon = cityLocation.data[0].lon;

            navigate("/forecast/lat=" + lat + "&lon=" + lon + "&cityname=" + cityName);
        } catch (error) {
            console.log("Failed to fetch city coordinates within getCityCoordinates");
            console.log(error);
            navigate("/failed_fetch");
        }
    }

    return (
        <div className="App" style={{minHeight : `${maxWindowInnerHeight}px`}}>
            <div className="websiteContent">
                <CitySearchBar cityName={cityName} updateCityName={updateCityName} updateWeather={updateWeatherOnEvent}/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/failed_fetch" element={<FailedFetch/>}/>
                    <Route path="/forecast/lat=:lat&lon=:lon&cityname=:cityName" element={<WeatherForecastDisplay updateCityName={updateCityName}/>}/>

                    <Route path="/*" element={<ErrorPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

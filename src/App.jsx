import "./app.scss";

import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";

import CitySearchBar from "./components/citySearchBar/CitySearchBar";
import Home from "./components/home/Home";
import ErrorPage from "./components/errorPage/ErrorPage";
import FailedFetch from "./components/failedFetch/FailedFetch";
import WeatherForecastDisplay from "./components/weatherForecastDisplay/WeatherForecastDisplay";

import {MaxWindowInnerHeight} from "./utils"
import CitySelection from "./components/citySelection/CitySelection";

function App() {
    // The maximal inner height of the window, being used as the minHeight of the App to prevent a resize of the
    // components when the Android keyboard is opened - which leads to a smaller inner height.
    const maxWindowInnerHeight = MaxWindowInnerHeight();

    const [cityName, updateCityName] = useState("");

    return (
        <div className="App" style={{minHeight : `${maxWindowInnerHeight}px`}}>
            <div className="websiteContent">
                <CitySearchBar cityName={cityName} updateCityName={updateCityName}/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/city_selection/cityname=:cityName" element={<CitySelection updateCityName={updateCityName}/>}/>
                    <Route path="/failed_fetch" element={<FailedFetch/>}/>
                    <Route path="/forecast/lat=:lat&lon=:lon&cityname=:cityName" element={<WeatherForecastDisplay updateCityName={updateCityName}/>}/>

                    <Route path="/*" element={<ErrorPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

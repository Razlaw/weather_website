import "./styles.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import CurrentWeather from "./components/currentWeather/CurrentWeather";

function App() {
    const [cookies, setCookie, removeCookie] = useCookies(['cityName']);
    const [cityName, updateCityName] = useState(cookies.cityName ? cookies.cityName : "");
    const [weatherData, updateWeatherData] = useState();

    const fetchWeather = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`);

        console.log(response.data);

        updateWeatherData(response.data);
    };

    return (
        <div className="App">
            <h1>React weather app</h1>

            {cityName && weatherData ? (
                <CurrentWeather weatherData={weatherData}/>
            ) : (
                <div className="wrapper">
                    <h1>Show city selection</h1>
                    <form onSubmit={fetchWeather}>
                        <h1> Our Form </h1>
                        <input
                            onChange={(e) => updateCityName(e.target.value)}
                            placeholder="City"
                            type="text"
                            id="cityNameInput"
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default App;

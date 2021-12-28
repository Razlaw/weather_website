import "./styles.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import CurrentWeather from "./components/currentWeather/CurrentWeather";

function App() {
    const [city, updateCity] = useState();
    const [weather, updateWeather] = useState();

    const fetchWeather = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);

        console.log(response.data);

        updateWeather(response.data);
    };

    return (
        <div className="App">
            <h1>React weather app</h1>

            {city && weather ? (
                <CurrentWeather weatherData={weather}/>
            ) : (
                <div className="wrapper">
                    <h1>Show city selection</h1>
                    <form onSubmit={fetchWeather}>
                        <h1> Our Form </h1>
                        <input
                            onChange={(e) => updateCity(e.target.value)}
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

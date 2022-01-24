import axios from "axios";

export const getWeatherData = async (cityName) => {
    try {
        // Since OWM one call api accepts latitude and longitude coordinates only, we first fetch the current
        // weather - containing the coordinates - using the city name and fetch the forecast using the coordinates.
        const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`);
        const lat = currentWeather.data.coord.lat;
        const lon = currentWeather.data.coord.lon;
        const exclude = "current,minutely,alerts"
        // Hourly forecast starts at previous full hour - e.g. for 11:08 at 11:00
        const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${process.env.REACT_APP_API_KEY}`);
        return Promise.resolve(forecast.data);
    } catch (error) {
        console.log("Failed to fetch weather data within getWeatherData");
        console.log(error);
        return Promise.reject(Error(error));
    }
}
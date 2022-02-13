import axios from "axios";
import {utcTimeFromUTCUnix} from "./utils"

export const getWeatherData = async (cityName) => {
    try {
        // Since OWM one call api accepts latitude and longitude coordinates only, we first fetch the current
        // weather - containing the coordinates - using the city name and fetch the forecast using the coordinates.
        const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`);
        const lat = currentWeather.data.coord.lat;
        const lon = currentWeather.data.coord.lon;
        const currentUnixTimeUTC = currentWeather.data.dt;
        const currentUnixTimeInCity = currentWeather.data.dt + currentWeather.data.timezone;

        // Historical Data up to the last full hour starting from 00:00 going to and including 11:00 for example at 11:08
        const todaysHistoricalWeather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${currentUnixTimeUTC}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
        const hoursInTwoDays = 48;
        let hourlyWeatherForTwoDays = [];

        const dateInCity = new Date(currentUnixTimeInCity * 1000);
        const hoursToFillWithHistoricalData = dateInCity.getUTCHours();
        // Last entry is not used because it corresponds to the same hour as the first entry of the forecast,
        // which is more precise/already updated
        const hoursOfHistoricalDataAvailable = todaysHistoricalWeather.data.hourly.length - 1;
        if (hoursOfHistoricalDataAvailable < hoursToFillWithHistoricalData){
            const yesterdayUnixTimeUTC = currentUnixTimeUTC - 86400;
            const yesterdaysHistoricalWeather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${yesterdayUnixTimeUTC}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

            const hoursToFillWithYesterdaysData = hoursToFillWithHistoricalData - hoursOfHistoricalDataAvailable;
            console.assert(hoursToFillWithYesterdaysData <= yesterdaysHistoricalWeather.data.hourly.length);
            const startIndexYesterday = yesterdaysHistoricalWeather.data.hourly.length - hoursToFillWithYesterdaysData;
            for (let i = startIndexYesterday; i < yesterdaysHistoricalWeather.data.hourly.length; i++){
                const wasRaining = (("rain" in yesterdaysHistoricalWeather.data.hourly[i] && yesterdaysHistoricalWeather.data.hourly[i].rain["1h"] > 0)
                    || ("snow" in yesterdaysHistoricalWeather.data.hourly[i] && yesterdaysHistoricalWeather.data.hourly[i].snow["1h"] > 0));
                hourlyWeatherForTwoDays.push({
                    "temperature": Math.round(yesterdaysHistoricalWeather.data.hourly[i].temp),
                    "weatherIcon": yesterdaysHistoricalWeather.data.hourly[i].weather[0].icon,
                    "wind_deg": yesterdaysHistoricalWeather.data.hourly[i].wind_deg,
                    "wind_speed": Math.round(yesterdaysHistoricalWeather.data.hourly[i].wind_speed * 3.6),
                    "cloudiness": yesterdaysHistoricalWeather.data.hourly[i].clouds,
                    "weather": yesterdaysHistoricalWeather.data.hourly[i].weather,
                    "probabilityOfPrecipitation": (wasRaining ? 100 : 0),
                    "rain_1h": ("rain" in yesterdaysHistoricalWeather.data.hourly[i] ? yesterdaysHistoricalWeather.data.hourly[i].rain["1h"].toFixed(1) : 0),
                    "snow_1h": ("snow" in yesterdaysHistoricalWeather.data.hourly[i] ? yesterdaysHistoricalWeather.data.hourly[i].snow["1h"].toFixed(1) : 0),
                    "timeUTC": utcTimeFromUTCUnix(yesterdaysHistoricalWeather.data.hourly[i].dt),
                    "timeLocal": utcTimeFromUTCUnix(yesterdaysHistoricalWeather.data.hourly[i].dt + currentWeather.data.timezone),
                    "dt": yesterdaysHistoricalWeather.data.hourly[i].dt});
            }
        }

        const hoursAlreadyFilled = hourlyWeatherForTwoDays.length;
        const startIndexToday = hoursOfHistoricalDataAvailable - (hoursToFillWithHistoricalData - hoursAlreadyFilled);
        for (let i = startIndexToday; i < hoursOfHistoricalDataAvailable; i++){
            const wasRaining = (("rain" in todaysHistoricalWeather.data.hourly[i] && todaysHistoricalWeather.data.hourly[i].rain["1h"] > 0)
                || ("snow" in todaysHistoricalWeather.data.hourly[i] && todaysHistoricalWeather.data.hourly[i].snow["1h"] > 0));
            hourlyWeatherForTwoDays.push({
                "temperature": Math.round(todaysHistoricalWeather.data.hourly[i].temp),
                "weatherIcon": todaysHistoricalWeather.data.hourly[i].weather[0].icon,
                "wind_deg": todaysHistoricalWeather.data.hourly[i].wind_deg,
                "wind_speed": Math.round(todaysHistoricalWeather.data.hourly[i].wind_speed * 3.6),
                "cloudiness": todaysHistoricalWeather.data.hourly[i].clouds,
                "weather": todaysHistoricalWeather.data.hourly[i].weather,
                "probabilityOfPrecipitation": (wasRaining ? 100 : 0),
                "rain_1h": ("rain" in todaysHistoricalWeather.data.hourly[i] ? todaysHistoricalWeather.data.hourly[i].rain["1h"].toFixed(1) : 0),
                "snow_1h": ("snow" in todaysHistoricalWeather.data.hourly[i] ? todaysHistoricalWeather.data.hourly[i].snow["1h"].toFixed(1) : 0),
                "timeUTC": utcTimeFromUTCUnix(todaysHistoricalWeather.data.hourly[i].dt),
                "timeLocal": utcTimeFromUTCUnix(todaysHistoricalWeather.data.hourly[i].dt + currentWeather.data.timezone),
                "dt": todaysHistoricalWeather.data.hourly[i].dt});
        }

        const exclude = "current,minutely,alerts"
        // Hourly forecast starts at previous full hour - e.g. for 11:08 at 11:00
        const nextDaysForecast = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${process.env.REACT_APP_API_KEY}`);
        const numberOfEntriesToFill = hoursInTwoDays - hourlyWeatherForTwoDays.length;
        console.assert(numberOfEntriesToFill <= nextDaysForecast.data.hourly.length);
        for (let i = 0; i < numberOfEntriesToFill; i++){
            hourlyWeatherForTwoDays.push({
                "temperature": Math.round(nextDaysForecast.data.hourly[i].temp),  // in °C
                "weatherIcon": nextDaysForecast.data.hourly[i].weather[0].icon,
                "wind_deg": nextDaysForecast.data.hourly[i].wind_deg,  // from 0 to 360 degrees
                "wind_speed": Math.round(nextDaysForecast.data.hourly[i].wind_speed * 3.6),  // in km/h
                "cloudiness": nextDaysForecast.data.hourly[i].clouds,  // in % from 0 to 100
                "weather": nextDaysForecast.data.hourly[i].weather,  // data with key for icon
                "probabilityOfPrecipitation": ("pop" in nextDaysForecast.data.hourly[i] ? (nextDaysForecast.data.hourly[i]["pop"] * 100).toFixed() : 0),  // in percent from 0 to 100
                "rain_1h": ("rain" in nextDaysForecast.data.hourly[i] ? nextDaysForecast.data.hourly[i].rain["1h"].toFixed(1) : 0),  // in mm
                "snow_1h": ("snow" in nextDaysForecast.data.hourly[i] ? nextDaysForecast.data.hourly[i].snow["1h"].toFixed(1) : 0),  // in mm
                "timeUTC": utcTimeFromUTCUnix(nextDaysForecast.data.hourly[i].dt),
                "timeLocal": utcTimeFromUTCUnix(nextDaysForecast.data.hourly[i].dt + currentWeather.data.timezone),
                "dt": nextDaysForecast.data.hourly[i].dt});
        }

        // Workaround: recharts draws bars with positive and negative values into different directions.
        //  I didn't find a way to change the behaviour to draw all bars into one direction - setting the bottom
        //  value of the bars as its called in matplotlib. This workaround shifts all values into a range starting
        //  from the value 1 if at least one element is negative. The shifted values as used for plotting while the
        //  original values are used for the labels of the bars.
        let startIndex = 0;
        let endIndex = 23;
        for (let dayId = 0; dayId < 2; dayId++) {
            let roundedTemperatureArray = [];
            for(let i = startIndex; i <= endIndex; i++) {
                roundedTemperatureArray.push(hourlyWeatherForTwoDays[i]["temperature"]);
            }

            let lowestTemperature = Math.min(...roundedTemperatureArray);
            let temperatureArrayForPlot = roundedTemperatureArray.map( function(value) {
                return value - (lowestTemperature - 1);
            } );

            let indexForPlotData = 0;
            for(let i = startIndex; i <= endIndex; i++) {
                hourlyWeatherForTwoDays[i]["temperatureForPlot"] = temperatureArrayForPlot[indexForPlotData];
                indexForPlotData++;
            }

            startIndex += 24;
            endIndex += 24;
        }

        const weatherData = {"hourly": hourlyWeatherForTwoDays};

        // Reconstruct the current hour of the requested city
        const utcNow = Date.now();  // Use .now() because current time in data might be from previous hour
        const nowInTimezone = (utcNow + (currentWeather.data.timezone * 1000));
        const dateInTimezone = new Date(nowInTimezone);
        const currentHour = dateInTimezone.getUTCHours();  // .getUTCHours() to not apply the timezone of the user
        weatherData["currentHour"] = currentHour;

        // Save hours of sunrise and sunset for current and next day
        weatherData["hoursOfSunrise"] = [];
        weatherData["hoursOfSunset"] = [];
        for (let dayId = 0; dayId < 2; dayId++) {
            const sunriseInTimezone = new Date((nextDaysForecast.data.daily[dayId].sunrise + currentWeather.data.timezone) * 1000);
            const hourOfSunrise = sunriseInTimezone.getUTCHours();
            const sunsetInTimezone = new Date((nextDaysForecast.data.daily[dayId].sunset + currentWeather.data.timezone) * 1000);
            const hourOfSunset = sunsetInTimezone.getUTCHours();
            weatherData["hoursOfSunrise"].push(hourOfSunrise);
            weatherData["hoursOfSunset"].push(hourOfSunset);
        }

        return Promise.resolve(weatherData);
    } catch (error) {
        console.log("Failed to fetch weather data within getWeatherData");
        console.log(error);
        return Promise.reject(Error(error));
    }
}
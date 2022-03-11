import axios from "axios";
import {utcDateFromUTCUnix} from "./utils"

export const getWeatherData = async (lat, lon) => {
    try {
        const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`);

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
                let amountOfPrecipitation = "rain" in yesterdaysHistoricalWeather.data.hourly[i] ? yesterdaysHistoricalWeather.data.hourly[i].rain["1h"] : 0;
                amountOfPrecipitation += ("snow" in yesterdaysHistoricalWeather.data.hourly[i] ? yesterdaysHistoricalWeather.data.hourly[i].snow["1h"] : 0);

                hourlyWeatherForTwoDays.push({
                    "temperature": Math.round(yesterdaysHistoricalWeather.data.hourly[i].temp),
                    "weatherIcon": yesterdaysHistoricalWeather.data.hourly[i].weather[0].icon,
                    "windDirection": yesterdaysHistoricalWeather.data.hourly[i].wind_deg,
                    "windSpeed": Math.round(yesterdaysHistoricalWeather.data.hourly[i].wind_speed * 3.6),
                    "probabilityOfPrecipitation": (wasRaining ? 100 : 0),
                    "amountOfPrecipitation": amountOfPrecipitation.toFixed(1),
                    "amountOfPrecipitationForPlot": amountOfPrecipitation.toFixed(1) * 10,
                    "dateLocal": utcDateFromUTCUnix(yesterdaysHistoricalWeather.data.hourly[i].dt + currentWeather.data.timezone)
                });
            }
        }

        const hoursAlreadyFilled = hourlyWeatherForTwoDays.length;
        const startIndexToday = hoursOfHistoricalDataAvailable - (hoursToFillWithHistoricalData - hoursAlreadyFilled);
        for (let i = startIndexToday; i < hoursOfHistoricalDataAvailable; i++){
            const wasRaining = (("rain" in todaysHistoricalWeather.data.hourly[i] && todaysHistoricalWeather.data.hourly[i].rain["1h"] > 0)
                || ("snow" in todaysHistoricalWeather.data.hourly[i] && todaysHistoricalWeather.data.hourly[i].snow["1h"] > 0));
            let amountOfPrecipitation = "rain" in todaysHistoricalWeather.data.hourly[i] ? todaysHistoricalWeather.data.hourly[i].rain["1h"] : 0;
            amountOfPrecipitation += ("snow" in todaysHistoricalWeather.data.hourly[i] ? todaysHistoricalWeather.data.hourly[i].snow["1h"] : 0);

            hourlyWeatherForTwoDays.push({
                "temperature": Math.round(todaysHistoricalWeather.data.hourly[i].temp),
                "weatherIcon": todaysHistoricalWeather.data.hourly[i].weather[0].icon,
                "windDirection": todaysHistoricalWeather.data.hourly[i].wind_deg,
                "windSpeed": Math.round(todaysHistoricalWeather.data.hourly[i].wind_speed * 3.6),
                "probabilityOfPrecipitation": (wasRaining ? 100 : 0),
                "amountOfPrecipitation": amountOfPrecipitation.toFixed(1),
                "amountOfPrecipitationForPlot": amountOfPrecipitation.toFixed(1) * 10,
                "dateLocal": utcDateFromUTCUnix(todaysHistoricalWeather.data.hourly[i].dt + currentWeather.data.timezone)
            });
        }

        const exclude = "current,minutely,alerts"
        // Hourly forecast starts at previous full hour - e.g. for 11:08 at 11:00
        const nextDaysForecast = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${process.env.REACT_APP_API_KEY}`);
        const numberOfEntriesToFill = hoursInTwoDays - hourlyWeatherForTwoDays.length;
        console.assert(numberOfEntriesToFill <= nextDaysForecast.data.hourly.length);
        for (let i = 0; i < numberOfEntriesToFill; i++){
            let amountOfPrecipitation = "rain" in nextDaysForecast.data.hourly[i] ? nextDaysForecast.data.hourly[i].rain["1h"] : 0;
            amountOfPrecipitation += ("snow" in nextDaysForecast.data.hourly[i] ? nextDaysForecast.data.hourly[i].snow["1h"] : 0);

            hourlyWeatherForTwoDays.push({
                "temperature": Math.round(nextDaysForecast.data.hourly[i].temp),  // in °C
                "weatherIcon": nextDaysForecast.data.hourly[i].weather[0].icon,
                "windDirection": nextDaysForecast.data.hourly[i].wind_deg,  // from 0 to 360 degrees
                "windSpeed": Math.round(nextDaysForecast.data.hourly[i].wind_speed * 3.6),  // in km/h
                "probabilityOfPrecipitation": ("pop" in nextDaysForecast.data.hourly[i] ? (nextDaysForecast.data.hourly[i]["pop"] * 100).toFixed() : 0),  // in percent from 0 to 100
                "amountOfPrecipitation": amountOfPrecipitation.toFixed(1),
                "amountOfPrecipitationForPlot": amountOfPrecipitation.toFixed(1) * 10,
                "dateLocal": utcDateFromUTCUnix(nextDaysForecast.data.hourly[i].dt + currentWeather.data.timezone)
            });
        }

        let dailyWeatherForSevenDays = [];
        for (let i = 0; i < 7; i++){
            let amountOfPrecipitation = "rain" in nextDaysForecast.data.daily[i] ? nextDaysForecast.data.daily[i].rain : 0;
            amountOfPrecipitation += ("snow" in nextDaysForecast.data.daily[i] ? nextDaysForecast.data.daily[i].snow : 0);

            dailyWeatherForSevenDays.push({
                "minTemperature": Math.round(nextDaysForecast.data.daily[i].temp.min),  // in °C
                "maxTemperature": Math.round(nextDaysForecast.data.daily[i].temp.max),  // in °C
                "weatherIcon": nextDaysForecast.data.daily[i].weather[0].icon,
                "windDirection": nextDaysForecast.data.daily[i].wind_deg,  // from 0 to 360 degrees
                "windSpeed": Math.round(nextDaysForecast.data.daily[i].wind_speed * 3.6),  // in km/h
                "probabilityOfPrecipitation": ("pop" in nextDaysForecast.data.daily[i] ? (nextDaysForecast.data.daily[i]["pop"] * 100).toFixed() : 0),  // in percent from 0 to 100
                "amountOfPrecipitation": amountOfPrecipitation.toFixed(1),
                "amountOfPrecipitationForPlot": amountOfPrecipitation.toFixed(1) * 10,
                "dateLocal": utcDateFromUTCUnix(nextDaysForecast.data.daily[i].dt + currentWeather.data.timezone)
            });
        }


        const weatherData = {"hourly": hourlyWeatherForTwoDays, "daily": dailyWeatherForSevenDays};

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
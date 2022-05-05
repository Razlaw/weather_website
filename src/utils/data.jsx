import axios from "axios";

import {utcDateFromUTCUnix, utcHourFromUTCUnix} from "./utils"

// Find index of entry corresponding to weather at midnight in local time of requested city
function getMidnightIndex(dataArray, timezoneOffset) {
    for (let i = 0; i < dataArray.length; i++) {
        const currentHour = utcHourFromUTCUnix(dataArray[i].dt + timezoneOffset);
        if(currentHour === 0) {
            return i;
        }
    }
}

// OpenWeather's icons indicate "completely cloudy" if the cloud probability is above 50%.
// I notices that this was a very pessimistic estimate and increased the threshold :)
function adaptCloudinessInWeatherIcon(icon, cloudProbability) {
    const cloudIcons = ["01d", "01n", "02d", "02n", "03d", "03n", "04d", "04n"];
    if(cloudIcons.indexOf(icon) > -1) {
        if(cloudProbability < 25) {
            return "01" + icon.slice(-1);
        }
        else if(cloudProbability < 50) {
            return "02" + icon.slice(-1);
        }
        else if(cloudProbability < 85) {
            return "03" + icon.slice(-1);
        }
    }
    return icon;
}

function appendHistoricalEntryToWeatherData(dataEntry, weatherData, timezoneOffset) {
    const wasRaining = (("rain" in dataEntry && dataEntry.rain["1h"] > 0)
                     || ("snow" in dataEntry && dataEntry.snow["1h"] > 0));
    let amountOfPrecipitation = "rain" in dataEntry ? dataEntry.rain["1h"] : 0;
    amountOfPrecipitation += ("snow" in dataEntry ? dataEntry.snow["1h"] : 0);

    weatherData.push({
        "temperature": Math.round(dataEntry.temp),
        "weatherIcon": adaptCloudinessInWeatherIcon(dataEntry.weather[0].icon, dataEntry.clouds),
        "windDirection": dataEntry.wind_deg,
        "windSpeed": Math.round(dataEntry.wind_speed * 3.6),
        "probabilityOfPrecipitation": (wasRaining ? 100 : 0),
        "amountOfPrecipitation": amountOfPrecipitation.toFixed(1),
        "dateLocal": utcDateFromUTCUnix(dataEntry.dt + timezoneOffset),
        "hourLocal": utcHourFromUTCUnix(dataEntry.dt + timezoneOffset)
    });
}

function appendForecastEntryToWeatherData(dataEntry, weatherData, timezoneOffset) {
    let amountOfPrecipitation = "rain" in dataEntry ? dataEntry.rain["1h"] : 0;
    amountOfPrecipitation += ("snow" in dataEntry ? dataEntry.snow["1h"] : 0);

    weatherData.push({
        "temperature": Math.round(dataEntry.temp),  // in °C
        "weatherIcon": adaptCloudinessInWeatherIcon(dataEntry.weather[0].icon, dataEntry.clouds),
        "windDirection": dataEntry.wind_deg,  // from 0 to 360 degrees
        "windSpeed": Math.round(dataEntry.wind_speed * 3.6),  // in km/h
        "probabilityOfPrecipitation": ("pop" in dataEntry ? (dataEntry["pop"] * 100).toFixed() : 0),  // in percent from 0 to 100
        "amountOfPrecipitation": amountOfPrecipitation.toFixed(1),
        "dateLocal": utcDateFromUTCUnix(dataEntry.dt + timezoneOffset),
        "hourLocal": utcHourFromUTCUnix(dataEntry.dt + timezoneOffset)
    });
}

function getDailyForecast(weatherForecast, dailyForecast, timezoneOffset) {
    for (let i = 0; i < 7; i++) {
        let amountOfPrecipitation = "rain" in weatherForecast.data.daily[i] ? weatherForecast.data.daily[i].rain : 0;
        amountOfPrecipitation += ("snow" in weatherForecast.data.daily[i] ? weatherForecast.data.daily[i].snow : 0);

        // OpenWeather's icon for a rainy day is always the "heavy" rain icon, even if it's only showering.
        // Here the shower rain icon is used for rainy days with an amount of rain below 1mm.
        const isShowerRain = amountOfPrecipitation > 0.01 && amountOfPrecipitation < 1.0;
        const isSnowIcon = weatherForecast.data.daily[i].weather[0].icon === "13d";
        const weatherIcon = (isShowerRain && !isSnowIcon) ? "09d" : weatherForecast.data.daily[i].weather[0].icon;

        dailyForecast.push({
            "minTemperature": Math.round(weatherForecast.data.daily[i].temp.min),  // in °C
            "maxTemperature": Math.round(weatherForecast.data.daily[i].temp.max),  // in °C
            "weatherIcon": adaptCloudinessInWeatherIcon(weatherIcon, weatherForecast.data.daily[i].clouds),
            "windDirection": weatherForecast.data.daily[i].wind_deg,  // from 0 to 360 degrees
            "windSpeed": Math.round(weatherForecast.data.daily[i].wind_speed * 3.6),  // in km/h
            "probabilityOfPrecipitation": ("pop" in weatherForecast.data.daily[i] ? (weatherForecast.data.daily[i]["pop"] * 100).toFixed() : 0),  // in percent from 0 to 100
            "amountOfPrecipitation": amountOfPrecipitation.toFixed(1),
            "dateLocal": utcDateFromUTCUnix(weatherForecast.data.daily[i].dt + timezoneOffset)
        });
    }
}

function getCurrentHourWithOffset(timezoneOffset) {
    const utcNow = Date.now();  // Use .now() because current time in data might be from previous hour
    const nowInTimezone = (utcNow + (timezoneOffset * 1000));
    const dateInTimezone = new Date(nowInTimezone);
    return dateInTimezone.getUTCHours();  // .getUTCHours() to not apply the timezone of the user
}

export const getWeatherData = async (lat, lon) => {
    try {
        let hourlyWeatherForTwoDays = [];

        // Get the weather forecast - Hourly forecast starts at previous full hour - e.g. for 11:08 at 11:00
        const exclude = "current,minutely,alerts"
        const weatherForecast = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${process.env.REACT_APP_API_KEY}`);
        
        const timezoneOffset = weatherForecast.data.timezone_offset;
        const hourOfFirstEntryInLocalTime = utcHourFromUTCUnix(weatherForecast.data.hourly[0].dt + timezoneOffset);

        // Check if there is historical data missing for passed hours of the current day
        const numberOfHistoricalDataPointsNeeded = hourOfFirstEntryInLocalTime;
        if(numberOfHistoricalDataPointsNeeded > 0) {
            // Get historical data for the day up to the passed midnight in UTC
            const currentUnixTimeUTC = weatherForecast.data.hourly[0].dt;
            const todaysHistoricalWeather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${currentUnixTimeUTC}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

            // Check if we have enough historical data - e.g. when time in requested city is ahead of the UTC timezone
            const numberOfHistoricalDataPointsAvailable = todaysHistoricalWeather.data.hourly.length - 1;
            if(numberOfHistoricalDataPointsNeeded > numberOfHistoricalDataPointsAvailable) {
                // Get historical data of the passed day
                const yesterdayUnixTimeUTC = currentUnixTimeUTC - 86400;
                const yesterdaysHistoricalWeather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${yesterdayUnixTimeUTC}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

                const midnightIndex = getMidnightIndex(yesterdaysHistoricalWeather.data.hourly, timezoneOffset);

                // Convert data into needed format and store in array
                for (let i = midnightIndex; i < yesterdaysHistoricalWeather.data.hourly.length; i++) {
                    appendHistoricalEntryToWeatherData(yesterdaysHistoricalWeather.data.hourly[i], hourlyWeatherForTwoDays, timezoneOffset);
                }

                // Append remaining historical data
                for (let i = 0; utcHourFromUTCUnix(todaysHistoricalWeather.data.hourly[i].dt + timezoneOffset) < hourOfFirstEntryInLocalTime; i++){
                    appendHistoricalEntryToWeatherData(todaysHistoricalWeather.data.hourly[i], hourlyWeatherForTwoDays, timezoneOffset);
                }
            }
            else {
                // Convert data into needed format and store in array starting from data at midnight of requested city
                const midnightIndex = getMidnightIndex(todaysHistoricalWeather.data.hourly, timezoneOffset);
                for (let i = midnightIndex; i < todaysHistoricalWeather.data.hourly.length; i++){
                    // Stop appending historical data once forecast data is available for the current hour
                    if(utcHourFromUTCUnix(todaysHistoricalWeather.data.hourly[i].dt + timezoneOffset) === hourOfFirstEntryInLocalTime){
                        break;
                    }
                    appendHistoricalEntryToWeatherData(todaysHistoricalWeather.data.hourly[i], hourlyWeatherForTwoDays, timezoneOffset);
                }
            }
        }

        // Convert forecast's hourly data into needed format and store in array
        const hoursInTwoDays = 48;
        for (let i = 0; hourlyWeatherForTwoDays.length < hoursInTwoDays; i++){
            appendForecastEntryToWeatherData(weatherForecast.data.hourly[i], hourlyWeatherForTwoDays, timezoneOffset);
        }

        // Convert forecast's daily data into needed format and store in array
        let dailyWeatherForSevenDays = [];
        getDailyForecast(weatherForecast, dailyWeatherForSevenDays, timezoneOffset);

        const weatherData = {"hourly": hourlyWeatherForTwoDays, "daily": dailyWeatherForSevenDays};

        // Get the current hour of the requested city in local time
        weatherData["currentHour"] = getCurrentHourWithOffset(timezoneOffset);

        // Save hours of sunrise and sunset for current and next day
        weatherData["hoursOfSunrise"] = [];
        weatherData["hoursOfSunset"] = [];
        for (let dayId = 0; dayId < 2; dayId++) {
            const sunriseInTimezone = new Date((weatherForecast.data.daily[dayId].sunrise + timezoneOffset) * 1000);
            const hourOfSunrise = sunriseInTimezone.getUTCHours();
            const sunsetInTimezone = new Date((weatherForecast.data.daily[dayId].sunset + timezoneOffset) * 1000);
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
import "./citySelection.scss";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Flag from 'react-flagpack'
import axios from "axios";

export default function CitySelection({updateCityName}) {
    const navigate = useNavigate();
    const {cityName} = useParams();
    const [citySelection, updateCitySelection] = useState();

    function navigateToForecast(selectedCityName, lat, lon) {
        navigate("/forecast/lat=" + lat + "&lon=" + lon + "&cityname=" + selectedCityName);
    }

    const fetchCityLocations = async (cityName) => {
        try {
            const cityLocations = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${process.env.REACT_APP_API_KEY}`);
            if(cityLocations.data.length === 0) {
                throw new Error("No cities with corresponding names to " + cityName + " found.");
            }
            updateCityName(cityName);
            updateCitySelection(cityLocations.data);
        } catch (error) {
            console.log("Failed to fetch city coordinates");
            console.log(error);
            updateCityName(cityName);
            navigate("/failed_fetch");
        }
    }

    useEffect(() => {
        fetchCityLocations(cityName);
    }, [cityName]);

    if(citySelection === undefined) {
        return (
            <div className="loadingCitySelection">
                <h1>Loading data.</h1>
            </div>
        );
    }

    return (
        <div className="citySelection">
            {citySelection.map((cityDetails, id) =>
                <div
                    key={id}
                    className="cityOption"
                    onClick={() => navigateToForecast(cityDetails.name, cityDetails.lat, cityDetails.lon)}
                >
                    <div className="flagContainer">
                        <Flag
                            code={cityDetails.country.startsWith("GB") ? "GB-UKM" : cityDetails.country}
                            size="l"
                            hasBorderRadius
                            gradient="top-down"
                        />
                    </div>
                    <div className="cityDetailsContainer">
                        <p className="cityDetails">
                            {cityDetails.name}
                            <span className="cityDetailsCountry">
                                , {cityDetails.country}{"state" in cityDetails ? ", " + cityDetails.state : ""}
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
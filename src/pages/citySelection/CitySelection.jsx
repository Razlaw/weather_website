import "./citySelection.scss";

import axios from "axios";
import React, {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import Flag from 'react-flagpack'
import {useNavigate, useParams} from "react-router-dom";

import {ReactComponent as FavouriteIcon} from '../../assets/favourite_icon.svg';

import LoadingAnimation from "../../components/loadingAnimation/LoadingAnimation";

export default function CitySelection({updateCityName}) {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["favouriteCities"]);
    const {cityName} = useParams();
    const [citySelection, updateCitySelection] = useState();

    function navigateToForecast(selectedCityName, lat, lon) {
        navigate("/forecast/lat=" + lat + "&lon=" + lon + "&cityname=" + selectedCityName);
    }

    function removeCityFromFavourites(city) {
        const index = getIndexOfCityInFavourites(city);
        let favouriteCities = cookies.favouriteCities;
        favouriteCities.splice(index, 1);
        setCookie("favouriteCities", favouriteCities, {
            path: "/",
            secure: true,
            sameSite: "strict",
            maxAge: 31536000
        });
    }

    function addCityToFavourites(city) {
        const newFavouriteCity = {
            "name": city.name,
            "lat": city.lat,
            "lon": city.lon,
            "country": city.country,
            "state": city.state
        }
        let favouriteCities = cookies.favouriteCities;
        if(favouriteCities === undefined)
        {
            favouriteCities = [newFavouriteCity];
        }
        else{
            favouriteCities.push(newFavouriteCity);
        }
        setCookie('favouriteCities', favouriteCities, {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
    }

    function manageFavourites(e, cityDetails) {
        e.stopPropagation();

        if(isCityInFavourites(cityDetails)) {
            removeCityFromFavourites(cityDetails);
        }
        else {
            addCityToFavourites(cityDetails);
        }
    }

    function getIndexOfCityInFavourites(city) {
        const favourites = cookies.favouriteCities;
        if(favourites === undefined) {
            return -1;
        }
        else {
            for(let i = 0; i < favourites.length; i++) {
                if(city.name === favourites[i].name &&
                    city.lat === favourites[i].lat &&
                    city.lon === favourites[i].lon) {
                    return i;
                }
            }
        }
        return -1;
    }

    function isCityInFavourites(city) {
        return getIndexOfCityInFavourites(city) >= 0;
    }

    const fetchCityLocations = async (cityName) => {
        try {
            const cityLocations = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${process.env.REACT_APP_API_KEY}`);
            if (cityLocations.data.length === 0) {
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

    if (citySelection === undefined) {
        return (
            <LoadingAnimation/>
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
                    <div
                        className={"isInFavouritesIcon " + (cookies.areCookiesAccepted && "areCookiesAccepted")}
                        onClick={(e) => manageFavourites(e, cityDetails)}
                    >
                        {isCityInFavourites(cityDetails) ?
                            <FavouriteIcon className="favouriteIcon full"/> :
                            <FavouriteIcon className="favouriteIcon empty"/>}
                    </div>
                </div>
            )}
        </div>
    );
}
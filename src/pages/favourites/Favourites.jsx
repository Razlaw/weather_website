import "./favourites.scss";

import React from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";
import Flag from "react-flagpack";

import {ReactComponent as FavouriteIcon} from '../../assets/favourite_icon.svg';

export default function Favourites() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["favouriteCities"]);

    function navigateToForecast(selectedCityName, lat, lon) {
        navigate(
            "/forecast/lat=" + lat + "&lon=" + lon + "&cityname=" + selectedCityName
        );
    }

    function removeCityFromFavourites(e, index) {
        e.stopPropagation();

        let favouriteCities = cookies.favouriteCities;
        favouriteCities.splice(index, 1);
        setCookie("favouriteCities", favouriteCities, {
            path: "/",
            secure: true,
            sameSite: "strict",
            maxAge: 31536000
        });
    }

    if (cookies.favouriteCities === undefined || cookies.favouriteCities.length === 0) {
        return (
            <div className="favouritesHelpText">
                <h1>
                    Hier werden deine Favoriten aufgelistet.
                </h1>
                <h1>
                    Such nach einer Stadt und drück auf den {"\u2606"} um die Liste zu füllen.
                </h1>
            </div>
        );
    }

    return (
        <div className="favourites">
            {cookies.favouriteCities.map((cityDetails, id) => (
                <div
                    key={id}
                    className="favouriteOption"
                    onClick={() =>
                        navigateToForecast(
                            cityDetails.name,
                            cityDetails.lat,
                            cityDetails.lon
                        )
                    }
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
                                , {cityDetails.country}
                                {"state" in cityDetails ? ", " + cityDetails.state : ""}
                            </span>
                        </p>
                    </div>
                    <div
                        className="isInFavouritesIcon"
                        onClick={(e) => removeCityFromFavourites(e, id)}
                    >
                        <FavouriteIcon className="favouriteIcon full"/>
                    </div>
                </div>
            ))}
        </div>
    );
}

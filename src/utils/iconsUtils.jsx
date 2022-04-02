import React from "react";

import {ReactComponent as SunnyIcon} from "../assets/sunny_icon.svg";
import {ReactComponent as ScatteredCloudsIcon} from "../assets/scattered_clouds_icon.svg";
import {ReactComponent as BrokenCloudsIcon} from "../assets/broken_clouds_icon.svg";
import {ReactComponent as CloudyIcon} from "../assets/cloudy_icon.svg";
import {ReactComponent as ShowerRainIcon} from "../assets/shower_rain_icon.svg";
import {ReactComponent as RainIcon} from "../assets/rain_icon.svg";
import {ReactComponent as ThunderstormIcon} from "../assets/thunderstorm_icon.svg";
import {ReactComponent as SnowIcon} from "../assets/snow_icon.svg";
import {ReactComponent as MistIcon} from "../assets/mist_icon.svg";

import {ReactComponent as MoonIcon} from "../assets/moon_icon.svg";
import {ReactComponent as NightScatteredCloudsIcon} from "../assets/night_scattered_clouds_icon.svg";
import {ReactComponent as NightBrokenCloudsIcon} from "../assets/night_broken_clouds_icon.svg";
import {ReactComponent as NightCloudyIcon} from "../assets/night_cloudy_icon.svg";
import {ReactComponent as NightShowerRainIcon} from "../assets/night_shower_rain_icon.svg";
import {ReactComponent as NightRainIcon} from "../assets/night_rain_icon.svg";
import {ReactComponent as NightThunderstormIcon} from "../assets/night_thunderstorm_icon.svg";
import {ReactComponent as NightSnowIcon} from "../assets/night_snow_icon.svg";
import {ReactComponent as NightMistIcon} from "../assets/night_mist_icon.svg";

import {ReactComponent as WindDirectionIcon} from "../assets/wind_direction_icon.svg";

import {ReactComponent as ProbabilityLowIcon} from "../assets/probablity_low_icon.svg";
import {ReactComponent as ProbabilityMediumIcon} from "../assets/probablity_medium_icon.svg";
import {ReactComponent as ProbabilityHighIcon} from "../assets/probablity_high_icon.svg";

import {ReactComponent as NoRainIcon} from "../assets/no_rain_icon.svg";
import {ReactComponent as LightRainIcon} from "../assets/light_rain_icon.svg";
import {ReactComponent as MediumRainIcon} from "../assets/medium_rain_icon.svg";
import {ReactComponent as HeavyRainIcon} from "../assets/heavy_rain_icon.svg";

export function getWeatherIcon(iconID, key) {
    switch (iconID) {
        case "01d":
            return <SunnyIcon key={key} className="weatherIcon icon"/>;
        case "01n":
            return <MoonIcon key={key} className="weatherIcon icon"/>;
        case "02d":
            return <ScatteredCloudsIcon key={key} className="weatherIcon icon"/>;
        case "02n":
            return <NightScatteredCloudsIcon key={key} className="weatherIcon icon"/>;
        case "03d":
            return <BrokenCloudsIcon key={key} className="weatherIcon icon"/>;
        case "03n":
            return <NightBrokenCloudsIcon key={key} className="weatherIcon icon"/>;
        case "04d":
            return <CloudyIcon key={key} className="weatherIcon icon"/>;
        case "04n":
            return <NightCloudyIcon key={key} className="weatherIcon icon"/>;
        case "09d":
            return <ShowerRainIcon key={key} className="weatherIcon icon"/>;
        case "09n":
            return <NightShowerRainIcon key={key} className="weatherIcon icon"/>;
        case "10d":
            return <RainIcon key={key} className="weatherIcon icon"/>;
        case "10n":
            return <NightRainIcon key={key} className="weatherIcon icon"/>;
        case "11d":
            return <ThunderstormIcon key={key} className="weatherIcon icon"/>;
        case "11n":
            return <NightThunderstormIcon key={key} className="weatherIcon icon"/>;
        case "13d":
            return <SnowIcon key={key} className="weatherIcon icon"/>;
        case "13n":
            return <NightSnowIcon key={key} className="weatherIcon icon"/>;
        case "50d":
            return <MistIcon key={key} className="weatherIcon icon"/>;
        case "50n":
            return <NightMistIcon key={key} className="weatherIcon icon"/>;
        default:
            return <span key={key}>?</span>;
    }
}

export function getWindDirectionIcon(direction, key) {
    return (
        <WindDirectionIcon
            key={key}
            className="windDirectionIcon icon"
            style={{transform: `rotateZ(${direction}deg)`}}
        />
    );
}

export function getProbabilityOfPrecipitationIcon(probabilityOfPrecipitation, key) {
    if (probabilityOfPrecipitation < 20) {
        return <ProbabilityLowIcon key={key} className="probabilityOfPrecipitationIcon icon"/>;
    }
    if (probabilityOfPrecipitation >= 20 && probabilityOfPrecipitation < 60) {
        return <ProbabilityMediumIcon key={key} className="probabilityOfPrecipitationIcon icon"/>;
    }
    if (probabilityOfPrecipitation >= 60) {
        return <ProbabilityHighIcon key={key} className="probabilityOfPrecipitationIcon icon"/>;
    }
    return <span key={key}>?</span>;
}

export function getRainIcon(rain, key) {
    if (rain < 0.1) {
        return <NoRainIcon key={key} className="rainIcon icon"/>;
    }
    if (rain >= 0.1 && rain < 0.4) {
        return <LightRainIcon key={key} className="rainIcon icon"/>;
    }
    if (rain >= 0.4 && rain < 0.6) {
        return <MediumRainIcon key={key} className="rainIcon icon"/>;
    }
    if (rain >= 0.6) {
        return <HeavyRainIcon key={key} className="rainIcon icon"/>;
    }
    return <span key={key}>?</span>;
}
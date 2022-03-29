import "./app.scss";

import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";

import CitySearchBar from "./components/citySearchBar/CitySearchBar";
import Home from "./components/home/Home";
import CitySelection from "./components/citySelection/CitySelection";
import FailedFetch from "./components/failedFetch/FailedFetch";
import WeatherForecastDisplay from "./components/weatherForecastDisplay/WeatherForecastDisplay";
import PrivacyFooter from "./components/privacyFooter/PrivacyFooter";
import PrivacyStatement from "./components/privacyStatement/PrivacyStatement";
import SiteNotice from "./components/siteNotice/SiteNotice";
import ErrorPage from "./components/errorPage/ErrorPage";

import {MaxWindowInnerHeight} from "./utils";

function App() {
    // The maximal inner height of the window, being used as the minHeight of the App to prevent a resize of the
    // components when the Android keyboard is opened - which leads to a smaller inner height.
    const maxWindowInnerHeight = MaxWindowInnerHeight();

    const [cityName, updateCityName] = useState("");
    const [showCookieBanner, setShowCookieBanner] = useState(true);
    const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);


    return (
        <div className="appBackground" style={{minHeight : `${maxWindowInnerHeight}px`}}>
            <CitySearchBar
                cityName={cityName}
                updateCityName={updateCityName}
                setShowCookieBanner={setShowCookieBanner}
            />
            <div className={"appContentContainer " + (showCookieBanner && "showCookieBanner")}>
                <div className="appContent">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/city_selection/cityname=:cityName" element={<CitySelection updateCityName={updateCityName}/>}/>
                        <Route path="/failed_fetch" element={<FailedFetch/>}/>
                        <Route path="/forecast/lat=:lat&lon=:lon&cityname=:cityName" element={<WeatherForecastDisplay updateCityName={updateCityName} areCookiesAccepted={areCookiesAccepted}/>}/>

                        <Route path="/privacy_statement" element={<PrivacyStatement showCookieBanner={showCookieBanner} setAreCookiesAccepted={setAreCookiesAccepted}/>}/>
                        <Route path="/site_notice" element={<SiteNotice showCookieBanner={showCookieBanner}/>}/>

                        <Route path="/*" element={<ErrorPage/>}/>
                    </Routes>
                </div>
            </div>
            <PrivacyFooter
                showCookieBanner={showCookieBanner}
                setShowCookieBanner={setShowCookieBanner}
                setAreCookiesAccepted={setAreCookiesAccepted}
            />
        </div>
    );
}

export default App;

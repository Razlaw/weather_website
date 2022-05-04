import "./app.scss";

import React, {useEffect, useState} from "react";
import {useCookies} from 'react-cookie';
import {Route, Routes, useNavigate} from "react-router-dom";

import CitySearchBar from "./components/citySearchBar/CitySearchBar";
import PrivacyFooter from "./components/privacyFooter/PrivacyFooter";

import Home from "./pages/home/Home";
import CitySelection from "./pages/citySelection/CitySelection";
import FailedFetch from "./pages/failedFetch/FailedFetch";
import WeatherForecastDisplay from "./pages/weatherForecastDisplay/WeatherForecastDisplay";
import PrivacyStatement from "./pages/privacyStatement/PrivacyStatement";
import Licenses from "./pages/licenses/Licenses";
import SiteNotice from "./pages/siteNotice/SiteNotice";
import ErrorPage from "./pages/errorPage/ErrorPage";

import {MaxWindowInnerHeight} from "./utils/utils";

function App() {
    // The maximal inner height of the window, being used as the minHeight of the App to prevent a resize of the
    // components when the Android keyboard is opened - which leads to a smaller inner height.
    const maxWindowInnerHeight = MaxWindowInnerHeight();

    const [cookies, setCookie, removeCookie] = useCookies([]);

    const [cityName, updateCityName] = useState("");
    const [showCookieBanner, setShowCookieBanner] = useState(cookies.areCookiesAccepted === undefined);
    const [areCookiesAccepted, setAreCookiesAccepted] = useState(cookies.areCookiesAccepted === "true");

    // If cookies were set before, navigate to previously viewed weather forecast
    const navigate = useNavigate();
    useEffect(() => {
        if (cookies.selectedCityName !== undefined) {
            navigate("/forecast/lat=" + cookies.lat + "&lon=" + cookies.lon + "&cityname=" + cookies.selectedCityName);
        }
    }, []);

    return (
        <div className="appBackground" style={{minHeight: `${maxWindowInnerHeight}px`}}>
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
                        <Route path="/licenses" element={<Licenses showCookieBanner={showCookieBanner}/>}/>
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

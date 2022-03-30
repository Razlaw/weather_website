import "./privacyStatement.scss";
import React from "react";

export default function PrivacyStatement({showCookieBanner, removeCookie, setAreCookiesAccepted}) {
    function removeAllCookies() {
        removeCookie("selectedCityName", {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
        removeCookie("lat", {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
        removeCookie("lon", {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
        removeCookie("areCookiesAccepted", {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
        setAreCookiesAccepted(false);
    }

    return (
        <div className="privacyStatementContainer">
            <div className={"contentContainer " + (showCookieBanner && "showCookieBanner")}>
                <div className="removeCookiesButton" onClick={removeAllCookies}>
                    <h1>Lösche Cookies</h1>
                </div>
                <h1>Datenschutzerklärung</h1>
                
            </div>
        </div>
    );
}
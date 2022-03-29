import "./privacyStatement.scss";
import React from "react";

export default function PrivacyStatement({showCookieBanner, setAreCookiesAccepted}) {
    function removeAllCookies() {
        setAreCookiesAccepted(false);
    }

    return (
        <div className="privacyStatementContainer">
            <div className={"contentContainer " + (showCookieBanner && "showCookieBanner")}>
                <div className="removeCookiesButton" onClick={removeAllCookies}>
                    <h1>Remove cookies</h1>
                </div>
                <h1>Datenschutzerklärung</h1>
                
            </div>
        </div>
    );
}
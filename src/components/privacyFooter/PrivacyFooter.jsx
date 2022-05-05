import "./privacyFooter.scss";

import React from "react";

import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

export default function PrivacyFooter({showCookieBanner, setShowCookieBanner, setAreCookiesAccepted}) {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);

    function onDecline() {
        setShowCookieBanner(false);
        setAreCookiesAccepted(false);
    }

    function onAccept() {
        setShowCookieBanner(false);
        setAreCookiesAccepted(true);
        setCookie('areCookiesAccepted', "true", {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
    }

    return (
        <div className={"privacyFooterContainer " + (showCookieBanner && "showCookieBanner")}>
            <div className="privacyFooterContent">
                <div className="cookieBannerContainer">
                    <div className="cookieBanner">
                        <p className="cookieBannerText">
                            Solltest du die Nutzung von Cookies zulassen, kannst du deine Städte in einer Liste von
                            Favoriten speichern.<br/>
                            Zusätzlich wird dir dann bei deiner Rückkehr das Wetter deiner zuletzt gesuchten Stadt
                            angezeigt.<br/>
                            Sollen deine Favoriten und die letzte Suchanfrage als Cookies auf deinem Gerät
                            gespeichert werden?
                        </p>
                    </div>
                    <div className="cookieButtonsContainer">
                        <div
                            className={"cookieButton declineButton " + (showCookieBanner && "showCookieBanner")}
                            onClick={onDecline}
                        >
                            <p>Cookies ablehnen</p>
                        </div>
                        <div
                            className={"cookieButton acceptButton " + (showCookieBanner && "showCookieBanner")}
                            onClick={onAccept}
                        >
                            <p>Cookies zulassen</p>
                        </div>
                    </div>
                </div>
                <div className="linkToPrivacyStatementContainer">
                    <div className="linkToPrivacyStatement" onClick={() => navigate("/privacy_statement")}>
                        Datenschutz
                    </div>
                    <div className="linkToLicenses" onClick={() => navigate("/licenses")}>
                        Lizenzen
                    </div>
                    <div className="linkToSiteNotice" onClick={() => navigate("/site_notice")}>
                        Impressum
                    </div>
                </div>
            </div>
        </div>
    );
}
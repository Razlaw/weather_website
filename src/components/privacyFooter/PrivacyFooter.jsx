import "./privacyFooter.scss";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function PrivacyFooter({showCookieBanner, setShowCookieBanner, setAreCookiesAccepted, setCookie}) {
    const navigate = useNavigate();

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
                            Soll deine letzte Suchanfrage in den Cookies auf deinem Gerät gespeichert werden? Dadurch
                            musst du nicht erneut suchen, wenn du auf die Webseite zurückkehrst.<br/>
                            So kannst du das Wetter für deine Stadt einfacher regelmäßig nachsehen.
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
                    <div className="linkToSiteNotice" onClick={() => navigate("/site_notice")}>
                        Impressum
                    </div>
                </div>
            </div>
        </div>
    );
}
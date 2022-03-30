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
                    <div
                        className="cookieDeclineButton"
                        onClick={onDecline}
                    >
                        Cookies ablehnen
                    </div>
                    <div
                        className="cookieAcceptButton"
                        onClick={onAccept}
                    >
                        Cookies zulassen
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
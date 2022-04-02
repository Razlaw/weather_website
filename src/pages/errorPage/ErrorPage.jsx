import "./errorPage.scss";

import React from "react";
import {useLocation} from "react-router-dom";

export default function ErrorPage() {
    const location = useLocation();

    return (
        <div className="errorPage">
            <h1>Fehler.<br/>Dieser Pfad existiert nicht.</h1>
            <span>
                Der angeforderte Pfad ist {location.pathname}.
            </span>
        </div>
    );
}
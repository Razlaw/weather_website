import "./errorPage.scss";
import React from "react";
import {useLocation} from "react-router-dom";

export default function ErrorPage() {
    const location = useLocation();

    return (
        <div className="errorPage">
            <h1>Error.<br/>Path does not exist.</h1>
            <span>
                Requested path is {location.pathname}.
            </span>
        </div>
    );
}
import "./failedFetch.scss";
import React from "react";

export default function FailedFetch() {
    return (
        <div className="failedFetch">
            <h1>Failed to get weather data.<br/>Try another city.</h1>
        </div>
    );
}
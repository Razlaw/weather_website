import "./loadingAnimation.scss";

import React from "react";

export default function LoadingAnimation() {
    return (
        <div className="loadingScreen">
            <div className="loadingScreenContent">
                <h1>Lade Daten</h1>
                <div className="loadingAnimation">
                    <span className="dot" id="first"></span>
                    <span className="dot" id="second"></span>
                    <span className="dot" id="third"></span>
                </div>
            </div>
        </div>
    );
}
import "./licenses.scss";
import React from "react";

export default function Licenses({showCookieBanner}) {
    return (
        <div className="licensesContainer">
            <div className={"contentContainer " + (showCookieBanner && "showCookieBanner")}>
                <h1>Lizenzen</h1>
                <p>
                    Diese Website und der dazugehörige Code sind lizensiert unter der
                    <a href="https://creativecommons.org/licenses/by/4.0/"> Creative Commons Attribution 4.0
                        International (CC BY 4.0)</a> Lizenz.<br/>
                    Die Lizenzen der benutzten Pakete, Dienste und Daten sind im Folgenden aufgelistet. Herzlichen Dank
                    an alle aus der Liste und alle, die auch in dieser Liste sein sollten.
                </p>
                <p>
                    <a href="https://creativecommons.org/licenses/by-sa/4.0/"> <strong>Creative Commons
                        Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)</strong></a>
                </p>
                <ul>
                    <li>Die dargestellten Wetterdaten werden durch
                        <a href="https://openweathermap.org"> OpenWeather&trade;</a> unter dieser Lizenz bereitgestellt
                    </li>
                </ul>
                <p>
                    <a href="https://opendatacommons.org/licenses/odbl/"><strong>Open Data Commons Open Database License
                        (ODbL)</strong></a>
                </p>
                <ul>
                    <li>Daten und Datenbank von <a href="https://openweathermap.org"> OpenWeather&trade;</a> sind offen
                        und unter dieser Lizenz bereitgestellt
                    </li>
                </ul>

                <p>
                    <a href="https://www.apache.org/licenses/LICENSE-2.0"><strong>Apache License, Version
                        2.0</strong></a>
                </p>
                <ul>
                    <li><a href="https://fonts.google.com/specimen/Roboto#standard-styles">Google Font Roboto</a></li>
                </ul>
                <p>
                    <a href="https://opensource.org/licenses/MIT"><strong>MIT License</strong></a>
                </p>
                <ul>
                    <li><a href="https://github.com/axios/axios/blob/master/LICENSE">axios</a></li>
                    <li><a href="https://github.com/moment/moment/blob/develop/LICENSE">moment</a></li>
                    <li><a href="https://github.com/sass/node-sass/blob/master/LICENSE">node-sass</a></li>
                    <li><a href="https://github.com/facebook/react/blob/main/LICENSE">react</a></li>
                    <li><a href="https://github.com/reactivestack/cookies/blob/master/LICENSE">react-cookie</a></li>
                    <li><a href="https://github.com/facebook/react/blob/main/LICENSE">react-dom</a></li>
                    <li><a href="https://github.com/Yummygum/react-flagpack/blob/main/LICENSE">react-flagpack</a></li>
                    <li><a href="https://github.com/remix-run/react-router/blob/main/LICENSE.md">react-router-dom</a>
                    </li>
                    <li><a
                        href="https://github.com/rafgraph/react-router-hash-link/blob/main/LICENSE">react-router-hash-link</a>
                    </li>
                    <li><a href="https://github.com/facebook/create-react-app/blob/main/LICENSE">react-scripts</a></li>
                    <li><a
                        href="https://github.com/Semantic-Org/Semantic-UI-CSS/blob/master/LICENSE">semantic-ui-css</a>
                    </li>
                    <li><a
                        href="https://github.com/Semantic-Org/Semantic-UI-React/blob/master/LICENSE.md">semantic-ui-react</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
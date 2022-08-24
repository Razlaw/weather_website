import "@fontsource/roboto";
import "@fontsource/lato/700.css";
import "@fontsource/lato/400.css";
import "./semantic-ui-min-wo-google.css";

import ReactDOM from "react-dom";

import {CookiesProvider} from 'react-cookie';
import {HashRouter} from "react-router-dom";

import App from "./App";

ReactDOM.render(
    <CookiesProvider>
        <HashRouter>
            <App/>
        </HashRouter>
    </CookiesProvider>,
    document.getElementById("root")
);

import "@fontsource/roboto"
import 'semantic-ui-css/semantic.min.css';

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

import "@fontsource/roboto"
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import {HashRouter} from "react-router-dom";
import {CookiesProvider} from 'react-cookie';

import App from "./App";

ReactDOM.render(
    <CookiesProvider>
        <HashRouter>
            <App/>
        </HashRouter>
    </CookiesProvider>,
    document.getElementById("root")
);

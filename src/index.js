import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import {CookiesProvider} from 'react-cookie';

import App from "./App";

ReactDOM.render(
    <CookiesProvider>
        <App/>
    </CookiesProvider>,
    document.getElementById("root")
);

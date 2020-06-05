/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";

import "./css/style.css";

// import HelloWorld from "./components/hello";
import Leaflet from "./components/leaflet";

ReactDOM.render(<Leaflet />, document.querySelector("#app"));

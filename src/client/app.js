/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";
import "../css/style.css";
import "../css/welcome.css";

import "./css/style.css";

import Index from "./components/home/index";

ReactDOM.render(<Index />, document.querySelector("#app"));

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
import "../css/leaderboard.css";
import "../css/gamelog.css";

import HelloWorld from "./components/hello";

ReactDOM.render(<HelloWorld />, document.querySelector("#app"));

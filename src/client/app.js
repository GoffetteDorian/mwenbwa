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
import "../css/modal.css";

import "./css/style.css";

//import Welcome from "./components/home/welcome";
//import Design from "../client/components/design";
import Map from "../client/components/map/leaflet";
//import Clock from "../client/components/timerNow";
//import Profil from "../profil";
// import Inscription from "../inscription";
// import Leaflet from "./components/map/leaflet";
// import Login from "./components/home/login";

ReactDOM.render(<Map />, document.querySelector("#app"));

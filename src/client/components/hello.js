/* eslint-disable no-unused-vars */
/* becodeorg/mwenbwa
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import Slide from "./slide";
import Timers from "./timers";
import ReceiveLoseLeaves from "./receiveLoseLeaves";
import ColorPicker from "./color-picker";
import Leaderboard from "./leaderboard";
import Welcome from "./welcome";

const HelloWorld = () => (
    <div>
        <div>
            <Leaderboard />
            {/* <ColorPicker /> */}
            {/* <Timers /> */}
        </div>
        <div>{/* <ReceiveLoseLeaves /> */}</div>
    </div>
);

export default HelloWorld;

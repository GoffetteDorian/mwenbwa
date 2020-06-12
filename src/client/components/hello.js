/* becodeorg/mwenbwa
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
// eslint-disable-next-line no-unused-vars
import Slide from "./slide";
import Timers from "./timers";
// import ReceiveLoseLeaves from "./receiveLoseLeaves";
import ColorPicker from "./color-picker";
// import Welcome from "./welcome";

const HelloWorld = () => (
    <div>
        <div>
            {/* <Welcome /> */}
            <ColorPicker />
            <Timers />
        </div>
    </div>
);

export default HelloWorld;

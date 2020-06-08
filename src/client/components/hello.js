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

const HelloWorld = () => (
    <div>
        <div>
            <Timers />
        </div>
        <div>
            <ReceiveLoseLeaves />
        </div>
        <div>
            <Slide />
        </div>
    </div>
);

export default HelloWorld;

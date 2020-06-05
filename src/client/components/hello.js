/* becodeorg/mwenbwa
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
// import Slide from "./slide";
import treeIcon from "../../images/tree-2.png";
import leafIcon from "../../images/leaf.png";
import menuIcon from "../../images/open-menu.png";
import gearIcon from "../../images/gear.png";

const HelloWorld = () => (
    <div>
        <div className={"nav-main"}>
            <div className={"icons-container"}>
                <img className={"icons"} src={treeIcon} />
                <span className={"counter"}>{12}</span>
                <img className={"icons"} src={leafIcon} />
                <span className={"counter"}>{232}</span>
            </div>

            <div className={"timers"}>
                <span className={"timer"}> {59} </span>
                <span className={"timer"}> {15} </span>
            </div>

            <div className={"test"}>
                <img className={"gearIcon"} src={gearIcon} />
                <img className={"menuIcon"} src={menuIcon} />
            </div>
        </div>

        {/* <div>
            <Slide />
        </div> */}
    </div>
);

export default HelloWorld;

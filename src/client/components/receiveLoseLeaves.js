// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import treeIcon from "../../images/tree-2.png";
import leafIcon from "../../images/leaf.png";

const ReceiveLoseLeaves = () => (
    <div className={"icons-container"}>
        <img className={"icons"} src={treeIcon} />
        {/*eslint-disable-next-line no-use-before-define  */}
        <span className={"counter"}>{trees}</span>
        <img className={"icons"} src={leafIcon} />
        {/* eslint-disable-next-line no-use-before-define */}
        <span className={"counter"}>{leaves}</span>
    </div>
);

let leaves = 100;
// eslint-disable-next-line prefer-const
let trees = 20;

function receiveLeaves() {
    leaves = leaves + trees;
    // eslint-disable-next-line no-console
    console.log(`receiving ${leaves} leaves`);

    // eslint-disable-next-line no-use-before-define
    fifteenMinutes();
}

function fifteenMinutes() {
    setTimeout(receiveLeaves, 11000);
}
fifteenMinutes();

function loseLeaves() {
    leaves = leaves / 2;
    leaves = Math.round(leaves);
    // eslint-disable-next-line no-console
    console.log(leaves);
    // eslint-disable-next-line no-use-before-define
    hour();
}

function hour() {
    setTimeout(loseLeaves, 20000);
}
hour();

export default ReceiveLoseLeaves;

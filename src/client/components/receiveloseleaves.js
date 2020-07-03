// eslint-disable-next-line unicorn/filename-case
/* eslint-disable no-use-before-define */
import React, {useState} from "react";
import imageFeuille from "../../images/leafG.png";
import imageArbre from "../../images/treeG.png";

const ReceiveLoseLeaves = ({user}) => {
    const [leaves, setLeaves] = useState(user.leaves);
    const [trees] = useState(user.trees);

    // eslint-disable-next-line prefer-const

    function receiveLeaves() {
        setLeaves(leaves + trees);
        // eslint-disable-next-line no-console
        // eslint-disable-next-line no-use-before-define
        fifteenMinutes();
    }

    // for 15m you should use 900000

    function fifteenMinutes() {
        // console.log(leaves);
        setTimeout(receiveLeaves, 3000);
    }
    // fifteenMinutes();

    function loseLeaves() {
        setLeaves(leaves / 2);
        setLeaves(Math.round(leaves));
        // eslint-disable-next-line no-console
        // eslint-disable-next-line no-use-before-define
        hour();
    }

    // for hour you should use 3600000
    function hour() {
        setTimeout(loseLeaves, 5000);
    }
    // hour();

    return (
        <div id={"divCercle"}>
            <div id={"cercleTree"}>
                <img
                    id={"leaf2"}
                    src={imageArbre}
                    alt={"tree"}
                    height={"25px"}
                    width={"25px"}
                />
                <div id={"rectangleLeaf"}>
                    <span id={"number-leaf"}>{leaves}</span>
                </div>
            </div>
            <div id={"cercleLeaf"}>
                <img
                    id={"tree"}
                    src={imageFeuille}
                    alt={"tree"}
                    height={"25px"}
                    width={"25px"}
                />
                <div id={"rectangleLeaf"}>
                    <span id={"number-leaf"}>{trees}</span>
                </div>
            </div>
        </div>
    );
};

export default ReceiveLoseLeaves;

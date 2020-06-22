import * as React from "react";

const Gamelog = () => (
    <div>
        <div className={"gamelog-container"}>
            <div className={"gamelog-header"}>
                <h2>{"Gamelog"}</h2>
            </div>
            <div className={"gamelog-info"}>
                <div className={"gamelog-player"}>
                    <h4>{"Player"}</h4>
                </div>
                <div className={"gamelog-action"}>
                    <h4>{"Action"}</h4>
                </div>
            </div>
            <div className={"gamelog-user"}>
                <div className={"gamlelog-name"}>
                    <p>{" Example "}</p>
                </div>
                <div className={"gamelog-user-actions"}>
                    <p> {"Example bought a tree"} </p>
                </div>
            </div>
            <div className={"gamelog-user"}>
                <div className={"gamlelog-name"}>
                    <p>{" Example 2 "}</p>
                </div>
                <div className={"gamelog-user-actions"}>
                    <p> {"Example 2 bought 5 trees"} </p>
                </div>
            </div>
        </div>
    </div>
);

export default Gamelog;

import * as React from "react";

const Leaderboard = () => (
    <div className={"l-container"}>
        <div>
            <div className={"leadheader"}>
                <h2>{"Leaderboard"}</h2>
            </div>
            <div className={"score-container"}>
                <div className={"l-place"}>
                    <h4>{"#"}</h4>
                </div>
                <div className={"l-name"}>
                    <h4>{"Name"}</h4>
                </div>
                <div className={"l-score"}>
                    <h4>{"Score"}</h4>
                </div>
            </div>
        </div>
        <div className={"l-users"}>
            <div className={""}>
                <p> {"1"} </p>
            </div>
            <div className={""}>
                <p> {"Example"} </p>
            </div>
            <div className={""}>
                <p> {"6231"} </p>
            </div>
        </div>
        <div className={"l-users"}>
            <div className={""}>
                <p> {"2"} </p>
            </div>
            <div className={""}>
                <p> {"Example"} </p>
            </div>
            <div className={""}>
                <p> {"5233"} </p>
            </div>
        </div>
        <div className={"l-users"}>
            <div className={""}>
                <p> {"3"} </p>
            </div>
            <div className={""}>
                <p> {"Example"} </p>
            </div>
            <div className={""}>
                <p> {"4311"} </p>
            </div>
        </div>
    </div>
);

export default Leaderboard;

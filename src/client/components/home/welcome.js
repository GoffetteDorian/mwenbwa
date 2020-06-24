/* eslint-disable react/button-has-type */

import * as React from "react";

const Welcome = () => (
    <div className={"mwenbwa-main"}>
        <div className={"mwenbwa-body"}>
            <div className={"mwenbwa-container"}>
                <div className={"mwenbwa-name"}>
                    <h1 className={"mwenbwa"}>{" MWENBWA"}</h1>
                    <h2> {"liége"} </h2>
                </div>
                <div className={"mwenbwa-button"}>
                    <button className={"mwenbwa-signin"}>{" Sign In "}</button>
                    <button>{" Sign Up "}</button>
                </div>
            </div>
        </div>
    </div>
);

export default Welcome;

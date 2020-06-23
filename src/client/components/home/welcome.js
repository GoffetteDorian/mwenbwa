/* eslint-disable react/button-has-type */

import * as React from "react";
<<<<<<< HEAD:src/client/components/home/welcome.js
import About from "../../../images/about.png";
import Mwenbwatree from "../../../images/tree-3.png";

const Welcome = () => (
    <div className={"mwenbwa-main"}>
        <div className={"mwenbwa-container"}>
            <div className={"mwenbwa-name"}>
                <h1 className={"mwenbwa"}> MWENBWA</h1>
                <h2> liège </h2>
            </div>
            <div className={"mwenbwa-button"}>
                <button className={"mwenbwa-signin"}> Sign In </button>
                <button> Sign Up </button>
=======

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
>>>>>>> ajouts-mustafa:src/client/components/welcome.js
            </div>
        </div>
    </div>
);

export default Welcome;

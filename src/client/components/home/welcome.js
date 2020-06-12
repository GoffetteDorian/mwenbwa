/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-literals */
import * as React from "react";
import About from "../../../images/about.png";
import Mwenbwatree from "../../../images/tree-3.png";

const Welcome = () => (
    <div className={"mwenbwa-main"}>
        <div className={"mwenbwa-container"}>
            <div className={"mwenbwa-name"}>
                <h1 className={"mwenbwa"}> MWENBWA</h1>
                <h2> liége </h2>
            </div>
            <div className={"mwenbwa-button"}>
                <button className={"mwenbwa-signin"}> Sign In </button>
                <button> Sign Up </button>
            </div>
            <img className={"mwenbwa-about"} src={About} />
            <img className={"mwenbwa-tree"} src={Mwenbwatree} />
        </div>
    </div>
);

export default Welcome;

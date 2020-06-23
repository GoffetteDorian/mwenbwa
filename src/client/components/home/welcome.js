/* eslint-disable react/button-has-type */

import * as React from "react";
import {Link} from "react-router-dom";
const Welcome = () => (
    <div className={"mwenbwa-main"} style={{zIndex: 3}}>
        <div className={"mwenbwa-body"}>
            <div className={"mwenbwa-container"}>
                <div className={"mwenbwa-name"}>
                    <h1 className={"mwenbwa"}>{" MWENBWA"}</h1>
                    <h2> {"liége"} </h2>
                </div>
                <div className={"mwenbwa-button"}>
                    <Link to={"/login"}>
                        <button className={"mwenbwa-signin"}>
                            {" Sign In "}
                        </button>
                    </Link>
                    <button>{" Sign Up "}</button>
                </div>
            </div>
        </div>
    </div>
);

export default Welcome;

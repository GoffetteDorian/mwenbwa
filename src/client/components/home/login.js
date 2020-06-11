import React from "react";
import Signin from "./signin";
// import Signup from "./signup";

const Login = () => (
    <div className={"container"}>
        <div className={"columns is-centered"}>
            <div className={"column is-4-desktop is-3-widescreen"}>
                <Signin />
            </div>
        </div>
    </div>
);

export default Login;

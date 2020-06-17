import React from "react";
import Signin from "./signin";
import Signup from "./signup";

import {signup, signin} from "../../services/auth-service";

const Login = () => (
    <div className={"container"}>
        <div className={"columns is-centered"}>
            <div className={"column is-4-desktop is-3-widescreen"}>
                <Signup register={signup} />
            </div>
            <div className={"column is-4-desktop is-3-widescreen"}>
                <Signin login={signin} />
            </div>
        </div>
    </div>
);

export default Login;

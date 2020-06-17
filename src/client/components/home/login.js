import React from "react";
// import Signin from "./signin";
import Signup from "./signup";

import {register} from "../../services/auth-service";

const Login = () => (
    <div className={"container"}>
        <div className={"columns is-centered"}>
            <div className={"column is-4-desktop is-3-widescreen"}>
                <Signup register={register} />
            </div>
        </div>
    </div>
);

export default Login;

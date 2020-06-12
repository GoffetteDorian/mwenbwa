import React from "react";

const Signin = () => (
    <form action={""} className={"box"}>
        <div className={"field"}>
            <label className={"label"}>{"Email"}</label>
            <div className={"control has-icons-left"}>
                <input
                    type={"email"}
                    placeholder={"e.g. email@gmail.com"}
                    className={"input"}
                    required
                />
                <span className={"icon is-small is-left"}>
                    <i className={"fa fa-envelope"} />
                </span>
            </div>
        </div>
        <div className={"field"}>
            <label className={"label"}>{"Password"}</label>
            <div className={"control has-icons-left"}>
                <input
                    type={"password"}
                    placeholder={"*******"}
                    className={"input"}
                    required
                />
                <span className={"icon is-small is-left"}>
                    <i className={"fa fa-lock"} />
                </span>
            </div>
        </div>
        <div className={"field"}>
            <label className={"checkbox"}>
                <input type={"checkbox"} />
                {" Remember me"}
            </label>
        </div>
        <div className={"field"} style={{textAlign: "center"}}>
            <input
                type={"submit"}
                className={"button is-success"}
                value={"Login"}
            />
        </div>
    </form>
);

export default Signin;

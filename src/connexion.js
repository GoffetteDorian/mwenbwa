/* eslint-disable react/button-has-type */
import React, {Component} from "react";

class Connexion extends Component {
    render() {
        return (
            <div className={"login-form"}>
                <form
                    action={"/examples/actions/confirmation.php"}
                    method={"post"}>
                    <h2 className={"text-center"}>{"Sign in"}</h2>
                    <div className={"form-group"}>
                        <div className={"input-group"}>
                            <span className={"input-group-addon"}>
                                <i className={"fa fa-user"} />
                            </span>
                            <input
                                type={"text"}
                                className={"form-control"}
                                name={"username"}
                                placeholder={"Username"}
                                required={"required"}
                            />
                        </div>
                    </div>
                    <div className={"form-group"}>
                        <div className={"input-group"}>
                            <span className={"input-group-addon"}>
                                <i className={"fa fa-lock"} />
                            </span>
                            <input
                                type={"password"}
                                className={"form-control"}
                                name={"password"}
                                placeholder={"Password"}
                                required={"required"}
                            />
                        </div>
                    </div>
                    <div className={"form-group"}>
                        <button
                            type={"submit"}
                            className={"btn btn-primary login-btn btn-block"}>
                            {"Sign in"}
                        </button>
                    </div>
                    <div className={"clearfix"}>
                        <label className={"pull-left checkbox-inline"}>
                            <input type={"checkbox"} /> {"Remember me"}
                        </label>
                        <a href={"#"} className={"pull-right"}>
                            {"Forgot Password?"}
                        </a>
                    </div>
                    <div className={"or-seperator"}>
                        <i>{"or"}</i>
                    </div>
                    <p className={"text-center"}>
                        {"Login with your social media account"}
                    </p>
                    <div className={"text-center social-btn"}>
                        <a href={"#"} className={"btn btn-primary"}>
                            <i className={"fa fa-facebook"} />
                            &nbsp; {"Facebook"}
                        </a>
                        <a href={"#"} className={"btn btn-info"}>
                            <i className={"fa fa-twitter"} />
                            &nbsp; {"Twitter"}
                        </a>
                        <a href={"#"} className={"btn btn-danger"}>
                            <i className={"fa fa-google"} />
                            &nbsp; {"Google"}
                        </a>
                    </div>
                    <p className={"text-center text-muted small"}>
                        {"Don't have an account?"}{" "}
                        <a href={"#"}>{"Sign up here!"}</a>
                    </p>
                </form>
            </div>
        );
    }
}

export default Connexion;

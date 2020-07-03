import React, {useState} from "react";
import {signin} from "../../services/auth-service";

const Signin = () => {
    const [values, setValues] = useState({email: "", password: ""});
    const handleSubmit = event => {
        event.preventDefault();
        const {email, password} = values;
        if (!email || !password) {
            return;
        }
        signin(values)
            .then(() => {
                window.location.replace("/");
            })
            .catch(error => {
                console.log(error);
            });
    };
    const handleChange = event => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    };

    return (
        <div className={"signin-container"}>
            <form onSubmit={handleSubmit} className={"box"}>
                <div className={"field"}>
                    <label className={"label"}>{"Email"}</label>
                    <div className={"control has-icons-left"}>
                        <input
                            type={"email"}
                            placeholder={"e.g. email@gmail.com"}
                            className={"input"}
                            name={"email"}
                            onChange={handleChange}
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
                            name={"password"}
                            onChange={handleChange}
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
        </div>
    );
};
export default Signin;

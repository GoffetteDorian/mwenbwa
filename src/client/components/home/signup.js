import React, {useState} from "react";
import {GithubPicker} from "react-color";

const Signup = ({register, login}) => {
    const [values, setValues] = useState({
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
        color: "",
    });

    const handleSubmit = event => {
        event.preventDefault();
        const {email, username, password, passwordConfirm, color} = values;
        if (
            !email ||
            !username ||
            !password ||
            !passwordConfirm ||
            !color ||
            password !== passwordConfirm
        ) {
            return;
        }
        register(values)
            .then(() => {
                console.log("Register ok");
            })
            .then(() => {
                login({email, password}).then(
                    () => {
                        window.location.reload();
                        console.log("Login ok");
                    },
                    err => console.log(err),
                );
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    };

    const handleChangeComplete = color => {
        setValues({...values, color: color.hex});
    };

    // console.log(values);
    return (
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
                <label className={"label"}>{"Username"}</label>
                <div className={"control has-icons-left"}>
                    <input
                        type={"username"}
                        placeholder={"e.g. Azhro"}
                        className={"input"}
                        name={"username"}
                        onChange={handleChange}
                        required
                    />
                    <span className={"icon is-small is-left"}>
                        <i className={"fas fa-user"} />
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
                        // autoComplete={"new-password"}
                    />
                    <span className={"icon is-small is-left"}>
                        <i className={"fa fa-lock"} />
                    </span>
                </div>
            </div>
            <div className={"field"}>
                <label className={"label"}>{"Confirm password"}</label>
                <div className={"control has-icons-left"}>
                    <input
                        type={"password"}
                        placeholder={"*******"}
                        className={"input"}
                        name={"passwordConfirm"}
                        onChange={handleChange}
                        required
                        // autoComplete={"new-password"}
                    />
                    <span className={"icon is-small is-left"}>
                        <i className={"fa fa-lock"} />
                    </span>
                </div>
            </div>
            <div className={"field"}>
                <label className={"label"}>{"Color"}</label>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}>
                    <GithubPicker
                        width={212}
                        triangle={"hide"}
                        onChangeComplete={handleChangeComplete}
                    />
                </div>
            </div>

            <div className={"field"} style={{textAlign: "center"}}>
                <input
                    type={"submit"}
                    className={"button is-success"}
                    value={"Register"}
                />
            </div>
        </form>
    );
};

export default Signup;

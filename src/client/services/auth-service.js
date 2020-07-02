import axios from "axios";

const URL = "http://localhost/api/auth/";

export const signup = ({
    email,
    username,
    password,
    color,
    role = "user",
    leaves,
    trees,
}) =>
    axios.post(`${URL}signup`, {
        email,
        username,
        password,
        color,
        role,
        leaves,
        trees,
    });

export const signin = ({email, password}) =>
    axios
        .post(`${URL}signin`, {
            email,
            password,
        })
        .then(res => {
            localStorage.setItem(
                "user",
                JSON.stringify({
                    token: res.data.token,
                    leaves: res.data.leaves,
                    trees: res.data.trees,
                    color: res.data.color,
                }),
            );
        });

export const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    }
    return null;
};

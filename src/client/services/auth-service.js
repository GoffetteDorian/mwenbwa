import axios from "axios";

export const signup = ({
    email,
    username,
    password,
    color,
    role = "user",
    leaves,
    trees,
}) =>
    axios.post(`/api/auth/signup`, {
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
        .post(`/api/auth/signin`, {
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

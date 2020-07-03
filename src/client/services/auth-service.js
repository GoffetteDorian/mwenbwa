import axios from "axios";

const {API_URL} = process.env;
console.log(API_URL);

export const signup = ({
    email,
    username,
    password,
    color,
    role = "user",
    leaves,
    trees,
}) =>
    axios.post(`${API_URL}/api/auth/signup`, {
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
        .post(`${API_URL}/api/auth/signin`, {
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

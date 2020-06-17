import axios from "axios";

const URL = "http://localhost/api/auth/";

export const signup = ({email, username, password, color, role = "user"}) =>
    axios.post(`${URL}signup`, {
        email,
        username,
        password,
        color,
        role,
    });

export const signin = ({email, password}) =>
    axios.post(`${URL}signin`, {
        email,
        password,
    });

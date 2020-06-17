import axios from "axios";

const URL = "http://localhost/api/auth/";

export const register = ({email, username, password, color, role = "user"}) => {
    console.log(email);
    return axios.post(`${URL}signup`, {
        email,
        username,
        password,
        color,
        role,
    });
};

import axios from "axios";

export const AuthService = {
    login,
};

function login() {
    const user = {
        email: "akun2@mig.id",
        password: "D08C8301",
    };
    return axios.post("https://mitramas-test.herokuapp.com/auth/login", user, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

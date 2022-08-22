import axios from "axios";
import { AuthService } from "../services/AuthService";

const axiosInstance = (url = "") => {
    const axiosConfig = axios.create({
        baseURL: url,
        headers: {
            "Content-Type": "application/json",
        },
    });

    axiosConfig.interceptors.request.use(
        async (config) => {
            const accessToken = localStorage.getItem("access_token");
            const accessTokenExpired = localStorage.getItem("expires_in");
            const currentTime = new Date().getTime() / 1000;

            if (accessToken) {
                if (accessTokenExpired <= currentTime) {
                    AuthService.login().then((res) => {
                        localStorage.setItem(
                            "access_token",
                            res.data.access_token
                        );
                        localStorage.setItem("expires_in", res.data.expires_in);
                    });
                }
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // axiosConfig.interceptors.response.use(
    //     (res) => {
    //         return res;
    //     },
    //     (error) => {
    //         // console.log(error);
    //         // if (error.response.status === 401) {
    //         //     AuthService.login().then((res) => {
    //         //         const { access_token, expires_in } = res.data;
    //         //         localStorage.setItem("access_token", access_token);
    //         //         localStorage.setItem("expires_in", expires_in);
    //         //     });
    //         // }
    //         if (error.response.data) return Promise.reject(error.response.data);
    //     }
    // );

    return axiosConfig;
};

export default axiosInstance;

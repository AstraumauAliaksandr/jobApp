import axios from "axios";
import getAccessToken from "./getAccessToken";

export const axiosPublic = axios.create({
  baseURL: "https://startup-summer-2023-proxy.onrender.com/2.0",
  headers: {
    "x-secret-key": "GEU4nvd3rej*jeh.eqp",
    "X-Api-App-Id":
      "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
  },
});

axiosPublic.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      getAccessToken().then(() => {
        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem(
          "access_token"
        )}`;
        return axiosPublic(originalRequest);
      });
    }

    return Promise.reject(error);
  }
);

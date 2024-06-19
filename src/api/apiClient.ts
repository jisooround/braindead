import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const persistData = JSON.parse(localStorage.getItem("recoil-persist"));
const token = persistData.authTokenState?.token;
export const apiClientWithAuth = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${token}`,
  },
});

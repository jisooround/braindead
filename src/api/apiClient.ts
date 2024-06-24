import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiClientWithAuth = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// add a request interceptor to inject token before each request
apiClientWithAuth.interceptors.request.use(
  (config) => {
    const persistData = JSON.parse(localStorage.getItem("recoil-persist"));
    const token = persistData?.authTokenState?.token;

    if (token) {
      config.headers.Authorization = `${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { apiClient, apiClientWithAuth };

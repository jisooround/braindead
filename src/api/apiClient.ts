import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// const token = JSON.parse(localStorage.getItem("recoil-persist")).authTokenState.token;

// export const apiClientWithAuth = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `${token}`,
//   },
// });

apiClient.interceptors.request.use(
  (config) => {
    try {
      const persistData = localStorage.getItem("recoil-persist");
      if (persistData) {
        const parsedData = JSON.parse(persistData);
        const token = parsedData.authTokenState?.token;
        if (token) {
          config.headers["Authorization"] = `${token}`;
        }
      }
    } catch (error) {
      console.error("Error parsing local storage data:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;

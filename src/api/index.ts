import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const token = localStorage.getItem("token");

export const createAccount = async (userData: { username: FormDataEntryValue | null; password: FormDataEntryValue | null }) => {
  try {
    const response = await apiClient.post("/api/account/", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const login = async (userData: { username: FormDataEntryValue | null; password: FormDataEntryValue | null }) => {
  try {
    const { data } = await apiClient.post("/api/account/login/", userData);
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

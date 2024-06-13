// src/api/api.ts
import { AuthenticationResponse, UserCredentials } from "../types/user";
import apiClient from "./apiClient";

export const createAccount = async (userData: UserCredentials): Promise<AuthenticationResponse> => {
  const response = await apiClient.post("/api/account/", userData);
  return response.data;
};

export const login = async (userData: UserCredentials): Promise<AuthenticationResponse> => {
  const { data } = await apiClient.post("/api/account/login/", userData);
  return data;
};

// src/api/api.ts
import { ResponseUserData, UserCredentials } from "../types/user";
import { apiClient, apiClientWithAuth } from "./apiClient";

export const createAccount = async (userData: UserCredentials): Promise<ResponseUserData> => {
  try {
    const response = await apiClient.post("/api/account/", userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const login = async (userData: UserCredentials): Promise<ResponseUserData> => {
  try {
    const { data } = await apiClient.post("/api/account/login/", userData);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const { data } = await apiClient.get("/api/products/");
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMyCart = async () => {
  try {
    const response = await apiClientWithAuth.get("/api/account/cart/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addCartItem = async (cartData) => {
  try {
    const { data } = await apiClientWithAuth.post("/api/account/cart/", cartData);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const patchCartItem = async (cartData) => {
  try {
    const { data } = await apiClientWithAuth.patch("/api/account/cart/", cartData);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteCartItem = async (id) => {
  try {
    const { data } = await apiClientWithAuth.delete(`/api/account/cart/${id}/`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

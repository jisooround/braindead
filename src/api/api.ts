// src/api/api.ts
import { DeleteCartItem } from "../types/cart";
import { ResponseUserData, UserCredentials } from "../types/user";
import { apiClient } from "./apiClient";

export const createAccount = async (userData: UserCredentials): Promise<ResponseUserData> => {
  const response = await apiClient.post("/api/account/", userData);
  return response.data;
};

export const login = async (userData: UserCredentials): Promise<ResponseUserData> => {
  const { data } = await apiClient.post("/api/account/login/", userData);
  return data;
};

export const getAllProducts = async () => {
  const { data } = await apiClient.get("/api/products/");
  return data;
};

export const getMyCart = async () => {
  const { data } = await apiClient.get("/api/account/cart/");
  return data;
};

export const addCartItem = async (cartData) => {
  const { data } = await apiClient.post("/api/account/cart/", cartData);
  return data;
};

export const deleteCartItem = async (deleteData) => {
  console.log("deleteCartItem", deleteData);
  const { data } = await apiClient.delete("/api/account/cart/", deleteData);
  return data;
};

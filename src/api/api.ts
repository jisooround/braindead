// src/api/api.ts
import { ResponseDetailData } from "../types/products";
import { ResponseUserData, ResponseUserMe, UserCredentials } from "../types/user";
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

export const getProductDetails = async (productId: number): Promise<ResponseDetailData> => {
  try {
    console.log("getProductDetails", productId);
    const { data } = await apiClient.get(`/api/products/${productId}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRecommended = async ({ size, excludes }) => {
  try {
    const { data } = await apiClient.get(`/api/products/recommended/?page_size=${size}&excludes=${excludes}`);
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

export const deleteCartItem = async (productId) => {
  try {
    const { data } = await apiClientWithAuth.delete(`/api/account/cart/${productId}/`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editUserMe = async (editUserData) => {
  try {
    const { data } = await apiClientWithAuth.put("/api/account/me/", editUserData);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserMe = async (): Promise<ResponseUserMe> => {
  try {
    const { data } = await apiClientWithAuth.get("/api/account/me/");
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const checkouts = async () => {
  try {
    const { data } = await apiClientWithAuth.post("/api/orders/checkout/");
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getOrderHistory = async () => {
  try {
    const { data } = await apiClientWithAuth.get("/api/orders/");
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const userPoint = async (userPointAddData) => {
  try {
    const { data } = await apiClientWithAuth.put("/api/account/point/", userPointAddData);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchProducts = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    console.log("api", queryString);
    const { data } = await apiClient.get(`/api/products/?${queryString}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProducts = async (categoryName) => {
  try {
    console.log("api", categoryName);
    const { data } = await apiClient.get(`/api/products/?category=${categoryName}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

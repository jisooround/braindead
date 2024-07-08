import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { apiClient } from "../apiClient";
import { jest, describe, beforeAll, afterEach, expect, it, beforeEach } from "@jest/globals";
import { createAccount, login, getAllProducts, getProductDetails, getRecommended, getMyCart, addCartItem, patchCartItem, deleteCartItem, editUserMe, getUserMe, checkouts, getOrderHistory, userPoint, searchProducts, getProducts } from "../api";
import { ResponseUserData, ResponseUserMe, UserCredentials } from "../../types/user";

describe("login", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(apiClient); // apiClient 인스턴스를 모킹합니다.
  });

  afterEach(() => {
    mock.restore();
  });
  //  회원가입 테스트 - 성공 케이스
  it("should return data when register is successful", async () => {
    const userData: UserCredentials = { username: "testuser", password: "password" };
    const response: ResponseUserData = {
      user: {
        address_1: "",
        address_2: "",
        city: "",
        company: "",
        country: "",
        email: "",
        id: 0,
        is_staff: false,
        last_login: "",
        name: "",
        phone: "",
        username: "",
        zipcode: "",
      },
      token: "token",
    };

    mock.onPost("/api/account/", userData).reply(200, response);

    const result = await createAccount(userData);
    expect(result).toEqual(response);
  });
  //  회원가입 테스트 - 실패 케이스
  it("should throw an error when register fails", async () => {
    const userData: UserCredentials = { username: null, password: "wrongpassword" };

    mock.onPost("/api/account/", userData).reply(500);

    await expect(createAccount(userData)).rejects.toThrow();
  });

  //  로그인 테스트 - 성공 케이스
  it("should return data when login is successful", async () => {
    const userData: UserCredentials = { username: "testuser", password: "password" };
    const response: ResponseUserData = {
      user: {
        address_1: "",
        address_2: "",
        city: "",
        company: "",
        country: "",
        email: "",
        id: 0,
        is_staff: false,
        last_login: "",
        name: "",
        phone: "",
        username: "",
        zipcode: "",
      },
      token: "token",
    };

    mock.onPost("/api/account/login/", userData).reply(200, response);

    const result = await login(userData);
    expect(result).toEqual(response);
  });

  //  로그인 테스트 - 실패 케이스
  it("should throw an error when login fails", async () => {
    const userData: UserCredentials = { username: null, password: "wrongpassword" };

    mock.onPost("/api/account/login/", userData).reply(500);

    await expect(login(userData)).rejects.toThrow();
  });
});

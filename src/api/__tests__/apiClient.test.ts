import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { beforeEach, describe, afterEach, expect, it } from "@jest/globals";
import { apiClient, apiClientWithAuth } from "../apiClient";

describe("apiClient", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(apiClient);
  });

  afterEach(() => {
    mock.restore();
  });

  it("should set baseURL correctly", () => {
    expect(apiClient.defaults.baseURL).toBe(process.env.VITE_API_BASE_URL);
  });

  it("should set Content-Type header correctly", () => {
    expect(apiClient.defaults.headers["Content-Type"]).toBe("application/json");
  });

  it("should perform a GET request", async () => {
    mock.onGet("/test").reply(200, { data: "test" });

    const response = await apiClient.get("/test");
    expect(response.data).toEqual({ data: "test" });
  });
});

describe("apiClientWithAuth", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(apiClientWithAuth);
    localStorage.setItem("recoil-persist", JSON.stringify({ authTokenState: { token: "test-token" } }));
  });

  afterEach(() => {
    mock.restore();
    localStorage.clear();
  });

  it("should set baseURL correctly", () => {
    expect(apiClientWithAuth.defaults.baseURL).toBe(process.env.VITE_API_BASE_URL);
  });

  it("should set Content-Type header correctly", () => {
    expect(apiClientWithAuth.defaults.headers["Content-Type"]).toBe("application/json");
  });

  it("should add Authorization header if token exists", async () => {
    mock.onGet("/auth-test").reply((config) => {
      expect(config.headers.Authorization).toBe("test-token");
      return [200, { data: "auth-test" }];
    });

    const response = await apiClientWithAuth.get("/auth-test");
    expect(response.data).toEqual({ data: "auth-test" });
  });

  it("should not add Authorization header if token does not exist", async () => {
    localStorage.clear();

    mock.onGet("/auth-test").reply((config) => {
      expect(config.headers.Authorization).toBeUndefined();
      return [200, { data: "no-auth-test" }];
    });

    const response = await apiClientWithAuth.get("/auth-test");
    expect(response.data).toEqual({ data: "no-auth-test" });
  });
});

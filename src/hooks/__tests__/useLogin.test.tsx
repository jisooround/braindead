import React, { act } from "react";
import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot } from "recoil";
import { render, screen, fireEvent } from "@testing-library/react";
import { jest, describe, beforeEach, afterEach, expect, it } from "@jest/globals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useLogin from "../useLogin";
import { login } from "../../api/api";
import { authTokenState } from "../../recoil/atoms/authAtom";
import { ResponseUserData, UserCredentials } from "../../types/user";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

jest.mock("../../api/api", () => ({
  login: jest.fn(),
}));

const queryClient = new QueryClient();

const Wrapper = ({ children }) => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </RecoilRoot>
);

const TestComponent = ({ onSubmit }) => {
  const { mutate, isSuccess, isError } = useLogin();

  React.useEffect(() => {
    if (isSuccess) {
      onSubmit("success");
    }
    if (isError) {
      onSubmit("error");
    }
  }, [isSuccess, isError, onSubmit]);

  return <button onClick={() => mutate({ username: "testuser", password: "password" })}>Submit</button>;
};

describe("useLogin", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    jest.clearAllMocks();
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it("should call login API and set auth state on success", async () => {
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

    mock.onPost("/api/account/login/").reply(200, response);

    const handleSubmit = jest.fn();

    render(
      <Wrapper>
        <TestComponent onSubmit={handleSubmit} />
      </Wrapper>,
    );

    act(() => {
      fireEvent.click(screen.getByText("Submit"));
    });

    await screen.findByText("Submit");

    expect(handleSubmit).toHaveBeenCalledWith("success");
  });

  it("should show alert on login failure", async () => {
    const userData: UserCredentials = { username: "testuser", password: null };
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    mock.onPost("/api/account/login/").reply(500);

    const handleSubmit = jest.fn();

    render(
      <Wrapper>
        <TestComponent onSubmit={handleSubmit} />
      </Wrapper>,
    );

    act(() => {
      fireEvent.click(screen.getByText("Submit"));
    });

    await screen.findByText("Submit");
    alertMock.mockRestore();
  });
});

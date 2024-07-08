import { afterEach, beforeEach, describe, expect, it, jest } from "@jest/globals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import useCreateAccount from "../useCreateAccount";
import React, { act } from "react";
import { ResponseUserData, UserCredentials } from "../../types/user";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("../../api/api", () => ({
  createAccount: jest.fn((userData: UserCredentials) => {
    // Mock implementation to use axios
    return axios.post("/api/account/", userData);
  }),
}));

const queryClient = new QueryClient();

const Wrapper = ({ children }) => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </RecoilRoot>
);

const TestComponent = ({ onSubmit, userData }) => {
  const { mutate, isSuccess, isError } = useCreateAccount();

  React.useEffect(() => {
    if (isSuccess) {
      onSubmit("success");
    }
    if (isError) {
      onSubmit("error");
      alert("회원가입에 실패했습니다.");
    }
  }, [isSuccess, isError, onSubmit]);

  return <button onClick={() => mutate(userData)}>Submit</button>;
};

describe("useCreateAccount", () => {
  let mock = new MockAdapter(axios);

  beforeEach(() => {
    jest.clearAllMocks();
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it("should call createAccount API and set auth state on success", async () => {
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

    mock.onPost("/api/account/").reply(200, response);

    const handleSubmit = jest.fn();

    render(
      <Wrapper>
        <TestComponent onSubmit={handleSubmit} userData={{ username: "testuser", password: "password" }} />
      </Wrapper>,
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Submit"));
    });

    expect(handleSubmit).toHaveBeenCalledWith("success");
  });

  it("should show alert on createAccount failure", async () => {
    mock.onPost("/api/account/").reply(500);
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    const handleSubmit = jest.fn();

    render(
      <Wrapper>
        <TestComponent onSubmit={handleSubmit} userData={{ username: "", password: "password" }} />
      </Wrapper>,
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Submit"));
    });

    expect(handleSubmit).toHaveBeenCalledWith("error");
    expect(alertMock).toHaveBeenCalledWith("회원가입에 실패했습니다.");
    alertMock.mockRestore();
  });
});

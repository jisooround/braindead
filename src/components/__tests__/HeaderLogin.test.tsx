import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HeaderLogin from "../header/HeaderLogin";
import useLogin from "../../hooks/useLogin";
import { jest, describe, beforeEach, expect, it } from "@jest/globals";
import { UseMutationResult } from "@tanstack/react-query";
import { ResponseUserData, UserCredentials } from "../../types/user";

jest.mock("../../hooks/useLogin");

const mockUseLogin = useLogin as jest.MockedFunction<typeof useLogin>;

describe("HeaderLogin", () => {
  beforeEach(() => {
    mockUseLogin.mockReturnValue({
      mutate: jest.fn(),
    } as unknown as UseMutationResult<ResponseUserData, Error, UserCredentials, unknown>);
  });

  it("renders the login form", () => {
    render(<HeaderLogin />);
    expect(screen.getByText("WELCOME BACK")).toBeDefined();
    expect(screen.getByPlaceholderText("User Name")).toBeDefined();
    expect(screen.getByPlaceholderText("Password")).toBeDefined();
    expect(screen.getByRole("button", { name: "SIGN IN" })).toBeDefined();
  });

  it("calls the login function with the correct data when the form is submitted", () => {
    const mockMutate = jest.fn();
    mockUseLogin.mockReturnValue({
      mutate: mockMutate,
    } as unknown as UseMutationResult<ResponseUserData, Error, UserCredentials, unknown>);

    render(<HeaderLogin />);

    const usernameInput = screen.getByPlaceholderText("User Name");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: "SIGN IN" });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(mockMutate).toHaveBeenCalledWith({
      username: "testuser",
      password: "password123",
    });
  });
});

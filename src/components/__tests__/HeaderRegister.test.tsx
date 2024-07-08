import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import useCreateAccount from "../../hooks/useCreateAccount";
import { ResponseUserData, UserCredentials } from "../../types/user";
import { UseMutationResult } from "@tanstack/react-query";
import HeaderRegister from "../header/HeaderRegister";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../hooks/useCreateAccount");

const mockUseCreateAccount = useCreateAccount as jest.MockedFunction<typeof useCreateAccount>;

describe("HeaderRegister", () => {
  beforeEach(() => {
    mockUseCreateAccount.mockReturnValue({
      mutate: jest.fn(),
    } as unknown as UseMutationResult<ResponseUserData, Error, UserCredentials, unknown>);
  });

  it("renders the register form", () => {
    render(
      <MemoryRouter>
        <HeaderRegister />
      </MemoryRouter>,
    );

    expect(screen.getByPlaceholderText("User Name")).toBeDefined();
    expect(screen.getByPlaceholderText("Password")).toBeDefined();
    expect(screen.getByPlaceholderText("Confirm Password")).toBeDefined();
    expect(screen.getByLabelText(/I accept the/i)).toBeDefined();
    expect(screen.getByLabelText(/T&C/)).toBeDefined();
    expect(screen.getByLabelText(/PP/)).toBeDefined();
    expect(screen.getByLabelText(/Subscribe to email marketing/i)).toBeDefined();
    expect(screen.getByRole("button", { name: "CREATE" })).toBeDefined();
  });
});

it("calls the register function with the correct data when the form is submitted", () => {
  const mockMutate = jest.fn();
  mockUseCreateAccount.mockReturnValue({
    mutate: mockMutate,
  } as unknown as UseMutationResult<ResponseUserData, Error, UserCredentials, unknown>);

  render(
    <MemoryRouter>
      <HeaderRegister />
    </MemoryRouter>,
  );

  const usernameInput = screen.getByPlaceholderText("User Name");
  const passwordInput = screen.getByPlaceholderText("Password");
  const confirmPasswordInput = screen.getByPlaceholderText("Confirm Password");
  const firstCheckbox = screen.getByLabelText(/I accept the/i);
  const secondCheckbox = screen.getByLabelText(/Subscribe to email marketing/i);
  const submitButton = screen.getByRole("button", { name: "CREATE" });

  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "password123" } });
  fireEvent.click(firstCheckbox); // 첫 번째 체크박스 클릭
  fireEvent.click(secondCheckbox); // 두 번째 체크박스 클릭
  fireEvent.click(submitButton); // 제출 버튼 클릭

  expect(mockMutate).toHaveBeenCalledWith({
    username: "testuser",
    password: "password123",
  });
});

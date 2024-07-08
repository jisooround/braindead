import { render, screen, fireEvent } from "@testing-library/react"; // @testing-library/react에서 제공하는 테스트 유틸리티 임포트
import HeaderLogin from "../header/HeaderLogin"; // 테스트할 HeaderLogin 컴포넌트 임포트
import useLogin from "../../hooks/useLogin"; // 로그인용 커스텀 훅 임포트
import { jest, describe, beforeEach, expect, it } from "@jest/globals"; // Jest에서 제공하는 테스트 함수들 임포트
import { UseMutationResult } from "@tanstack/react-query"; // react-query에서 사용하는 mutation 결과 타입 임포트
import { ResponseUserData, UserCredentials } from "../../types/user"; // 사용자 데이터와 자격 증명 타입 임포트

jest.mock("../../hooks/useLogin"); // useLogin 훅을 모킹

const mockUseLogin = useLogin as jest.MockedFunction<typeof useLogin>; // 모킹된 useLogin 훅을 타입 캐스팅

describe("HeaderLogin", () => {
  // HeaderLogin 테스트 스위트 설명
  beforeEach(() => {
    // 각 테스트가 실행되기 전에 실행되는 부분
    mockUseLogin.mockReturnValue({
      // useLogin 훅의 반환값을 모킹
      mutate: jest.fn(), // mutate 함수에 jest 함수 할당
    } as unknown as UseMutationResult<ResponseUserData, Error, UserCredentials, unknown>); // 예상 타입으로 캐스팅
  });

  it("renders the login form", () => {
    // 로그인 폼을 렌더링하는지 테스트
    render(<HeaderLogin />); // HeaderLogin 컴포넌트를 렌더링
    expect(screen.getByText("WELCOME BACK")).toBeDefined(); // "WELCOME BACK" 텍스트가 있는지 확인
    expect(screen.getByPlaceholderText("User Name")).toBeDefined(); // "User Name" 플레이스홀더 텍스트가 있는지 확인
    expect(screen.getByPlaceholderText("Password")).toBeDefined(); // "Password" 플레이스홀더 텍스트가 있는지 확인
    expect(screen.getByRole("button", { name: "SIGN IN" })).toBeDefined(); // "SIGN IN" 버튼이 있는지 확인
  });

  it("calls the login function with the correct data when the form is submitted", () => {
    // 폼 제출 시 올바른 데이터로 로그인 함수가 호출되는지 테스트
    const mockMutate = jest.fn(); // mutate 함수의 모킹된 버전 생성
    mockUseLogin.mockReturnValue({
      // 모킹된 useLogin 훅의 반환값을 설정
      mutate: mockMutate, // 모킹된 mutate 함수 할당
    } as unknown as UseMutationResult<ResponseUserData, Error, UserCredentials, unknown>); // 예상 타입으로 캐스팅

    render(<HeaderLogin />); // HeaderLogin 컴포넌트를 렌더링

    const usernameInput = screen.getByPlaceholderText("User Name"); // "User Name" 입력 필드 선택
    const passwordInput = screen.getByPlaceholderText("Password"); // "Password" 입력 필드 선택
    const submitButton = screen.getByRole("button", { name: "SIGN IN" }); // "SIGN IN" 버튼 선택

    fireEvent.change(usernameInput, { target: { value: "testuser" } }); // username 입력 필드에 "testuser" 값을 입력
    fireEvent.change(passwordInput, { target: { value: "password123" } }); // password 입력 필드에 "password123" 값을 입력
    fireEvent.click(submitButton); // "SIGN IN" 버튼 클릭

    expect(mockMutate).toHaveBeenCalledWith({
      // mockMutate 함수가 올바른 데이터로 호출되었는지 확인
      username: "testuser", // username이 "testuser" 인지 확인
      password: "password123", // password가 "password123" 인지 확인
    });
  });
});

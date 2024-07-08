import React, { act } from "react"; // React와 act를 임포트
import { RecoilRoot } from "recoil"; // Recoil의 RecoilRoot를 임포트
import { render, screen, fireEvent } from "@testing-library/react"; // @testing-library/react에서 필요한 함수들 임포트
import { jest, describe, beforeEach, afterEach, expect, it } from "@jest/globals"; // Jest의 테스트 함수들 임포트
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // react-query에서 QueryClient와 QueryClientProvider 임포트
import useLogin from "../useLogin"; // useLogin 훅 임포트
import { ResponseUserData, UserCredentials } from "../../types/user"; // 사용자 데이터 타입 임포트
import MockAdapter from "axios-mock-adapter"; // axios-mock-adapter 임포트
import axios from "axios"; // axios 임포트

jest.mock("../../api/api", () => ({
  // api 모듈의 login 함수를 모킹
  login: jest.fn((userData: UserCredentials) => {
    // Mock implementation to use axios
    return axios.post("/api/account/login/", userData);
  }),
}));

const queryClient = new QueryClient(); // 새로운 QueryClient 인스턴스 생성

const Wrapper = (
  { children }, // 테스트에 필요한 Providers를 포함한 Wrapper 컴포넌트 생성
) => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </RecoilRoot>
);

const TestComponent = ({ onSubmit, userData }) => {
  // 테스트용 컴포넌트 생성
  const { mutate, isSuccess, isError } = useLogin(); // useLogin 훅 사용

  React.useEffect(() => {
    // 성공 또는 오류 시 onSubmit 함수 호출
    if (isSuccess) {
      onSubmit("success");
    }
    if (isError) {
      onSubmit("error");
      alert("로그인에 실패했습니다.");
    }
  }, [isSuccess, isError, onSubmit]);

  return <button onClick={() => mutate(userData)}>Submit</button>; // 버튼 클릭 시 mutate 함수 호출
};

describe("useLogin", () => {
  // useLogin 테스트 스위트
  let mock: MockAdapter; // axios-mock-adapter 인스턴스 선언

  beforeEach(() => {
    // 각 테스트 전에 실행
    jest.clearAllMocks(); // 모든 모킹 초기화
    mock = new MockAdapter(axios); // axios-mock-adapter 인스턴스 생성
  });

  afterEach(() => {
    // 각 테스트 후에 실행
    mock.restore(); // mock 초기화
  });

  it("should call login API and set auth state on success", async () => {
    // 성공적인 로그인 시 API 호출과 상태 설정 테스트
    const response: ResponseUserData = {
      // API 응답 데이터
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

    mock.onPost("/api/account/login/").reply(200, response); // API 호출 모킹, 성공 응답 설정

    const handleSubmit = jest.fn(); // 제출 핸들러 모킹

    render(
      // 테스트용 컴포넌트 렌더링
      <Wrapper>
        <TestComponent onSubmit={handleSubmit} userData={{ username: "testuser", password: "password" }} />
      </Wrapper>,
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Submit"));
    });

    expect(handleSubmit).toHaveBeenCalledWith("success"); // 제출 핸들러가 성공 메시지로 호출되었는지 확인
  });

  it("should show alert on login failure", async () => {
    mock.onPost("/api/account/login/").reply(500); // API 호출 모킹, 실패 응답 설정
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    const handleSubmit = jest.fn(); // 제출 핸들러 모킹

    render(
      // 테스트용 컴포넌트 렌더링
      <Wrapper>
        <TestComponent onSubmit={handleSubmit} userData={{ username: null, password: null }} />
      </Wrapper>,
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Submit"));
    });

    expect(handleSubmit).toHaveBeenCalledWith("error");
    expect(alertMock).toHaveBeenCalledWith("로그인에 실패했습니다.");
    alertMock.mockRestore();
  });
});

import { useMutation } from "@tanstack/react-query";
import { login } from "../api/api";
import { authTokenState } from "../recoil/atoms/authAtom";
import { useSetRecoilState } from "recoil";
import { UserCredentials } from "../types/user";

export default function useLogin() {
  const setAuthState = useSetRecoilState(authTokenState);

  return useMutation({
    mutationFn: (userData: UserCredentials) => login(userData),
    onSuccess: (data) => {
      setAuthState(data);
    },
    onError: () => {
      alert("로그인에 실패했습니다.");
    },
  });
}

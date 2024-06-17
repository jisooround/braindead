import { useMutation } from "@tanstack/react-query";
import { createAccount } from "../api/api";
import { authTokenState } from "../recoil/atoms/authAtom";
import { useSetRecoilState } from "recoil";
import { UserCredentials } from "../types/user";

export default function useCreateAccount() {
  const setAuthTokenData = useSetRecoilState(authTokenState);

  return useMutation({
    mutationFn: (userData: UserCredentials) => createAccount(userData),
    onSuccess: (data) => {
      setAuthTokenData(data);
    },
    onError: () => {
      alert("회원가입에 실패했습니다.");
    },
  });
}

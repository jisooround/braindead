import { useRecoilValue } from "recoil";
import { authTokenState } from "../recoil/atoms/authAtom";
import { useQuery } from "@tanstack/react-query";
import { getUserMe } from "../api/api";

function useGetUserData() {
  const authState = useRecoilValue(authTokenState);
  return useQuery({
    queryKey: ["userMe", authState?.token], // query키는 어떻게 결정할까? - 이 데이터가 무슨 데이터인지 알려줌(=myCart), - 이 데이터가 어떤 값에 의존해서 변하는지 알려줌(token=user)
    queryFn: () => getUserMe(),
  });
}

export default useGetUserData;

import { useQuery } from "@tanstack/react-query";
import { getMyCart } from "../api/api";
import { authTokenState } from "../recoil/atoms/authAtom";
import { useRecoilValue } from "recoil";

function useGetMyCart() {
  const authState = useRecoilValue(authTokenState);
  return useQuery({
    queryKey: ["myCart", authState?.token], // query키는 어떻게 결정할까? - 이 데이터가 무슨 데이터인지 알려줌(=myCart), - 이 데이터가 어떤 값에 의존해서 변하는지 알려줌(token=user)
    queryFn: () => getMyCart(),
    enabled: Boolean(authState?.token),
  });
}

export default useGetMyCart;

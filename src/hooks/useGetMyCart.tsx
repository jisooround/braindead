import { useQuery } from "@tanstack/react-query";
import { getMyCart } from "../api/api";
import { authTokenState } from "../recoil/atoms/authAtom";
import { useRecoilValue } from "recoil";

function useGetMyCart() {
  const authState = useRecoilValue(authTokenState);
  return useQuery({
    queryKey: ["myCart", authState?.token],
    queryFn: () => getMyCart(),
  });
}

export default useGetMyCart;

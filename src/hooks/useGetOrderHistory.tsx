import { useQuery } from "@tanstack/react-query";
import { getMyCart, getOrderHistory } from "../api/api";
import { authTokenState } from "../recoil/atoms/authAtom";
import { useRecoilValue } from "recoil";

function useGetOrderHistory() {
  const authState = useRecoilValue(authTokenState);
  return useQuery({
    queryKey: ["myOrder", authState?.token],
    queryFn: () => getOrderHistory(),
  });
}

export default useGetOrderHistory;

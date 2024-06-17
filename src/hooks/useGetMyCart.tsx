import { useQuery } from "@tanstack/react-query";
import { getMyCart } from "../api/api";

function useGetMyCart(isLoggedIn: boolean) {
  return useQuery({ queryKey: ["myCart"], queryFn: () => getMyCart(), enabled: isLoggedIn });
}

export default useGetMyCart;

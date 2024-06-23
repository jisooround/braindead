import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../api/api";

export default function useGetDetails(productId: number) {
  return useQuery({ queryKey: ["productDetails", productId], queryFn: () => getProductDetails(productId) });
}

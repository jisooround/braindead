import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/api";

export default function useGetCategory(category: string) {
  return useQuery({ queryKey: ["products", category], queryFn: () => getProducts(category) });
}

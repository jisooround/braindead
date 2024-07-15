import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "../api/api";

export default function useSearch(params) {
  return useQuery({ queryKey: ["search", params], queryFn: () => searchProducts(params) });
}

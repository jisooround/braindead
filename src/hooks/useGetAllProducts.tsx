import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/api";

export default function useGetAllProducts() {
  return useQuery({ queryKey: ["allProducts"], queryFn: () => getAllProducts() });
}

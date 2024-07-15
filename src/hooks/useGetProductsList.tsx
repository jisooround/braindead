import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getProductsList } from "../api/api";
import { ProductPage } from "../types/products";

export default function useGetProductsList(category: string, pageSize: number): UseQueryResult<ProductPage> {
  return useQuery({
    queryKey: ["allProducts", category, pageSize],
    queryFn: () => getProductsList({ category, pageSize }),

    staleTime: 5 * 60 * 1000, // 5분 동안 캐시 유지
    refetchOnWindowFocus: false, // 윈도우 포커스 시 재요청 비활성화
  });
}

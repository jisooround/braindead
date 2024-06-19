import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchCartItem } from "../api/api";
import { CartData, PatchCartData } from "../types/cart";

function usePatchCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (patchData: PatchCartData) => patchCartItem(patchData),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["myCart"] });
    },
    onError: () => {
      alert("장바구니 수정 실패");
    },
  });
}

export default usePatchCartItem;

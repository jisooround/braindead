import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCartItem } from "../api/api";
import { CartData } from "../types/cart";

function useAddCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (cartData: CartData) => addCartItem(cartData),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["myCart"] });
      queryClient.invalidateQueries({ queryKey: ["recommended"] });
    },
    onError: () => {
      alert("장바구니 추가 실패");
    },
  });
}

export default useAddCartItem;

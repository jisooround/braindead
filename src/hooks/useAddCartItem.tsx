import { useMutation } from "@tanstack/react-query";
import { addCartItem } from "../api/api";
import { CartData } from "../types/cart";

function useAddCartItem() {
  return useMutation({
    mutationFn: (cartData: CartData) => addCartItem(cartData),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {
      alert("장바구니 추가 실패");
    },
  });
}

export default useAddCartItem;

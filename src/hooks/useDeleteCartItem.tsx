import { useMutation } from "@tanstack/react-query";
import { deleteCartItem } from "../api/api";
import { DeleteCartItem } from "../types/cart";

function useDeleteCartItem() {
  return useMutation({
    mutationFn: (deleteData: DeleteCartItem) => deleteCartItem(deleteData),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {
      alert("장바구니 삭제 실패");
    },
  });
}

export default useDeleteCartItem;

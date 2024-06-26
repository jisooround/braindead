import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItem } from "../api/api";
import { DeleteCartItem } from "../types/cart";

function useDeleteCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (deleteData: DeleteCartItem) => deleteCartItem(deleteData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["myCart"] });
      queryClient.invalidateQueries({ queryKey: ["recommended"] });
    },
    onError: () => {
      alert("장바구니 삭제 실패");
    },
  });
}

export default useDeleteCartItem;

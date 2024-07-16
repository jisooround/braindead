import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkouts } from "../api/api";

function useCheckout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => checkouts(),
    onSuccess: (data) => {
      // console.log(data);
      queryClient.invalidateQueries({ queryKey: ["myCart"] });
    },
    onError: () => {
      alert("체크아웃 실패");
    },
  });
}

export default useCheckout;

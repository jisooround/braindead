import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userPoint } from "../api/api";
import { userPointAdd } from "../types/user";

function useAddPoint() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userPointAddData: userPointAdd) => userPoint(userPointAddData),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["userMe"] });
    },
    onError: () => {
      alert("장바구니 삭제 실패");
    },
  });
}

export default useAddPoint;

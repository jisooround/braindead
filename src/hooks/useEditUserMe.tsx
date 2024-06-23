import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUserMe } from "../api/api";
import { EditUser } from "../types/user";

function useEditUserMe() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (editUserData: EditUser) => editUserMe(editUserData),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["userMe"] });
    },
    onError: () => {
      alert("정보 수정 실패");
    },
  });
}

export default useEditUserMe;

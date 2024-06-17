import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { ResponseUserData } from "../../types/user";

const { persistAtom } = recoilPersist();

export const authTokenState = atom<ResponseUserData | null>({
  key: "authTokenState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

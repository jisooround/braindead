import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const authTokenState = atom<string | null>({
  key: "authTokenState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

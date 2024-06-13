import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const previousUrlState = atom<string | null>({
  key: "previousUrlState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

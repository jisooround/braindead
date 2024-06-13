import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { AuthenticationResponse } from "../../types/user";

const { persistAtom } = recoilPersist();

export const authTokenState = atom<AuthenticationResponse | null>({
  key: "authTokenState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

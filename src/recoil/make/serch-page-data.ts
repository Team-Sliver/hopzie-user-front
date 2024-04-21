import { recoilKeys } from "@/recoil-keys";
import { atom } from "recoil";

export const searchPageState = atom<string>({
    key: recoilKeys.searchPageAtom,
    default: '',
});
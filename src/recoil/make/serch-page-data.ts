import { recoilKeys } from "@/recoil-keys";
import { atom } from "recoil";

export const searchPageState = atom<string>({
    key: recoilKeys.searchPageAtom,
    default: '',
});

export const categoryState = atom<string>({
    key: recoilKeys.categoryPageAtom,
    default: '',
});


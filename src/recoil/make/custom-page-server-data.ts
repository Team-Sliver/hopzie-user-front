import { recoilKeys } from "@/recoil-keys";
import { atom } from "recoil";
import { ChannelData } from "./types";
import { getChannelData } from "@/lib/api/response/api-repositoy";
import { recoilPersist } from "recoil-persist";

async function getCustomPageData () {
    const data = await getChannelData({
        channelNickname : "@choimona",
        uid : "0NqIvQ"
    })
    return data
}

const { persistAtom } = recoilPersist({
    key: recoilKeys.customPageAtomPersist,
    storage: typeof window !== 'undefined' ? sessionStorage : undefined,
});


export const hopziePagesState = atom<ChannelData | null>({
    key: recoilKeys.customPageAtom,
    default: getCustomPageData(),
    effects_UNSTABLE: [persistAtom],
});
import { recoilKeys } from "@/recoil-keys";
import { atom, atomFamily } from "recoil";
import { ChannelData } from "./types";
import { getChannelData } from "@/lib/api/response/api-repositoy";
import { recoilPersist } from "recoil-persist";

export async function getCustomPageData ({channelNickname, uid, referrer} : {channelNickname : string, uid : string, referrer : string}) {
    // 여기 변수로 바꿔야함.
    const data = await getChannelData({
        channelNickname : channelNickname,
        uid : uid,
        referrer : referrer
    })
    return data
}

// const { persistAtom } = recoilPersist({
//     key: recoilKeys.customPageAtomPersist,
//     storage: typeof window !== 'undefined' ? sessionStorage : undefined,
// });


export const customPageState = atom<ChannelData | null>({
    key: recoilKeys.customPageAtom,
    default: null,
    // effects_UNSTABLE: [persistAtom],
});
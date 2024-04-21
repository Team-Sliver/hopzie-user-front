'use client'

import { RecoilRoot } from "recoil"
import { CustomPage } from "./custompage"


export function Content({
    channelNickname, uid
} : {channelNickname : string, uid : string}) {

    return <RecoilRoot>
        <CustomPage channelNickname={channelNickname} uid={uid} />
    </RecoilRoot>
}
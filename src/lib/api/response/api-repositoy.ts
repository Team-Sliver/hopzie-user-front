import { ChannelData } from "@/recoil/make/types";

const apiEndpoint =
    process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:8080'
const apiVersion = process.env.NEXT_PUBLIC_API_VERSION || 'v1'

export async function getChannelData(
    {channelNickname, uid} : {channelNickname : string, uid : string}
): Promise<ChannelData | null> {
    // 이전 페이지 레퍼럴 알아내기
    const referrer = document.referrer ? `?referrer=${document.referrer}` : '';
    const url = `${apiEndpoint}/${apiVersion}/custompages/${channelNickname}/${uid}${referrer}`

    try {
        const response = await fetch(url)

        if(response.status === 200) {
            const data: ChannelData = await response.json();
            return data
        } else {
            return null
        }   
    } catch (error) {
        console.error("[Error]:", error);
        return null
    }
}
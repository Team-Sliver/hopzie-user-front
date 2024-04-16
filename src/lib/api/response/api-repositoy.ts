import { ChannelData } from "@/recoil/make/types";

const apiEndpoint =
    process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:8080'
const apiVersion = process.env.NEXT_PUBLIC_API_VERSION || 'v1'

export async function getChannelData(
    {channelNickname, uid, referrer} : {channelNickname : string, uid : string, referrer : string}
): Promise<ChannelData | null> {
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

export async function productClickUpdate({productUid} : {productUid : string}) {
    const url = `${apiEndpoint}/${apiVersion}/products/${productUid}`

    fetch(url)
        .then((response) => {
          if (response.status === 200) {
          } else {
            console.error("[Issue]:", response.status);
          }
        })
        .catch((error) => {
          console.error("[Error]:", error);
    });
}
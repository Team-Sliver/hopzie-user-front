"use client"

import { getChannelData } from "@/lib/api/response/api-repositoy";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
   <main>
    {/* <CustomPage /> */}
    <Button onClick={async () =>{
       const data = await getChannelData({
        channelNickname : "@choimona",
        uid : "0NqIvQ"
       })

       console.log('data channel : ', data?.channel)
       console.log('data product : ', data?.products)

    }}>
      데이터 확인
    </Button>
  </main>
  );
}

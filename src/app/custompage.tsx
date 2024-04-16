'use client'

import BannerSection from "@/component/bannerSection";
import ContentsSection from "@/component/contentsSection";
import Fotter from "@/component/fotter";
import ProductSection from "@/component/productSection";
import ShareLinkSection from "@/component/shareLinkSection";
import { BasicTitle } from "@/component/titleComponent";
import { customPageState, getCustomPageData } from "@/recoil/make/custom-page-server-data";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";

export function CustomPage() {
    const [screenSize, setScreenSize] = useState('');
    const setCustomPage = useSetRecoilState(customPageState);
    const { channelNickname, uid } = useParams();

    useEffect(() => {

        console.log('channelNickname : ', channelNickname)
        console.log('uid : ', uid)

        // 이전 페이지 레퍼럴 알아내기
        const referrer = typeof window !== 'undefined' ? `?referrer=${encodeURIComponent(document.referrer)}` : '';   
        getCustomPageData({ channelNickname: "@choimona", uid: "0NqIvQ", referrer }).then(data => {
                setCustomPage(data);
        });

        // getCustomPageData({ channelNickname: {channelNickname}, uid: {uid}, referrer }).then(data => {
        //     setCustomPage(data);
        // });

        function handleResize() {
            const width = window.innerWidth
            if (width >= 2560) {
                setScreenSize('xl:w-1/6')
            } else if (width >= 1920) {
                setScreenSize('xl:w-1/5')
            } else {
                setScreenSize('xl:w-1/4')
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const customPageLoadble = useRecoilValueLoadable(
        customPageState
    )

    if(customPageLoadble.state != 'hasValue') {
        return <div>Loading...</div>
    }

    const customPage = customPageLoadble.contents

    return (
        <div className="flex items-center justify-center mt-[40px]">
            <div className="flex flex-col w-full sm:max-w-md">
                <BannerSection 
                    bannerUrl={customPage?.channel.bannerUrl}
                />
                <BasicTitle
                    text="콘텐츠 제품 정보"
                    textSize={18}
                    textWeight={500}
                    mb={24}
                />
                <ProductSection 
                    productList={customPage?.products ?? []}
                />
                <div className="bg-gray-100 w-full h-4 mt-[30px] mb-[50px]"/>
                <BasicTitle
                    text="콘텐츠 정보"
                    textSize={18}
                    textWeight={500}
                    mb={24}
                />
                <ContentsSection 
                    channel={customPage?.channel!}
                    channelNickname="@choimona"
                />
                <ShareLinkSection
                    channel={customPage?.channel!}
                    channelNickname="@choimona"
                />
                <Fotter />
            </div>
        </div>
    )
}
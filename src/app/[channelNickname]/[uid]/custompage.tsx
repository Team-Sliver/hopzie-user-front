"use client";

import BannerSection from "@/component/bannerSection";
import { CategorySection } from "@/component/categorySection";
import ContentsSection from "@/component/contentsSection";
import { pageGuideTextStyle } from "@/component/fontStyle";
import Fotter from "@/component/fotter";
import ProductSection from "@/component/productSection";
import { SearchSection } from "@/component/searchSection";
import ShareLinkSection from "@/component/shareLinkSection";
import { BasicTitle } from "@/component/titleComponent";
import {
  customPageState,
  getCustomPageData,
} from "@/recoil/make/custom-page-server-data";
import { useEffect } from "react";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";

export function CustomPage({
  channelNickname,
  uid,
}: {
  channelNickname: string;
  uid: string;
}) {
  const setCustomPage = useSetRecoilState(customPageState);

  useEffect(() => {
    const referrer =
      typeof window !== "undefined"
        ? `?referrer=${encodeURIComponent(document.referrer)}`
        : "";
    getCustomPageData({
      channelNickname: channelNickname,
      uid: uid,
      referrer: referrer,
    }).then((data) => {
      setCustomPage(data);
    });
  }, [channelNickname, uid, customPageState, setCustomPage]);

  const customPageLoadble = useRecoilValueLoadable(customPageState);

  if (customPageLoadble.state != "hasValue") {
    return;
  }

  const customPage = customPageLoadble.contents;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-md border lg:border-none lg:max-w-screen-xl">
        <div className="flex flex-col mx-[12px] justfiy-center items-center">
          <BannerSection bannerUrl={customPage?.channel.bannerUrl} />
          <div className="flex sm:max-w-md w-full flex-col justfiy-center items-center">
            <div className="flex w-full items-start justify-start">
              <BasicTitle
                text="콘텐츠 제품 정보"
                textSize={18}
                textWeight={500}
                mb={16}
              />
            </div>
            <div className="flex flex-row w-full">
              <SearchSection
                placeholder="상품을 검색해보세요."
                icon="/search.svg"
                endIcon="/xmark.circle.fill.svg"
              />
              <CategorySection productList={customPage?.products ?? []} />
            </div>
            <div className="mb-4">
              <p
                className="text-base text-gray-600 font-normal"
                style={pageGuideTextStyle}
              >
                * 파트너스 활동을 통해 수수료를 제공받을 수 있고 이는 채널
                운영에 도움이 됩니다.
              </p>
              <p
                className="text-base text-gray-600 font-normal"
                style={pageGuideTextStyle}
              >
                * 품절 및 링크가 사라진 경우. 알려주시면 수정하겠습니다.
                감사합니다.
              </p>
            </div>
          </div>
          <ProductSection productList={customPage?.products ?? []} />
          
        </div>
        <div className="bg-gray-100 w-full h-4 mt-[30px] mb-[50px]" />
        <div className="flex flex-col mx-[12px] justfiy-center items-center">
          <div className="flex sm:max-w-md w-full flex-col justfiy-center items-center">
            <div className="flex w-full items-start justify-start">
              <BasicTitle
                text={
                  customPage?.channel!.content.linkUrl === ""
                    ? ""
                    : "콘텐츠 정보"
                }
                textSize={18}
                textWeight={500}
                mb={24}
              />
            </div>
            <ContentsSection
              channel={customPage?.channel!}
              channelNickname={channelNickname}
            />
          </div>
          <ShareLinkSection
            channel={customPage?.channel!}
            channelNickname={channelNickname}
          />
        </div>
        <Fotter />
      </div>
    </div>
  );
}

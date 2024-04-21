"use client";

import BannerSection from "@/component/bannerSection";
import ContentsSection from "@/component/contentsSection";
import Fotter from "@/component/fotter";
import ProductSection from "@/component/productSection";
import { SearchSection } from "@/component/searchSection";
import ShareLinkSection from "@/component/shareLinkSection";
import { BasicTitle } from "@/component/titleComponent";
import {
  customPageState,
  getCustomPageData,
} from "@/recoil/make/custom-page-server-data";
import { useEffect} from "react";
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
      referrer,
    }).then((data) => {
      setCustomPage(data);
    });
  }, []);

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
            <SearchSection
              placeholder="찾고있는 상품을 검색해보세요."
              icon="/search.svg"
              endIcon="/xmark.circle.fill.svg"
            />
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
              channelNickname="@choimona"
            />
          </div>
          <ShareLinkSection
            channel={customPage?.channel!}
            channelNickname="@choimona"
          />
        </div>
        <Fotter />
      </div>
    </div>
  );
}

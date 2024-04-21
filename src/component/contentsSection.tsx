import { openOutLink } from "@/lib/api/response/outlink-function";
import { Channel, Content } from "@/recoil/make/types";
import { Image } from "@nextui-org/react";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { commonTextStyle } from "./fontStyle";

function ContentsSection({
  channel,
  channelNickname,
}: {
  channel: Channel;
  channelNickname: string;
}) {
  useEffect(() => {
    const onBlurSaveItem = () => {
      /* implementation */
    };
    const onVisibilityChangeSaveItem = () => {
      /* implementation */
    };

    window.addEventListener("blur", onBlurSaveItem);
    document.addEventListener("visibilitychange", onVisibilityChangeSaveItem);
    return () => {
      window.removeEventListener("blur", onBlurSaveItem);
      document.removeEventListener(
        "visibilitychange",
        onVisibilityChangeSaveItem
      );
    };
  }, []);

  if (channel === undefined) {
    // 로딩중
    return <div></div>;
  }

  if (channel.content.linkUrl === "") {
    // 컨텐츠가 없음.
    return <div></div>;
  }

  const url = new URL(channel.content.linkUrl);
  const isShort = url.pathname.includes("shorts/");
  const contentId = isShort
    ? url.pathname.match(/shorts\/([^/]+)/)?.[1]
    : url.searchParams.get("v");

  const onClickHandler = (url: string) => {
    // Assuming openOutLink is a defined function elsewhere
    openOutLink({ appLink: `youtube://${url}`, webLink: `https://${url}` });
  };

  return (
    <div className="contents">
      <div
        className="w-full aspect-w-16 aspect-h-9"
        style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${contentId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            padding: "0",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      <div className="flex w-full items-start mt-[16px]">
        <Image
          height={56}
          width={56}
          className="inline-block h-14 w-14 rounded-full"
          src={channel.profileImageUrl}
          alt="profile_image"
          onClick={() =>
            onClickHandler(
              `${isMobile ? "m" : "www"}.youtube.com/${channelNickname}`
            )
          }
        />
        <div
          className="ml-[12px]"
          onClick={() =>
            onClickHandler(
              `${isMobile ? "m" : "www"}.youtube.com/watch?v=${contentId}`
            )
          }
        >
          <p
            className="text-base text-gray-600 font-normal line-clamp-2"
            style={commonTextStyle}
          >
            {channel.content.title}
          </p>
          <p className="text-gray-600 text-sm" style={commonTextStyle}>
            by. {channel.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentsSection;
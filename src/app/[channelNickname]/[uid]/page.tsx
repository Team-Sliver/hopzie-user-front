import { Content } from "./content";
import { getChannelData } from "@/lib/api/response/api-repositoy";
import { Metadata } from "next";

interface ChannelPageProps {
  channelNickname: string;
  uid: string;
}

export async function generateMetadata({
  params,
}: {
  params: ChannelPageProps;
}): Promise<Metadata> {
  const channelNickname = params.channelNickname;
  const uid = params.uid;
  // const referrer = headers().get("referer") ?? "";
  const response = await getChannelData({
    channelNickname: channelNickname,
    uid: uid,
    referrer: '',
  });

  let pageTitle = decodeURIComponent(channelNickname).replace('@', '');
  const contentTitle = response?.channel.content.title;
  if (contentTitle) {
    // 여기서 크롬탭에 표시되는 이름 설정하기.
    pageTitle = pageTitle + " - " + contentTitle;
  }
  return {
    title: pageTitle,
    openGraph: {
      type: "website",
    //   url: '홉지 url'
      title: `${pageTitle}의 상품을 구경해보세요.`,
    //   description: "My Website Description",
      siteName: "Hopzie",
      images: [
        {
          url: "/og_image.png",
        },
      ],
    },
  };
}

export default function Page({ params }: { params: ChannelPageProps }) {
  const channelNickname = params.channelNickname;
  const uid = params.uid;
  return (
    <div>
      <Content channelNickname={channelNickname} uid={uid} />
    </div>
  );
}

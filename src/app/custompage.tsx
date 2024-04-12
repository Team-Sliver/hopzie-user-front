// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Swal from "sweetalert2";

// interface ChannelData {
//   bannerUrl?: string;
//   title: string;
//   content: {
//     title: string;
//   };
// }

// interface CustomPageProps {
//   channel: ChannelData;
//   products: Product[];
// }

// function CustomPage() {
//   const router = useRouter();
//   const { channelNickname, uid } = router.query as {
//     channelNickname?: string;
//     uid?: string;
//   };
//   const [currentChannel, setCurrentChannel] = useState<ChannelData | undefined>(undefined);
//   const [currentProducts, setCurrentProducts] = useState<Product[] | undefined>(undefined);

//   const errorHandler = () => {
//     Swal.fire({
//       text: "올바르지 않은 경로입니다",
//       icon: "error",
//       showConfirmButton: false,
//       timer: 1500,
//     }).then(() => {
//       router.push("/");
//     });
//   };

//   useEffect(() => {
//     if (channelNickname && uid) {
//       const referrer = document.referrer ? `?referrer=${document.referrer}` : '';
//       fetch(`https://hopzie.co/api/v1/custompages/${channelNickname}/${uid}${referrer}`)
//         .then((response) => {
//           if (response.status === 200) {
//             return response.json();
//           } else {
//             errorHandler();
//           }
//         })
//         .then((data: CustomPageProps) => {
//           if (data.channel && data.products) {
//             const htmlTitle = document.querySelector("title");
//             if (htmlTitle) {
//               htmlTitle.innerHTML = `${data.channel.title} - ${data.channel.content.title}`;
//             }
//             setCurrentChannel(data.channel);
//             setCurrentProducts(data.products);
//           }
//         })
//         .catch((error) => {
//           console.error("[Error]:", error);
//           errorHandler();
//         });
//     }
//   }, [channelNickname, uid]);

//   if (!currentChannel || !currentProducts) {
//     return null; // 로딩 상태 혹은 데이터 없음을 처리
//   }

//   return (
//     <div className="mx-auto border-0 sm:max-w-md sm:border">
//       <div className="bg-white w-full sm:w-auto min-h-screen">
//         <div className="pt-5">
//           {currentChannel.bannerUrl && (
//             <BannerSection bannerUrl={currentChannel.bannerUrl} />
//           )}
//           <ProductSection products={currentProducts} />
//           {currentChannel.content && (
//             <>
//               <div className="bg-gray-100 w-full h-4 my-7" />
//               <YoutubePlayer
//                 channel={currentChannel}
//                 channelNickname={channelNickname as string}
//               />
//             </>
//           )}
//           <ShareLinkSection channel={currentChannel} />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default CustomPage;

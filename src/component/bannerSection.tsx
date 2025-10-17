// import { Image, Skeleton } from "@nextui-org/react";
// import bannerImage from 'public/calia_banner.jpg'; // 경로에 맞게 수정하세요

// function BannerSection({ bannerUrl }: { bannerUrl?: string }) {
//   if (bannerUrl === undefined) {
//     return (
//       <div className="w-full h-[98px] object-cover rounded-[10px] mb-[30px] mt-[40px]">
//         <Skeleton className="w-full h-full rounded-lg">
//           <div className="h-full w-full rounded-lg bg-secondary" />
//         </Skeleton>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center">
//       <Image
//         //   isBlurred
//         src={bannerUrl}
//         alt="banner"
//         className="w-full h-[98px] object-cover rounded-[10px] mb-[30px] mt-[40px]"
//       />
//     </div>
//   );
// }

// export default BannerSection;

import { Image } from "@nextui-org/react";

// 1. 이미지를 import하면 bannerImage는 { src: '...', width: ..., height: ... } 형태의 객체가 됩니다.
import bannerImage from "@/assets/calia_banner.jpg";

export default function BannerSection() {
  return (
    <div className="flex justify-center">
      <Image
        // 2. 객체 전체가 아닌, .src를 붙여 문자열 경로만 전달합니다.
        src={bannerImage.src}
        alt="배너"
        className="w-full h-[98px] object-cover rounded-[10px] mb-[30px] mt-[40px]"
      />
    </div>
  );
}
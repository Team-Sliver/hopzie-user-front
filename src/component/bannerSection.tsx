import { Image, Skeleton } from "@nextui-org/react";
// import bannerImage from "@/assets/calia_banner.jpg";
// import bannerImage from 'public/calia_banner.jpg'; // 경로에 맞게 수정하세요

function BannerSection({ bannerUrl }: { bannerUrl?: string }) {
  if (bannerUrl === undefined) {
    return (
      <div className="w-full h-[98px] object-cover rounded-[10px] mb-[30px] mt-[40px]">
        <Skeleton className="w-full h-full rounded-lg">
          <div className="h-full w-full rounded-lg bg-secondary" />
        </Skeleton>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <Image
        //   isBlurred
        src={bannerUrl}
        // src={bannerImage}
        alt="banner"
        className="w-full h-[98px] object-cover rounded-[10px] mb-[30px] mt-[40px]"
      />
    </div>
  );
}


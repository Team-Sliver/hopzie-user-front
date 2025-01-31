import { Image, Skeleton } from "@nextui-org/react";

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
        alt="banner"
        className="w-full h-[98px] object-cover rounded-[10px] mb-[30px] mt-[40px]"
      />
    </div>
  );
}

export default BannerSection;

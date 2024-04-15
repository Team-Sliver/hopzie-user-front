import {Image} from "@nextui-org/react";

function BannerSection({ bannerUrl } : { bannerUrl? : string }) {

    if(bannerUrl === undefined) {
        return (
            <div>이미지가 없음.</div>
        )
    }

    return (
        <Image
          isBlurred
          src={bannerUrl}
          alt="banner"
          className="w-full h-[98px] object-cover rounded-[10px] mb-[30px]"
        />
    )
}
  
export default BannerSection;
  
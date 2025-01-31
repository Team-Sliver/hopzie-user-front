import { Product } from "@/recoil/make/types";
import { Image } from "@nextui-org/react";
import { commonTextStyle } from "./fontStyle";
import { productClickUpdate } from "@/lib/api/response/api-repositoy";
import { useRecoilState } from "recoil";
import { categoryState, searchPageState } from "@/recoil/make/serch-page-data";
import { Skeleton } from "@heroui/skeleton";
import { Card } from "@heroui/react";

export function SkeletonProductCard() {
  return <div className="flex flex-col group relative bg-white mb-4 max-w-52">
     <Card className="space-y-5 p-4 shadow-none border border-[#D0D7DE]" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300" />
            </Skeleton>
          </div>
        </Card>
  </div>
}



export function ProductCard({
  product,
  onClick,
  index,
}: {
  product: Product;
  onClick: () => void;
  index: number;
}) {
  return (
    <div className="flex flex-col group relative bg-white mb-4 max-w-52">
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick();
          productClickUpdate({ productUid: product.uid });
        }}
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden border border-gray-400 rounded-[1rem]"
      >
        <Image
          isZoomed
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover object-center"
        />
      </button>
      <div className="mt-2 flex flex-col justify-between">
        <h3 className="text-sm text-gray-700 line-clamp-2">
          <span
            aria-hidden="true"
            className="absolute inset-0"
            style={commonTextStyle}
          />
          {product.title}
        </h3>
        {product.price ? (
          <div>
            <span
              className="text-base font-medium text-gray-900"
              style={commonTextStyle}
            >
              {product.price}
            </span>
            <span
              className="ml-1.5 text-sm text-gray-500 line-through"
              style={commonTextStyle}
            >
              {product.originalPrice}
            </span>
          </div>
        ) : (
          <div>
            {/* <span
              className="text-sm font-medium text-gray-900"
              style={commonTextStyle}
            >          
              판매 중인 상품이 아닙니다.
            </span>
            <span
              className="ml-1.5 text-base font-medium text-gray-900"
              style={commonTextStyle}
            ></span> */}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductSection({ productList }: { productList: Product[] }) {
  const [searchText, setsearchText] = useRecoilState(searchPageState);
  const [category, setCategory] = useRecoilState(categoryState);

  const filteredProducts = productList.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (category ? product.description === category : true) // 카테고리 필터 추가
  );

  if (productList.length == 0) {
    return (
      <div
        className={`w-full grid lg:grid-cols-4 grid-cols-2 gap-x-[14px] gap-y-[20px] justify-between`}
      >
       <SkeletonProductCard></SkeletonProductCard>
       <SkeletonProductCard></SkeletonProductCard>
       <SkeletonProductCard></SkeletonProductCard>
       <SkeletonProductCard></SkeletonProductCard>
       <SkeletonProductCard></SkeletonProductCard>
       <SkeletonProductCard></SkeletonProductCard>
       <SkeletonProductCard></SkeletonProductCard>
       <SkeletonProductCard></SkeletonProductCard>
      </div>
    );
  }

  if (productList.length != 0 && filteredProducts?.length == 0) {
    return <div>검색 결과가 없습니다.</div>;
  }

  return (
    <div
      className={`grid lg:grid-cols-4 grid-cols-2 gap-x-[14px] gap-y-[20px] justify-between`}
    >
       
      {filteredProducts.map((product, index) => (
        <ProductCard
          key={product.uid}
          product={product}
          onClick={() => {
            window.open(product.linkUrl, "_blank", "noopener,noreferrer");
          }}
          index={index}
        />
      ))}
    </div>
  );
}

export default ProductSection;

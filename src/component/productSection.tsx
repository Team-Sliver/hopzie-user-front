import { Product } from "@/recoil/make/types";
import {Button, Image} from "@nextui-org/react";

export function ProductCard(
    {product, onClick} : {product : Product, onClick : () => void}) {

        const commonTextStyle = {
            letterSpacing : '-0.15px', 
            lineHeight : '20px',
            fontFamily : "Pretendard", 
            fontStyle : "none",
        }

        return (
            <div key={product.uid} className="group relative bg-white mb-4">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        onClick()
                        // onClickHandler(product.uid, product.linkUrl);
                    }}
                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden border border-gray-400 rounded-[1rem]"
                    >
                    <Image
                    isZoomed
                    src={product.imageUrl}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"/>
                </button>
                <div className="mt-2 flex flex-col justify-between">
                    <h3 className="text-sm text-gray-700 line-clamp-2">
                        <span aria-hidden="true" className="absolute inset-0" style={commonTextStyle}/>
                        {product.title}
                    </h3>
                    {product.price ? (
                        <div>
                            <span className="text-base font-medium text-gray-900" style={commonTextStyle}>
                            {product.price}
                            </span>
                            <span className="ml-1.5 text-sm text-gray-500 line-through"  style={commonTextStyle}>
                            {product.originalPrice}
                            </span>
                        </div>
                    ) : (
                        <div>
                            <span className="text-sm font-medium text-gray-900"  style={commonTextStyle}>
                            판매 중인 상품이 아닙니다.
                            </span>
                            <span className="ml-1.5 text-base font-medium text-gray-900"  style={commonTextStyle}>
                            </span>
                        </div>
                    )}
                </div>
          </div>
        )
}

function ProductSection({ productList } : { productList : Product[]}) {

    if(productList?.length == 0) {
        return <div>내용이 비었습니다.</div>
    }

    return (
        <div className="grid grid-cols-2 gap-x-[14px] gap-y-[20px]">
            {productList.map((value) => (
                <ProductCard 
                    product={value}
                    onClick={() => {
                        window.open(value.linkUrl, '_blank', 'noopener,noreferrer');
                    }}
                />
            ))}
        </div>
    )
}
  
export default ProductSection;
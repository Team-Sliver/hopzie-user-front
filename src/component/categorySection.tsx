import { categoryState } from "@/recoil/make/serch-page-data";
import { Product } from "@/recoil/make/types";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useRecoilState } from "recoil";

export function CategorySection({ productList }: { productList: Product[] }) {
  const [category, setCategory] = useRecoilState(categoryState);

  // 빈 스트링 제거 및 중복값 제거를 위한 Set 사용
  const uniqueCategory = new Set<string>();

  productList.forEach((product) => {
    if (product.description.trim() !== "") {
      uniqueCategory.add(product.description);
    }
  });

  // Set을 배열로 변환
  const categoryList = Array.from(uniqueCategory);

  return (
    <Autocomplete
      size="sm"
      aria-label="카테고리를 선택하세요."
      placeholder="카테고리"
      variant="bordered"
      className="h-[36px] ml-[8px] max-w-36"
      allowsCustomValue={false}
      radius="full"
      popoverProps={{
        classNames: {
          base: "base-classes",
          content: "content-classes",
          trigger: "trigger-classes",
          backdrop: "backdrop-classes",
        },
      }}
      inputProps={{
        classNames: {
          input: "ml-0 text-[14px]",
          inputWrapper: "h-[36px] border-[1px] border-[#D0D7DE] shadow-none",
        },
      }}
      onInputChange={(value) => {
        setCategory(value);
      }}
    >
      {categoryList.map((category, index) => (
        <AutocompleteItem key={category} value={category} className="text-[14px]">
          {category}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
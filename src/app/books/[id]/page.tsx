import BookShowcase from "@/components/book-showcase";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductReel from "@/components/product-reel";
import type { FC } from "react";

const Page: FC = ({}) => {
  return (
    <div className="w-full min-h-screen">
      <MaxWidthWrapper className="my-8">
        <BookShowcase />
      </MaxWidthWrapper>

      <MaxWidthWrapper className="h-fit my-8 ">
        <ProductReel title="Tuote-ehdotukset" />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;

import BookShowcase from "@/components/book-showcase";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductReel from "@/components/books-reel";
import type { FC } from "react";

const Page: FC = ({}) => {
  return (
    <div className="w-full min-h-screen h-fit">
      <MaxWidthWrapper className="my-8 h-fit">
        <BookShowcase />
      </MaxWidthWrapper>

      <MaxWidthWrapper className="h-fit my-8 ">
        <ProductReel
          title="Tuote-ehdotukset"
          desc="Ehdotukset perustuvat esitetyn tuotteen tekijään, tuoteryhmään tai aiheisiin."
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
